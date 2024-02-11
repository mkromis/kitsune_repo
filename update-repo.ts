#!/usr/bin/env -S vite-node --script
import 'zx/globals'

cd ('x86_64')
await $`rm kitsune_repo*`
await $`rm *debug*`

echo `repo-add`
await $`repo-add -n -R kitsune_repo.db.tar.gz *.pkg.tar.zst`

await $`rm kitsune_repo.db`
await $`cp kitsune_repo.db.tar.gz kitsune_repo.db`

await $`rm kitsune_repo.files`
await $`cp kitsune_repo.files.tar.gz kitsune_repo.files`

echo `####################################`
echo `Repo Updated!!`
echo `####################################`
