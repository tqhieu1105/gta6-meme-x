#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
chrome_bin="${CHROME_BIN:-/usr/bin/google-chrome}"
output_file="${1:-$repo_root/meme/meme.png}"

mkdir -p "$(dirname "$output_file")"
"$chrome_bin" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --disable-dev-shm-usage \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size=1080,1080 \
  --screenshot="$output_file" \
  "file://$repo_root/meme/meme.html"
