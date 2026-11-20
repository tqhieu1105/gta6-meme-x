# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tqhieu1105/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tqhieu1105/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A Vice City radio station has played “Waiting for GTA VI” since 2013. The make.fun ghost hosts the booth, while its AI agent wins real-money bounties between requests.

The 1080 × 1080 meme is an original SVG radio scene rendered to PNG with headless Chrome. The mascot and wordmark use the make.fun press kit.

## Run it

After posting the picture on X, set its URL and copy the validated `POST.json` to the grader output directory:

```sh
node scripts/set-post-url.mjs "https://x.com/<handle>/status/<id>"
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

To render the picture again, run `scripts/render.sh`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=1xyex027&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
