# Why is this here?

If we use `>yarn@1.19.1` we run into issues installing dependencies with `yarn workspace X add Y` commands.
See [this](https://github.com/yarnpkg/yarn/issues/7734) for more info.

If we use `<=yarn@1.18.x` we run into issues with dependency hoisting not working.
See [this](https://github.com/yarnpkg/yarn/issues/7572) for more info.
