#!/usr/bin/env node
/*
 * Refreshes the "Follow the madness" grid on the home page with the
 * latest public Instagram posts. No Instagram login or token needed:
 * it reads the same public profile widget Instagram offers for embedding.
 *
 *   node scripts/update-instagram.mjs            (uses the handle in config.js)
 *   node scripts/update-instagram.mjs jwmagic_   (or name one)
 *
 * Writes:
 *   assets/img/instagram/<post>.jpg   one square-ish thumbnail per post
 *   assets/js/instagram-feed.js       the list the home page reads
 *
 * If Instagram can't be reached, nothing is changed, so the site keeps
 * showing the last good set of posts. Runs daily via
 * .github/workflows/instagram.yml.
 */
import { readFile, writeFile, readdir, unlink, mkdir, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMG_DIR = path.join(ROOT, "assets/img/instagram");
const FEED_FILE = path.join(ROOT, "assets/js/instagram-feed.js");
const MAX_POSTS = 6;

async function handleFromConfig() {
  const cfg = await readFile(path.join(ROOT, "assets/js/config.js"), "utf8");
  const m = cfg.match(/instagram:\s*"https?:\/\/(?:www\.)?instagram\.com\/([\w.]+)/);
  if (!m) throw new Error("Couldn't find the Instagram link in assets/js/config.js");
  return m[1];
}

function readContext(html) {
  const m = html.match(/"contextJSON":"((?:[^"\\]|\\.)*)"/);
  if (!m) throw new Error("Instagram's profile widget didn't include any posts (it may have changed or blocked the request)");
  return JSON.parse(JSON.parse('"' + m[1] + '"')).context;
}

function pickImage(resources) {
  const square = resources.find((r) => r.config_width === r.config_height && r.config_width >= 600);
  return (square || resources.find((r) => r.config_width >= 600) || resources[resources.length - 1]).src;
}

function firstLine(text) {
  const line = String(text || "").split("\n").map((s) => s.trim()).find(Boolean) || "";
  return line.length > 140 ? line.slice(0, 137).trimEnd() + "…" : line;
}

async function main() {
  const handle = process.argv[2] || (await handleFromConfig());
  const res = await fetch("https://www.instagram.com/" + handle + "/embed/", {
    headers: { "Accept-Language": "en-US,en;q=0.9" }
  });
  if (!res.ok) throw new Error("Instagram answered " + res.status);
  const ctx = readContext(await res.text());

  const posts = (ctx.graphql_media || [])
    .map((g) => g.shortcode_media)
    .filter((m) => m && m.shortcode)
    .slice(0, MAX_POSTS);
  if (!posts.length) throw new Error("No posts found for @" + handle);

  await mkdir(IMG_DIR, { recursive: true });
  const feed = [];
  for (const m of posts) {
    const type = m.__typename === "GraphVideo" ? "video" : m.__typename === "GraphSidecar" ? "carousel" : "photo";
    const file = m.shortcode + ".jpg";
    const dest = path.join(IMG_DIR, file);
    if (!(await access(dest).then(() => true, () => false))) {
      const img = await fetch(pickImage(m.display_resources || [{ src: m.display_url }]));
      if (!img.ok) throw new Error("Couldn't download the picture for post " + m.shortcode);
      await writeFile(dest, Buffer.from(await img.arrayBuffer()));
    }
    const caption = (((m.edge_media_to_caption || {}).edges || [])[0] || {}).node;
    feed.push({
      url: "https://www.instagram.com/" + (type === "video" ? "reel" : "p") + "/" + m.shortcode + "/",
      image: "assets/img/instagram/" + file,
      type,
      caption: firstLine(caption && caption.text),
      date: new Date(m.taken_at_timestamp * 1000).toISOString().slice(0, 10)
    });
  }

  // Remove thumbnails of posts that have dropped out of the latest set.
  const keep = new Set(feed.map((p) => path.basename(p.image)));
  for (const f of await readdir(IMG_DIR)) {
    if (f.endsWith(".jpg") && !keep.has(f)) await unlink(path.join(IMG_DIR, f));
  }

  const out =
    "/*\n" +
    " * Latest Instagram posts shown on the home page.\n" +
    " * Updated automatically every day by scripts/update-instagram.mjs,\n" +
    " * so there's no need to edit this by hand.\n" +
    " */\n" +
    "window.JW_INSTAGRAM = " + JSON.stringify({ handle, posts: feed }, null, 2) + ";\n";
  await writeFile(FEED_FILE, out);
  console.log("Saved " + feed.length + " posts from @" + handle);
}

main().catch((err) => {
  console.error("Instagram update skipped: " + err.message);
  process.exit(1);
});
