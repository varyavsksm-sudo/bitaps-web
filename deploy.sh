#!/usr/bin/env bash
# bitaps сайт → GitHub Pages. Использование: ./deploy.sh "сообщение коммита"
set -euo pipefail
cd "$(dirname "$0")"
MSG="${1:-site update}"
TOK="$(cat ~/.local/gh-token)"

# ── build-time include: обновляем содержимое между маркерами
#    <!--#include partials/<файл>--> … <!--#endinclude--> из файла partials/.
#    Идемпотентно (повторный прогон = тот же результат); если partial не найден —
#    старое содержимое остаётся, деплой не ломается (только предупреждение).
if [ -d partials ]; then
  # обходим и корень, и подпапки (например /tools/*.html). Пути в
  # <!--#include partials/...--> резолвятся от корня репо (cwd), не от файла.
  while IFS= read -r f; do
    grep -q '<!--#include ' "$f" || continue
    perl -0777 -i -pe '
      s{(<!--#include[ ]([^\s>]+)-->)(.*?)(<!--#endinclude-->)}{
        my ($m,$p,$old,$e) = ($1,$2,$3,$4);
        my $c = $old;
        if (open my $h, "<", $p) { local $/; $c = <$h>; close $h; $c =~ s/\s+\z//; $c = "\n$c\n"; }
        else { warn "partial $p не найден — оставляю старое содержимое\n"; }
        "$m$c$e"
      }gse' "$f"
  done < <(find . -name '*.html' -not -path './.git/*' -not -path './partials/*')
fi

git add -A
if git diff --cached --quiet; then echo "нечего коммитить"; exit 0; fi
git -c user.name="varyavsksm-sudo" -c user.email="varya.vsk.sm@gmail.com" \
  commit -qm "$MSG

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
git push -q "https://varyavsksm-sudo:${TOK}@github.com/varyavsksm-sudo/bitaps-web.git" main
echo "✓ запушено. Pages пересоберётся за ~1–2 мин → https://bitapsvpn.com"
