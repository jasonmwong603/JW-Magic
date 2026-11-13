"""Write an Artifact-ready copy of index.html (no doctype/html/head/body wrapper).

Usage: python3 phoenix-billing/tools/make_artifact.py <output-path>
Then publish <output-path> with the Artifact tool using
url=https://claude.ai/artifact/3Ha2Yt6LKt5bfvbrLFm9ug so the demo link stays the same.
"""
import pathlib
import re
import sys

src = pathlib.Path(__file__).resolve().parent.parent / "index.html"
s = src.read_text()
for pat in [r"<!doctype html>\n", r'<html lang="en">\n', r"<head>\n", r'<meta charset="utf-8">\n',
            r'<meta name="viewport"[^>]*>\n', r"</head>\n", r"<body>\n", r"</body>\n", r"</html>\n?"]:
    s = re.sub(pat, "", s, count=1)
out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "phoenix-hub.html")
out.write_text(s)
print(f"wrote {out}")
