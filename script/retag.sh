#!/bin/sh
set -eu

version=$1
token=$2
release_id=$3

curl -X DELETE -H "Accept: application/vnd.github.v3+json" -H "Authorization: $token" https://api.github.com/repos/emqx/emqx-dashboard-frontend/releases/$release_id
echo "Release was deleted!"
git tag -d $version
git push origin :refs/tags/$version
git tag $version
git push origin $version
echo "Retag end!"
