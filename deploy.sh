#!/usr/bin/env bash
# bitaps сайт → GitHub Pages. Использование: ./deploy.sh "сообщение коммита"
set -euo pipefail
cd "$(dirname "$0")"
MSG="${1:-site update}"
TOK="$(cat ~/.local/gh-token)"
git add -A
if git diff --cached --quiet; then echo "нечего коммитить"; exit 0; fi
git -c user.name="varyavsksm-sudo" -c user.email="varya.vsk.sm@gmail.com" \
  commit -qm "$MSG

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
git push -q "https://varyavsksm-sudo:${TOK}@github.com/varyavsksm-sudo/bitaps-web.git" main
echo "✓ запушено. Pages пересоберётся за ~1–2 мин → https://bitapsvpn.com"
