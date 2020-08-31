#!/bin/bash

# This ensures we dont use `cz-cli` on merge commits...
# https://stackoverflow.com/questions/56379208/ignoring-merge-commits-for-prepare-commit-msg-git-hook

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

if [ "${COMMIT_SOURCE}" = merge ];then
  exit 0
fi
