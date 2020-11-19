# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.1](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@5.0.0...@air/zephyr@5.0.1) (2020-11-19)

### Bug Fixes

- resolve issue with ref on close button ([4f28dd0](https://github.com/AirLabsTeam/web-core/commit/4f28dd0e57eff54418f4012bda086903b235463a))

# [5.0.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.2.4...@air/zephyr@5.0.0) (2020-11-18)

### Bug Fixes

- **@air/zephyr/button:** apply focus styles via focus-visible selector instead of focus selector ([5a808a8](https://github.com/AirLabsTeam/web-core/commit/5a808a80bf8f81c12e6fc052d0b2efe72768e696))
- **@air/zephyr/modal:** ensure modal children renders with correct font stylings ([01a3072](https://github.com/AirLabsTeam/web-core/commit/01a307254dcd6469d82e0111b51c036342bb9cb9))
- **@air/zephyr/modal:** fix label id matching in dialog modal, tweak styles, and small refactor ([a068e83](https://github.com/AirLabsTeam/web-core/commit/a068e839d4c07508312069b0dcf98cdbb413c10d))
- **@air/zephyr/modal:** tweak styles for large content and add an edge case story ([99786fd](https://github.com/AirLabsTeam/web-core/commit/99786fdf99517eaf9aecbe91e910c6e022935377))
- **@air/zephyr/theme:** remove dupe style ([2a80555](https://github.com/AirLabsTeam/web-core/commit/2a80555fd49059954461cd95c0a8f5fdd7046b1a))
- **@air/zephyr/transactionmodal:** remove third cta prop ([8b98c12](https://github.com/AirLabsTeam/web-core/commit/8b98c12e45d175f4a7e6669b3dd75257b55d65a9))

### Features

- **@air/zephyr/announcementmodal:** create AnnouncementModal component ([262e7e3](https://github.com/AirLabsTeam/web-core/commit/262e7e3489e6e0cb351bfe09dffd7ffdacdae2e6))
- **@air/zephyr/box:** correctly implement "as" prop and inferred typing ([ef37e92](https://github.com/AirLabsTeam/web-core/commit/ef37e92214428f7ad3e500a77f389281dfc5161e))
- **@air/zephyr/button:** correctly implement "as" prop and inferred typing ([0734bd8](https://github.com/AirLabsTeam/web-core/commit/0734bd8d352aaa12e4bf05cd266ca33b23eae80c))
- **@air/zephyr/modal:** default "withCloseButton" to true and expose <CloseButton> testid ([9d987fb](https://github.com/AirLabsTeam/web-core/commit/9d987fbe97a86b00f089ea3d13ab26eb6b748a8b))
- **@air/zephyr/transactionmodal:** create TransactionModal component ([5dfe0f3](https://github.com/AirLabsTeam/web-core/commit/5dfe0f32f05ebda897ea50c6eaacc4016276d16f))
- create initial draft of CTAModal ([a2b0bfb](https://github.com/AirLabsTeam/web-core/commit/a2b0bfb659b6f8cf581d24b3fcdca0781e63c53e))

### BREAKING CHANGES

- **@air/zephyr/transactionmodal:** Remove "tertiaryCTA" prop
- **@air/zephyr/modal:** "withCloseButton"'s default value has changed
- **@air/zephyr/button:** This may expose typing issues that we were previously allowing in environments with
  a tsconfig that allowed implicit any.
- **@air/zephyr/box:** This may expose typing issues that we were previously allowing in environments with
  a tsconfig that allowed implicit any.

## [4.2.4](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.2.3...@air/zephyr@4.2.4) (2020-11-18)

**Note:** Version bump only for package @air/zephyr

## [4.2.3](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.2.2...@air/zephyr@4.2.3) (2020-11-18)

**Note:** Version bump only for package @air/zephyr

## [4.2.2](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.2.1...@air/zephyr@4.2.2) (2020-11-16)

### Bug Fixes

- keep non-theme number values as invalid ([2697e11](https://github.com/AirLabsTeam/web-core/commit/2697e115fed75a380c8f04de26af6d1f8fd84cf7))

## [4.2.1](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.2.0...@air/zephyr@4.2.1) (2020-11-15)

### Bug Fixes

- update intellisense space values ([72c45f0](https://github.com/AirLabsTeam/web-core/commit/72c45f01263386b61bfc98708906ba510ad12c38))

# [4.2.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.1.0...@air/zephyr@4.2.0) (2020-11-15)

### Features

- tweak allowed CSS properties in TX prop ([d01d61c](https://github.com/AirLabsTeam/web-core/commit/d01d61cdab4222256290a5b8e44a834bb0794b0b))

# [4.1.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.0.2...@air/zephyr@4.1.0) (2020-11-13)

### Features

- expand valid options for "space" theme key ([48062bc](https://github.com/AirLabsTeam/web-core/commit/48062bc8f71ad6751dde831a6b2a5807e02e26a6))

## [4.0.2](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.0.1...@air/zephyr@4.0.2) (2020-11-13)

### Bug Fixes

- pin cross-polluted dependencies and adjust peerDep ranges ([7f1dd06](https://github.com/AirLabsTeam/web-core/commit/7f1dd06117af404c116a40883b745a101bdd44e9))

## [4.0.1](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@4.0.0...@air/zephyr@4.0.1) (2020-11-13)

**Note:** Version bump only for package @air/zephyr

# [4.0.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@3.0.1...@air/zephyr@4.0.0) (2020-11-12)

### Bug Fixes

- render nicely if string is passed to "modelDescription" ([2cc4a42](https://github.com/AirLabsTeam/web-core/commit/2cc4a42cc5bc92f51169fcf138b6e9d113d493e9))
- simplify default modal ui ([2d37341](https://github.com/AirLabsTeam/web-core/commit/2d373417d9ffdf45e4ee7d615c992eddb6e25954))
- **modal:** adjust styles, add stories, and edit comments/documentation ([fe20c7f](https://github.com/AirLabsTeam/web-core/commit/fe20c7f1751fd57443c6dd62b9ddf5a5babd621d))

### Code Refactoring

- require onDismiss prop ([bfe22db](https://github.com/AirLabsTeam/web-core/commit/bfe22db8983ceeeb5b11f81d3fe0cad9b4782b80))

### Features

- add modal variants ([c7b2e9d](https://github.com/AirLabsTeam/web-core/commit/c7b2e9d590e46183f263dd9a36841bbe5dff63b4))
- adjust default styles, comments, stories, and add prop for rendering a close button ([32160be](https://github.com/AirLabsTeam/web-core/commit/32160bef30ccceb4abbdbe077d076497e45e6f10))
- allow theme callback on tx prop ([58a1a18](https://github.com/AirLabsTeam/web-core/commit/58a1a187d91cfe23f03b5f7f498a2bcc12cf0e2d))
- move peerDeps to deps and install @reach/visually-hidden + @air/icons ([26a6cdd](https://github.com/AirLabsTeam/web-core/commit/26a6cdd7f0d4e005cd0f7cacf029744925591ade))
- use framer-motion to animate modal ([464ec94](https://github.com/AirLabsTeam/web-core/commit/464ec94c6530d9478163ab55c1dcc14bff1a337a))
- wrap text in forwardRef ([e5a6ccd](https://github.com/AirLabsTeam/web-core/commit/e5a6ccd8b9d9d44e0b3b367242425028021acfd9))

### BREAKING CHANGES

- In adding animations, separation began to exist between styles in 2 places. Rather
  than waste time DRYing things up, I removed a prop nobody asked for.
- A prop went from optional, to required

## [3.0.1](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@3.0.0...@air/zephyr@3.0.1) (2020-11-06)

### Bug Fixes

- **@air/zephyr:** add in missing # to the pigeon50 value ([c38e44d](https://github.com/AirLabsTeam/web-core/commit/c38e44d3e6926fe0fadd8a390661e86c09c4ed97))

# [3.0.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@2.0.0...@air/zephyr@3.0.0) (2020-11-02)

### Bug Fixes

- **@air/zephyr:** add in disabled state for destructive filled ([4af262e](https://github.com/AirLabsTeam/web-core/commit/4af262e17d2ff577107130d38cef7be9131402ba))
- **@air/zephyr:** add in theme exports ([a4851fd](https://github.com/AirLabsTeam/web-core/commit/a4851fdd5e739af3d245c20b91593e2fb75d6575))
- **@air/zephyr:** fix button import in test ([7ed1319](https://github.com/AirLabsTeam/web-core/commit/7ed1319e372c1f423069551483bbbfaf362dcd6a))
- **@air/zephyr:** fix button variant name ([7baa767](https://github.com/AirLabsTeam/web-core/commit/7baa7674c7355f93bc34bf90b51faa30b8dd4aef))
- **@air/zephyr:** flatten button variant theme ([88f04c5](https://github.com/AirLabsTeam/web-core/commit/88f04c5cfff527a5b8b17047a8955f31d4330c9a))
- **@air/zephyr:** flatten text variants ([02b0212](https://github.com/AirLabsTeam/web-core/commit/02b021233cfdd0f7740d4eba321c9dd7205000aa))
- **@air/zephyr:** move rest of props to bottom ([dd05954](https://github.com/AirLabsTeam/web-core/commit/dd05954b3e69f8569c6cf7b1db9674a901e841e7))
- **@air/zephyr:** readd onClick as required for button component ([b9c9d4d](https://github.com/AirLabsTeam/web-core/commit/b9c9d4d8328709ab6e35f4aa50be9bfc4a2bea2e))
- **@air/zephyr:** remove unnecessary unit test ([9bf5760](https://github.com/AirLabsTeam/web-core/commit/9bf5760f7b254bb5eb4682b75eb28396fd89db90))
- **@air/zephyr:** remove unused parameters in button stories ([8eb8466](https://github.com/AirLabsTeam/web-core/commit/8eb8466e21cbeef1ac8e89f7a955c6f686fcb3f2))
- **@air/zephyr:** update button colors to match our new system ([59399da](https://github.com/AirLabsTeam/web-core/commit/59399dac036fe7725f6c0f964794d39913d1a5f0))
- **@air/zephyr:** update to useTheme hook and use theme value for focus state ([90ac645](https://github.com/AirLabsTeam/web-core/commit/90ac645b8c74f7f47c224fb1945da959bf8d42e0))
- final change to TX prop ([2a1e8cd](https://github.com/AirLabsTeam/web-core/commit/2a1e8cdb83b44fe8f9734219b540900102c2d04f))
- finalize box component API ([908d2b7](https://github.com/AirLabsTeam/web-core/commit/908d2b77ab3bf1a224aba96f2b3cb4014d5d8907))
- in-progress commit for updating basemodal ([5a077f3](https://github.com/AirLabsTeam/web-core/commit/5a077f358f59e236a80c02d5e36f732ea993a4cb))
- include global type defs for @air/zephyr ([f693d81](https://github.com/AirLabsTeam/web-core/commit/f693d81b3dcb17e1bda7332acf7368688f8d397a))
- simplify theme typings ([87f68d6](https://github.com/AirLabsTeam/web-core/commit/87f68d62aa65b138f978347acaaf4996044b6359))
- update dependencies and a typedef override ([060cd75](https://github.com/AirLabsTeam/web-core/commit/060cd7502d90cf687b1dac1cba0895e457539b18))
- **zephyr:** add in individual theme exports ([a6a9682](https://github.com/AirLabsTeam/web-core/commit/a6a968263980de5fcd0837e0a890b0ffc322f33f))
- **zephyr:** add in remaining button variants ([7efd138](https://github.com/AirLabsTeam/web-core/commit/7efd138aa5a6b43b1c55a7ae720bbb9029fa84de))
- **zephyr:** fix button test ([40e7522](https://github.com/AirLabsTeam/web-core/commit/40e75228d413b6ea9900c5614048ba195626589d))
- **zephyr:** remove duplicate background property ghost and outline variants ([35eafd6](https://github.com/AirLabsTeam/web-core/commit/35eafd69ddd39b100c43044311db84ea33129251))

### Features

- **@air/zephyr:** add in text component ([ade9425](https://github.com/AirLabsTeam/web-core/commit/ade94256a3da79dd7dc9aeef05bca3112dd91b84))
- **basemodal:** rename and change behavior of overlay override prop ([94e9999](https://github.com/AirLabsTeam/web-core/commit/94e9999bce43ce8e0aaf520840b06304a98879be))
- **zephyr:** add in initial button component ([9f93789](https://github.com/AirLabsTeam/web-core/commit/9f937891e4a39e43bf768fa367c8b4d05acc0dac))

### BREAKING CHANGES

- **basemodal:** Rename "overlayStyle" to "overlayStylesOverride"

# [2.0.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@1.4.0...@air/zephyr@2.0.0) (2020-10-30)

### Bug Fixes

- **@air/zephyr:** change color system to be in the hundreds ([6aa96a8](https://github.com/AirLabsTeam/web-core/commit/6aa96a8b44c7b0dcaf3a9c6bb2701cf84e8ed123))

### BREAKING CHANGES

- **@air/zephyr:** We are changing the key names of the color system. i.e. `pigeon0.5` -> `pigeon50`,
  `pigeon1` -> `pigeon100`

# [1.4.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@1.3.1...@air/zephyr@1.4.0) (2020-10-23)

### Bug Fixes

- hardcode color ([1cd3abe](https://github.com/AirLabsTeam/web-core/commit/1cd3abee7f3dc230356002778cef3b8d920a8c39))
- resolve issue with missing theme context ([ae730a0](https://github.com/AirLabsTeam/web-core/commit/ae730a0927bc5c2bd8c1ead481908e8faacaa635))
- unify overlay styles in BaseModal and fix mistake ([d9e6d2d](https://github.com/AirLabsTeam/web-core/commit/d9e6d2df44502805346de7c1ad4dc2d0c83be2df))

### Features

- resolve feedback from [#30](https://github.com/AirLabsTeam/web-core/issues/30) ([745f5c4](https://github.com/AirLabsTeam/web-core/commit/745f5c431ac7edb3e1975f356a7d6d2685da84ae))
- **basemodal:** add new component (BaseModal) ([ec9ab55](https://github.com/AirLabsTeam/web-core/commit/ec9ab55db9fdf2c3c65ccceeda00f57b1e4160e5))
- **box:** reorder types, add data-testid as optional prop, and export new type ([f85d8a0](https://github.com/AirLabsTeam/web-core/commit/f85d8a06347239a782c6deff7c15b0d7d062d21e))

## [1.3.1](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@1.3.0...@air/zephyr@1.3.1) (2020-09-23)

### Bug Fixes

- update dependencies ([f7650e7](https://github.com/AirLabsTeam/web-core/commit/f7650e758d3799f646416e110452067857732b83))

# [1.3.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@1.2.0...@air/zephyr@1.3.0) (2020-09-09)

### Bug Fixes

- **packages/zephyr:** fix new file colors, named after birds ([ddeac96](https://github.com/AirLabsTeam/web-core/commit/ddeac96da8d8fc225c7fd81d1aa9b8d90970a3e0))
- **packages/zephyr:** use docblocks for comments ([eda3abe](https://github.com/AirLabsTeam/web-core/commit/eda3abea926c0760cc0b3165797611c2a6712b2a))
- **zephyr:** remove duplicated robin type strings ([9845896](https://github.com/AirLabsTeam/web-core/commit/98458963257a66c4c4e6b5ea1efdc405c7fcd0ec))
- **zephyr:** replace singles with miscellaneous, remove transparentSafariHack, swap transparent rgba ([aba66f1](https://github.com/AirLabsTeam/web-core/commit/aba66f18ab345cd491a6c6aaeadd02193a3427fc))
- **zephyr:** set new color types ([163fee6](https://github.com/AirLabsTeam/web-core/commit/163fee60ffecdf8c2b5709f4b256500160fd20b9))

### Features

- **air/zephyr:** add new files colors ([4bf00a5](https://github.com/AirLabsTeam/web-core/commit/4bf00a5005334edd8148a35b531ed33b66cabd32))

# [1.2.0](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@1.1.1...@air/zephyr@1.2.0) (2020-08-31)

### Bug Fixes

- **zephyr:** omit ref from box component instead of each story ([8295167](https://github.com/AirLabsTeam/web-core/commit/8295167c5424e5dddedf20a38a602f8520e54c34))
- **zephyr:** remove \_\_baseStyle from button types ([ca2e172](https://github.com/AirLabsTeam/web-core/commit/ca2e172a774ceff307b59c98a1e2292487465596))

### Features

- **zephyr:** add in polished support ([601084f](https://github.com/AirLabsTeam/web-core/commit/601084fe7ace7b1e02408a73f89f8dfede6699bc))
- **zephyr:** add in theme constants and box component ([b199843](https://github.com/AirLabsTeam/web-core/commit/b199843d1b3dfa4e8618805776706e95a46925da))
- **zephyr:** add onClick and default type to button component ([35c9da0](https://github.com/AirLabsTeam/web-core/commit/35c9da0708a4955e0ef0cc3d8bd7278446d9efda))
- **zephyr:** add ts-ignore to css prop ([cf71b7f](https://github.com/AirLabsTeam/web-core/commit/cf71b7f01881e39e6f033c9d1c1fa2ca50253018))
- **zephyr:** remove ref from button props in stories ([06c66ce](https://github.com/AirLabsTeam/web-core/commit/06c66ceae0ec35f4e0ee0009fe83009ef4a57e7c))

## [1.1.1](https://github.com/AirLabsTeam/web-core/compare/@air/zephyr@1.1.0...@air/zephyr@1.1.1) (2020-07-30)

**Note:** Version bump only for package @air/zephyr

# 1.1.0 (2020-07-22)

### Bug Fixes

- resolve broken import ([bec3377](https://github.com/AirLabsTeam/web-core/commit/bec3377cf7cd1de9d1ab3f302d442d99e8012dea))

### Features

- **@air/zephyr:** define component library package ([8034cf4](https://github.com/AirLabsTeam/web-core/commit/8034cf43a26b20c4b4699a804eddacb2f05f5912))
