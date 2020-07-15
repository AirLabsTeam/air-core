# Why is this folder here?

There are cyclical dependency issues surrounding certain packages (like `eslint`) stemming from the use of `tsdx`. `yarn` @ verions >= 1.19.0 [have issues resolving the different versions of the same libraries in a yarn "workspace"](https://github.com/yarnpkg/yarn/issues/7807#issuecomment-623223536). Luckily, there's [a workaround](https://github.com/yarnpkg/yarn/issues/7807#issuecomment-588632848) which ensures everybody uses `yarn@1.18.0` - that's this folder.

The proper way of dealing with the issue is to force the hand of the lockfile by using the ["resolutions"](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) field of the root `package.json`, but ain't nobody got time for that.
