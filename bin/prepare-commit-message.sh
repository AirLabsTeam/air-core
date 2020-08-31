#!/bin/bash

# This ensures we dont use `cz-cli` on merge commits...
# This didn't work https://stackoverflow.com/questions/56379208/ignoring-merge-commits-for-prepare-commit-msg-git-hook
# But this did: https://stackoverflow.com/questions/61234845/how-to-bypass-pre-commit-hooks-after-fixing-merge-conflicts

git rev-parse -q --verify MERGE_HEAD && false
