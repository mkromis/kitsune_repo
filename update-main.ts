#!/usr/bin/env -S vite-node --script
import 'zx/globals'

await $`mv .git/config config`
await $`rm -rf .git`
await $`git init -b main`
await $`mv config .git/config`
await $`git lfs install`
await $`git lfs track "*.zst"`
await $`git add --all .`
await $`git commit -m "monthly cleanup"`
await $`git push origin main --force`

echo `################################################################`
echo `###################    cleanup  Done      ######################`
echo `################################################################`
