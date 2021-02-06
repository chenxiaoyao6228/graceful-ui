#!/usr/bin/env sh

# throw error
set -e

# build static

cd ./dist

git config --global user.email "chenxiaoyao6228@163.com"
git config --global user.name "chenxiaoyao6228"

git init
git add -A
git commit -m 'deploy-to-github [ci skip]'

git push -f https://${GITHUB_TOKEN}@github.com/chenxiaoyao6228/graceful-ui.git master:gh-pages

cd -

rm -rf ./dist