# Changelog

### [5.0.1](https://www.github.com/cheminfo/nmr-processing/compare/v5.0.0...v5.0.1) (2021-11-30)


### Bug Fixes

* update dependencies n fix eslint ([dc9e8d4](https://www.github.com/cheminfo/nmr-processing/commit/dc9e8d405153932142ae5a339000cec2d6637c5e))
* update workflow actions ([0f71100](https://www.github.com/cheminfo/nmr-processing/commit/0f711008f5010d5a3940e7054d75bc38f6bae8b7))

## [5.0.0](https://www.github.com/cheminfo/nmr-processing/compare/v4.0.0...v5.0.0) (2021-11-26)


### ⚠ BREAKING CHANGES

* xyzAutoPeaksPicking change structure NMRSignal2D

### Features

* xyzAutoPeaksPicking change structure NMRSignal2D ([bc5192f](https://www.github.com/cheminfo/nmr-processing/commit/bc5192f1155743c225b92353c2750519a8eaf1ab))

## [4.0.0](https://www.github.com/cheminfo/nmr-processing/compare/v3.4.1...v4.0.0) (2021-11-23)


### ⚠ BREAKING CHANGES

* change shape1D n NMRPeak1D structure (#119)

### Features

* change shape1D n NMRPeak1D structure ([#119](https://www.github.com/cheminfo/nmr-processing/issues/119)) ([0255510](https://www.github.com/cheminfo/nmr-processing/commit/02555100407fe2ff80a4c41fff1ddd66d97fbaef))

### [3.4.1](https://www.github.com/cheminfo/nmr-processing/compare/v3.4.0...v3.4.1) (2021-11-06)


### Bug Fixes

* **rangesToXY:** draw massive ranges ([#117](https://www.github.com/cheminfo/nmr-processing/issues/117)) ([a80025a](https://www.github.com/cheminfo/nmr-processing/commit/a80025a5b5805625f036b478ed9d24f269cfa2b7))

## [3.4.0](https://www.github.com/cheminfo/nmr-processing/compare/v3.3.4...v3.4.0) (2021-11-04)


### Features

* add get13CAssignments function ([#116](https://www.github.com/cheminfo/nmr-processing/issues/116)) ([73f9df6](https://www.github.com/cheminfo/nmr-processing/commit/73f9df6c1d88599828409f8194fb58c1323e0ae9))
* automatic assignment for proton ([#114](https://www.github.com/cheminfo/nmr-processing/issues/114)) ([f50932e](https://www.github.com/cheminfo/nmr-processing/commit/f50932e78f93db5a4c8dd0c798240a4b18df153a))


### Bug Fixes

* export get1HAssignment ([7753e7f](https://www.github.com/cheminfo/nmr-processing/commit/7753e7fbb1e3927b1d32746ab0f4f3b380d98dca))

### [3.3.4](https://www.github.com/cheminfo/nmr-processing/compare/v3.3.3...v3.3.4) (2021-10-26)


### Bug Fixes

* use NMRPeak1D type ([b6d1b4d](https://www.github.com/cheminfo/nmr-processing/commit/b6d1b4d94f85f349bb88e14a419e77911d2621d1))

### [3.3.3](https://www.github.com/cheminfo/nmr-processing/compare/v3.3.2...v3.3.3) (2021-10-25)


### Bug Fixes

* export types ([9fea894](https://www.github.com/cheminfo/nmr-processing/commit/9fea894028e864e021bfa20b9a48be1e30aff8c2))

### [3.3.2](https://www.github.com/cheminfo/nmr-processing/compare/v3.3.1...v3.3.2) (2021-10-22)


### Bug Fixes

* add kind at NMRSignal2D interface ([c050336](https://www.github.com/cheminfo/nmr-processing/commit/c050336982c5073bdad5f2448bf5396d663ed1bd))

### [3.3.1](https://www.github.com/cheminfo/nmr-processing/compare/v3.3.0...v3.3.1) (2021-10-21)


### Bug Fixes

* rename atomIDs to atoms ([#109](https://www.github.com/cheminfo/nmr-processing/issues/109)) ([fad2415](https://www.github.com/cheminfo/nmr-processing/commit/fad241592d564471048f21731dded47ad4609371))

## [3.3.0](https://www.github.com/cheminfo/nmr-processing/compare/v3.2.0...v3.3.0) (2021-10-12)


### Features

* add integration in impurities ([26d97ea](https://www.github.com/cheminfo/nmr-processing/commit/26d97ea839505b53ed138631c6f4c567703c4263))
* add smiles in solvent impurities ([e2c3d6f](https://www.github.com/cheminfo/nmr-processing/commit/e2c3d6f9a44a901445e81e2f74361f2b8264070f))
* add some smiles in database ([bff15d7](https://www.github.com/cheminfo/nmr-processing/commit/bff15d7a4ff2b68b4138bb85c23d00aa79d6ad95))
* update n adapt to new version of ml-gsd ([#108](https://www.github.com/cheminfo/nmr-processing/issues/108)) ([d008691](https://www.github.com/cheminfo/nmr-processing/commit/d008691cf3d9c9e2dd908d7bb5639ee4dc41a2e3))


### Bug Fixes

* add multiplicity in range ([1d4eaf5](https://www.github.com/cheminfo/nmr-processing/commit/1d4eaf56f9ae039dc9ee48b1a2ee1d54259e4ead))
* check default values at interfaces close [#105](https://www.github.com/cheminfo/nmr-processing/issues/105) ([ba6c82c](https://www.github.com/cheminfo/nmr-processing/commit/ba6c82ce7cafdc851d1c61ecb98f26006f064e59))
* correct integration and range in impurities ([96c687c](https://www.github.com/cheminfo/nmr-processing/commit/96c687cdf025423ef6a233082b1521de6d4e9072))
* remove useless ranges ([2b6119d](https://www.github.com/cheminfo/nmr-processing/commit/2b6119d47d6d05943266db5c871c5b7f3e45742f))
* rename nucleus to nuclei when it is array ([d815868](https://www.github.com/cheminfo/nmr-processing/commit/d8158687a94d8f62768830983384edfad93f6696))
* **resurrect:** regular expression for frequency ([fad1ed3](https://www.github.com/cheminfo/nmr-processing/commit/fad1ed3965ffcd1796a4b3defdc54333a49097ee))
* wrong info for water in impurities ([290eb9e](https://www.github.com/cheminfo/nmr-processing/commit/290eb9ef297e972bf103209ee05380bef797cbb7))

## [3.2.0](https://www.github.com/cheminfo/nmr-processing/compare/v3.1.0...v3.2.0) (2021-10-05)


### Features

* add carbonImpurities and protonImpurities ([e8abe81](https://www.github.com/cheminfo/nmr-processing/commit/e8abe81c1f4bdc575d8baf436f32229c1b359f4e))
* add getDatabase ([d87c1c8](https://www.github.com/cheminfo/nmr-processing/commit/d87c1c8f3de824bdd417560d33ff49c6c190bb3f))
* add nucleus in Database ([724071e](https://www.github.com/cheminfo/nmr-processing/commit/724071ec7a9ee1a24717b5031e9e3f110efdead6))


### Bug Fixes

* add options to resurrectRange ([291ce40](https://www.github.com/cheminfo/nmr-processing/commit/291ce401d825d96303cb2484a0219fd44e4323a5))
* ensure clonnig of input in private function ([c93010d](https://www.github.com/cheminfo/nmr-processing/commit/c93010da785f52b6362d7345c634ccf73e320717))
* eslint ([d6c70e4](https://www.github.com/cheminfo/nmr-processing/commit/d6c70e44772c712bf229e00b56af44c683608d70))
* improve resurrectRange ([27da93d](https://www.github.com/cheminfo/nmr-processing/commit/27da93dc9b4026673fc3969ce730a91959580bdd))
* **rangesToXY:** check if norma is not infinity ([aefa850](https://www.github.com/cheminfo/nmr-processing/commit/aefa8504d1b70942c9e948f307d73e711ec60e90))
* refactor rangesToXY ([b04ab37](https://www.github.com/cheminfo/nmr-processing/commit/b04ab373c635811af6fca945fb9056be0aeac398))
* remove -1000 ([1ca4b91](https://www.github.com/cheminfo/nmr-processing/commit/1ca4b91b0461b0cec616d57a0efff9e903906f20))
* rename nucleus to nuclei when it is array ([e21eb37](https://www.github.com/cheminfo/nmr-processing/commit/e21eb37d8e40c6044ce08addc0e17b29e89c9209))
* splitPatterns always returns an array ([1b4dbc9](https://www.github.com/cheminfo/nmr-processing/commit/1b4dbc9c8750937b10fae613c4e110b041daf11e))
* splitPatterns returns empty array if empty string ([39ff986](https://www.github.com/cheminfo/nmr-processing/commit/39ff98651c3fbf9004a3c99b1c10139ce2873929))

## [3.1.0](https://www.github.com/cheminfo/nmr-processing/compare/v3.0.5...v3.1.0) (2021-10-01)


### Features

* add rangesToXY function ([809162a](https://www.github.com/cheminfo/nmr-processing/commit/809162a2a52c82501caf4cc892cf998a9d83857a))


### Bug Fixes

* **rangesToXY:** normalize spectrum ([0aba0d8](https://www.github.com/cheminfo/nmr-processing/commit/0aba0d8891215811593a34cdedba91b135e29ec1))
* return empty when there is not signals ([8dd6681](https://www.github.com/cheminfo/nmr-processing/commit/8dd66810fc5c2d3132bd957ebdc9f83812a8180b))

### [3.0.5](https://www.github.com/cheminfo/nmr-processing/compare/v3.0.4...v3.0.5) (2021-09-30)


### Bug Fixes

* fix checking point  for observedFrequencies ([54d94e2](https://www.github.com/cheminfo/nmr-processing/commit/54d94e2602c50a6b738766245d3ef0f078adac8c))

### [3.0.4](https://www.github.com/cheminfo/nmr-processing/compare/v3.0.3...v3.0.4) (2021-09-30)


### Bug Fixes

* rename observeFrequencies to observedFrequencies ([054aefe](https://www.github.com/cheminfo/nmr-processing/commit/054aefe2dc07237a4562a69a120ae88a1942a110))

### [3.0.3](https://www.github.com/cheminfo/nmr-processing/compare/v3.0.2...v3.0.3) (2021-09-30)


### Bug Fixes

* xyzAutoPeaksPicking kernel option is optional ([5eb9f53](https://www.github.com/cheminfo/nmr-processing/commit/5eb9f5303f1d3ae92bc18bbd2f9aacf837e70b9b))

### [3.0.2](https://www.github.com/cheminfo/nmr-processing/compare/v3.0.1...v3.0.2) (2021-09-30)


### Bug Fixes

* ensure compatibility with node 12 ([3bfcf7c](https://www.github.com/cheminfo/nmr-processing/commit/3bfcf7c426df570dafc3a597116ad2b200e586c5))
* in ACS generation replace frequencyObserved by observedFrequency ([b1644c4](https://www.github.com/cheminfo/nmr-processing/commit/b1644c4f754dccebbef470fa0a683e74fd09e5cb))

### [3.0.1](https://www.github.com/cheminfo/nmr-processing/compare/v3.0.0...v3.0.1) (2021-09-29)


### Bug Fixes

* update ml-gsd to 6.8.1 ([17da91d](https://www.github.com/cheminfo/nmr-processing/commit/17da91df53c68f333f0aaca18322e8e98f005520))
* update ml-gsd to 6.82 ([901fe06](https://www.github.com/cheminfo/nmr-processing/commit/901fe066c2cb6ecf5c7a69673d9afcaa24f70e3c))

## [3.0.0](https://www.github.com/cheminfo/nmr-processing/compare/v2.5.0...v3.0.0) (2021-09-29)


### ⚠ BREAKING CHANGES

* migration typescript and refactor  (#93)

### Features

* add typedoc.yml ([6f818df](https://www.github.com/cheminfo/nmr-processing/commit/6f818df15853220aa5739fbf7b9aba68b138b505))
* migration typescript and refactor  ([#93](https://www.github.com/cheminfo/nmr-processing/issues/93)) ([49420aa](https://www.github.com/cheminfo/nmr-processing/commit/49420aa8956d2316ddc5220f573e72724778dc1f))
* starting resurrect code ([a6cba61](https://www.github.com/cheminfo/nmr-processing/commit/a6cba6116453c9a4956d0665c297d07f7c5f92a7))


### Bug Fixes

* add package description ([e0594ca](https://www.github.com/cheminfo/nmr-processing/commit/e0594ca589a331ebe3bf5efaad3cde2beca2c2d3))

## [2.5.0](https://www.github.com/cheminfo/nmr-processing/compare/v2.4.3...v2.5.0) (2021-08-24)


### Features

* add signals2DToZ function ([579fb50](https://www.github.com/cheminfo/nmr-processing/commit/579fb50f12952a0cacd407f820d05cab93a38f07))

### [2.4.3](https://www.github.com/cheminfo/nmr-processing/compare/v2.4.2...v2.4.3) (2021-08-12)


### Bug Fixes

* update ml-peak-shape-generator, avoid import/named eslint error ([d2b9fa8](https://www.github.com/cheminfo/nmr-processing/commit/d2b9fa8eefc2461d3421ea4527c646bfc6889f25))

### [2.4.2](https://www.github.com/cheminfo/nmr-processing/compare/v2.4.1...v2.4.2) (2021-08-11)


### Bug Fixes

* **prediction:** ensure add peaks in signals ([05f8765](https://www.github.com/cheminfo/nmr-processing/commit/05f876534f9d4252662f9c7b5bcf9faff08796db))

### [2.4.1](https://www.github.com/cheminfo/nmr-processing/compare/v2.4.0...v2.4.1) (2021-08-11)


### Bug Fixes

* import gaussian2D instead of Gaussian2D ([17c6bc8](https://www.github.com/cheminfo/nmr-processing/commit/17c6bc818e6ca4579c6fccf6c8ee66b9df9263b3))

## [2.4.0](https://www.github.com/cheminfo/nmr-processing/compare/v2.3.4...v2.4.0) (2021-08-11)


### Features

* update ml-peak-shape-generator to 2.0.1 ([340e27f](https://www.github.com/cheminfo/nmr-processing/commit/340e27f57e88022c0f3b11cdec9c36543e224981))
* update spectrum-generator to 5.0.0 ([73df6d1](https://www.github.com/cheminfo/nmr-processing/commit/73df6d189a433ae37fbc5389c058acf9bb6a0d67))


### Bug Fixes

* use plural name for signals in zones, add peaks to each signal ([2a80102](https://www.github.com/cheminfo/nmr-processing/commit/2a801024dffc325503562bd01f0d5867b9774bf3))

### [2.3.4](https://www.github.com/cheminfo/nmr-processing/compare/v2.3.3...v2.3.4) (2021-08-03)


### Bug Fixes

* use singlet multiplicity to predictCarbon ([b2a45e3](https://www.github.com/cheminfo/nmr-processing/commit/b2a45e3c502e7f8d65173cd6a39f7394b1015fc3))

### [2.3.3](https://www.github.com/cheminfo/nmr-processing/compare/v2.3.2...v2.3.3) (2021-08-03)


### Bug Fixes

* add nucleus property to predictProton result ([46e5939](https://www.github.com/cheminfo/nmr-processing/commit/46e5939711751b9d6a9244705deacd82001cbf55))

### [2.3.2](https://www.github.com/cheminfo/nmr-processing/compare/v2.3.1...v2.3.2) (2021-08-03)


### Bug Fixes

* export nuclues in prediction ([e9f780b](https://www.github.com/cheminfo/nmr-processing/commit/e9f780b2ba9fc8c85ca8e73e346c6c539bf8534b))

### [2.3.1](https://www.github.com/cheminfo/nmr-processing/compare/v2.3.0...v2.3.1) (2021-08-03)


### Bug Fixes

* predict2D - avoid not predicted nucleus e.g labiles ([5612173](https://www.github.com/cheminfo/nmr-processing/commit/56121732965b315eb98c0d24793aad5b19166d44))

## [2.3.0](https://www.github.com/cheminfo/nmr-processing/compare/v2.2.0...v2.3.0) (2021-08-03)


### Features

* export predictAll function ([d84c1ee](https://www.github.com/cheminfo/nmr-processing/commit/d84c1ee3ad223ded3e64767af15c13d0fff4df06))

## [2.2.0](https://www.github.com/cheminfo/nmr-processing/compare/v2.1.2...v2.2.0) (2021-08-02)


### Features

* add webserviceURL option ([de87821](https://www.github.com/cheminfo/nmr-processing/commit/de87821d0b1c661ce1689a787aa5d8ab6734d617))

### [2.1.2](https://www.github.com/cheminfo/nmr-processing/compare/v2.1.1...v2.1.2) (2021-07-27)


### Bug Fixes

* **signalsToXY:** atomsIDs instead assignment ([47f2abd](https://www.github.com/cheminfo/nmr-processing/commit/47f2abdce42d29d519459e941cfe6a644335eabc))

### [2.1.1](https://www.github.com/cheminfo/nmr-processing/compare/v2.1.0...v2.1.1) (2021-07-26)


### Bug Fixes

* plural name in joinRanges function ([2a33761](https://www.github.com/cheminfo/nmr-processing/commit/2a337617a81deb04f9af0a5ea6ae6de5497fa8e5))

## [2.1.0](https://www.github.com/cheminfo/nmr-processing/compare/v2.0.1...v2.1.0) (2021-07-26)


### Features

* refactor ([#74](https://www.github.com/cheminfo/nmr-processing/issues/74)) ([3e24240](https://www.github.com/cheminfo/nmr-processing/commit/3e24240448719742a9be0f8dc3583152b5acc31a))


### Bug Fixes

* deal correctly with empty molecules ([0ac2ec3](https://www.github.com/cheminfo/nmr-processing/commit/0ac2ec3b69fb3b432654551a68629e7bf1efffe9))
* deal with empty molecules ([01b32f9](https://www.github.com/cheminfo/nmr-processing/commit/01b32f9ed40fa0a52644703b49ffbebc4f2e59a2))

### [2.0.1](https://www.github.com/cheminfo/nmr-processing/compare/v2.0.0...v2.0.1) (2021-07-25)


### Bug Fixes

* spectrum generation parameter names ([f86175d](https://www.github.com/cheminfo/nmr-processing/commit/f86175deb66b439043622bc300e5263d0b8e63fc))

## [2.0.0](https://www.github.com/cheminfo/nmr-processing/compare/v1.5.2...v2.0.0) (2021-07-23)


### ⚠ BREAKING CHANGES

* use plural name diaIDs instead diaID
* use plural names signals and js instead of signal and j in ranges
* use integration instead of integral

### Features

* **prediction:** prediction 2D  ([#68](https://www.github.com/cheminfo/nmr-processing/issues/68)) ([fed091b](https://www.github.com/cheminfo/nmr-processing/commit/fed091b48e21cf29624d7322ddc952d590f16495))
* predictor returns molecule ([9d7ba24](https://www.github.com/cheminfo/nmr-processing/commit/9d7ba24225aa0fb9a3c4d5fb25f55032c081bdb3))
* use integration instead of integral ([80ccc25](https://www.github.com/cheminfo/nmr-processing/commit/80ccc25ec21fcb6df5130af40aaf03ce3ea73f17))
* use plural name diaIDs instead diaID ([8cbcefc](https://www.github.com/cheminfo/nmr-processing/commit/8cbcefc3c3225039cf4f236e2ef908233ccc9ad6))
* use plural names signals and js instead of signal and j in ranges ([2328a13](https://www.github.com/cheminfo/nmr-processing/commit/2328a13f4084b00927c19ff3ec012c692a00d22a))


### Bug Fixes

* database in json format ([9adb6bf](https://www.github.com/cheminfo/nmr-processing/commit/9adb6bfec39eb22b4f238e538cb972462204e2e0))

### [1.5.2](https://www.github.com/cheminfo/nmr-processing/compare/v1.5.1...v1.5.2) (2021-07-22)


### Bug Fixes

* deal with new data path ([1b0c7b7](https://www.github.com/cheminfo/nmr-processing/commit/1b0c7b74c6ba48d60584074ea1f5465aca2e0846))

### [1.5.1](https://www.github.com/cheminfo/nmr-processing/compare/v1.5.0...v1.5.1) (2021-07-16)


### Bug Fixes

* don't need openchemlib as dependency ([edecc62](https://www.github.com/cheminfo/nmr-processing/commit/edecc621b47b2c34982b807334429b4344d714b0))

## [1.5.0](https://www.github.com/cheminfo/nmr-processing/compare/v1.4.0...v1.5.0) (2021-07-15)


### Features

* add ache in carbon prediction ([745ba46](https://www.github.com/cheminfo/nmr-processing/commit/745ba46943b3742a851b9381673ffff0c211bd37))
* add local database prediction ([d77000f](https://www.github.com/cheminfo/nmr-processing/commit/d77000f20d0ccda56b4c804130609162a0cc3916))
* add predictionCarbon ([#65](https://www.github.com/cheminfo/nmr-processing/issues/65)) ([e394f97](https://www.github.com/cheminfo/nmr-processing/commit/e394f97b3450000b5d5847580cd9d333972c42f5))
* put carbon db in the cloud ([8e65ac4](https://www.github.com/cheminfo/nmr-processing/commit/8e65ac4db5d4ecd5cd0e9a5bb08a7a1f40e3c175))


### Bug Fixes

* add dist in .gitignore ([c67bc30](https://www.github.com/cheminfo/nmr-processing/commit/c67bc308bb39bc457087e35dbc95702bcef89b28))
* predictCarbon ([2fb1045](https://www.github.com/cheminfo/nmr-processing/commit/2fb1045d3f15c504e53f5b8cad8009cf71eecb25))

## [1.4.0](https://www.github.com/cheminfo/nmr-processing/compare/v1.3.0...v1.4.0) (2021-05-18)


### Features

* add multiplicity when join signals from prediction ([#61](https://www.github.com/cheminfo/nmr-processing/issues/61)) ([e938688](https://www.github.com/cheminfo/nmr-processing/commit/e938688fe6fceaea725b129b602602a7eab37695))
* add san plot as an option to determine the noise level of 1D spectrum. ([#59](https://www.github.com/cheminfo/nmr-processing/issues/59)) ([0f20e1f](https://www.github.com/cheminfo/nmr-processing/commit/0f20e1f50824747c76f96c832bbb6c89888c7750))

## [1.3.0](https://www.github.com/cheminfo/nmr-processing/compare/v1.2.0...v1.3.0) (2021-05-11)


### Features

* splitPatterns allows spaces ([6a41404](https://www.github.com/cheminfo/nmr-processing/commit/6a4140455ce571c9f609f622a82a91b5970f59c1))


### Bug Fixes

* join overlaped ranges ([04e164b](https://www.github.com/cheminfo/nmr-processing/commit/04e164b3e8dd4998ced8e1a5e125bd2663d9c803))
* update dependencies ([18bb254](https://www.github.com/cheminfo/nmr-processing/commit/18bb254515efaac5bcb462824dd52e9880ecc798))
* use cross-fetch instead of node-fetch for browser compatibility ([ba92bac](https://www.github.com/cheminfo/nmr-processing/commit/ba92bac64de76a5f897a38f3f140d0f5d5830ce0))

## [1.2.0](https://www.github.com/cheminfo/nmr-processing/compare/v1.1.0...v1.2.0) (2021-04-05)


### Features

* adapt splitSpinSystem to ml-hclust 3.0.0 ([#55](https://www.github.com/cheminfo/nmr-processing/issues/55)) ([52bb416](https://www.github.com/cheminfo/nmr-processing/commit/52bb41632bf0535c537b966a792da728f7c26036))
* add cache in prediction ([7efd153](https://www.github.com/cheminfo/nmr-processing/commit/7efd153caa77ea13050ce3553c058e312cb72551))
* add couplind length in prediciton ([afbfb84](https://www.github.com/cheminfo/nmr-processing/commit/afbfb84ccf70608c1a609c408c591bc2b4561077))
* add couplingValues ([3c3dfb2](https://www.github.com/cheminfo/nmr-processing/commit/3c3dfb2e12c54efb8a6c4baf52d8e29159562933))
* add diaID in prediction result ([92cb27e](https://www.github.com/cheminfo/nmr-processing/commit/92cb27e392628355c895acc211ec15b6469d4c9d))
* add signalsJoin ([022ec07](https://www.github.com/cheminfo/nmr-processing/commit/022ec07d26234a6818cc43324f2fe0a2d4f89045))
* add splitPatterns and joinPatterns ([cdacae3](https://www.github.com/cheminfo/nmr-processing/commit/cdacae36ffa7cc12098c6d315028ebefb33c4f13))
* improve joinSignals in predictionProton ([fa361a7](https://www.github.com/cheminfo/nmr-processing/commit/fa361a7214105ba1bd7e09c2c13bed571792c76a))
* prediction assignment is always an array and add testcase ([110960e](https://www.github.com/cheminfo/nmr-processing/commit/110960ec783022e2f0e1f98997683eb44f506c72))
* sort couplings from larger to smaller ([b6940a4](https://www.github.com/cheminfo/nmr-processing/commit/b6940a4b6d812068405caf24559439155f36eea5))


### Bug Fixes

* correctly join signal couplings ([dfedd56](https://www.github.com/cheminfo/nmr-processing/commit/dfedd5636d520a55369d93e1b925462e4264a8b2))

## [1.1.0](https://www.github.com/cheminfo/nmr-processing/compare/v1.0.1...v1.1.0) (2021-04-02)


### Features

* splitSystem as independent function ([#53](https://www.github.com/cheminfo/nmr-processing/issues/53)) ([1054423](https://www.github.com/cheminfo/nmr-processing/commit/10544234125147b57e4171458ae5882c0d60c021))


### Bug Fixes

* signalJoinCouplings assignment join ([2fce7cb](https://www.github.com/cheminfo/nmr-processing/commit/2fce7cb749d86dceccbddd355a66fcc2ac9b4a05))

### [1.0.1](https://www.github.com/cheminfo/nmr-processing/compare/v1.0.0...v1.0.1) (2021-03-24)


### Bug Fixes

* update ml-matrix-peaks-finder to v1.0.0 ([da734cc](https://www.github.com/cheminfo/nmr-processing/commit/da734cc91928750ca2038ff285f8d2db65130284))

## [1.0.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.14.0...v1.0.0) (2021-03-24)


### Bug Fixes

* update dependencies ([5e2809a](https://www.github.com/cheminfo/nmr-processing/commit/5e2809a057947ad4b52e66c74ed5e7bbf5e2b7bd))

## [0.14.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.13.0...v0.14.0) (2021-03-24)


### ⚠ BREAKING CHANGES

* The proton prediction function was renamed to predictionProton and requires an `OCL.Molecule` instance. `fromMolfile` and `fromSmiles` were removed.

### Code Refactoring

* remove OCL dependency ([bdcbbe0](https://www.github.com/cheminfo/nmr-processing/commit/bdcbbe0440ffbfc2f67f90d078002066017fa3d5))

## [0.13.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.12.1...v0.13.0) (2021-03-19)


### Features

* fix ensureClusterSize ([#47](https://www.github.com/cheminfo/nmr-processing/issues/47)) ([570f9f8](https://www.github.com/cheminfo/nmr-processing/commit/570f9f82fcb17a42cae767f638b19cadbb894fff))
* remove xyGetArea close[#10](https://www.github.com/cheminfo/nmr-processing/issues/10) ([13bf194](https://www.github.com/cheminfo/nmr-processing/commit/13bf19475fa0d1bcefeb84a750d97f4ee8cd1d00))
* rescale to 1e8 signalsToXY and add maxValue option ([da2364c](https://www.github.com/cheminfo/nmr-processing/commit/da2364ca434f8f860533d8c20309605dc5487cae))


### Bug Fixes

* remove writeFile in test ([61b54e3](https://www.github.com/cheminfo/nmr-processing/commit/61b54e3a0f2ed670cb048bf32453a9084ccdd02f))

### [0.12.1](https://www.github.com/cheminfo/nmr-processing/compare/v0.12.0...v0.12.1) (2021-03-12)


### Bug Fixes

* expose signalsToXY ([927646b](https://www.github.com/cheminfo/nmr-processing/commit/927646b555304d5c48a2263b5f59caa2c231d8dd))

## [0.12.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.11.1...v0.12.0) (2021-03-05)


### Features

* add simulation of 1D nmr spectrum from signals ([247d523](https://www.github.com/cheminfo/nmr-processing/commit/247d523f80d2877713fa6d978027643b4fa78a3f))
* use spectrum-generator in simulate1D ([9489d78](https://www.github.com/cheminfo/nmr-processing/commit/9489d78e1962c6cf834e14e24f46c876be6802e8))
* use static function for spinSystem creation ([1db79c5](https://www.github.com/cheminfo/nmr-processing/commit/1db79c5c2e5901b366d48c88263116cbbb1d0972))


### Bug Fixes

* eslint ([69ac997](https://www.github.com/cheminfo/nmr-processing/commit/69ac9972cae991f27fe15648952593f92bcd91b9))
* rename xyzJResAnalizer to xyzJResAnalyzer ([fbc80ee](https://www.github.com/cheminfo/nmr-processing/commit/fbc80ee9485f028f1c12f4a75571fa4eb6e6d031))

### [0.11.1](https://www.github.com/cheminfo/nmr-processing/compare/v0.11.0...v0.11.1) (2021-03-01)


### Bug Fixes

* allow other openchemlib-utils initialization ([f69a825](https://www.github.com/cheminfo/nmr-processing/commit/f69a8250d629d948a4b24f70d7d221dc6e68465f))

## [0.11.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.10.0...v0.11.0) (2021-02-28)


### Features

* add predictionProton ([17f596d](https://www.github.com/cheminfo/nmr-processing/commit/17f596dd94346cf1f1e31b0fa06c0281b0fd8e27))
* add signalsToRanges ([906dad9](https://www.github.com/cheminfo/nmr-processing/commit/906dad926fb3364f4f0d6836539998a8633e2722))
* add spinus prediction ([1bce49f](https://www.github.com/cheminfo/nmr-processing/commit/1bce49f1c0783ab45ce90657d2a749b93b1ae07b))

## [0.10.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.9.0...v0.10.0) (2021-02-18)


### Features

* add from-to of signals from from-to of peaks ([15950c5](https://www.github.com/cheminfo/nmr-processing/commit/15950c54479f9944b118637bf27f606e2d8db1fd))

## [0.9.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.8.0...v0.9.0) (2021-02-09)


### Features

* change nH to integrationSum ([#33](https://www.github.com/cheminfo/nmr-processing/issues/33)) ([801960a](https://www.github.com/cheminfo/nmr-processing/commit/801960a8fa765d3b3bbc9ec555496a9b505827e7))

## [0.8.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.7.0...v0.8.0) (2021-02-09)


### Features

* real top detection and fix options name in peak detection ([#32](https://www.github.com/cheminfo/nmr-processing/issues/32)) ([e0dd125](https://www.github.com/cheminfo/nmr-processing/commit/e0dd125d4146d9143b4394204ebeeed16b0ffb80))
* update parameters names for xyAutoRangesPicking ([ed388e6](https://www.github.com/cheminfo/nmr-processing/commit/ed388e686a1dffebe852d3f12726a15560fb3fc2))

## [0.7.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.6.0...v0.7.0) (2021-01-26)


### Features

* add kind to signal in auto range detection ([#28](https://www.github.com/cheminfo/nmr-processing/issues/28)) ([90a1ecd](https://www.github.com/cheminfo/nmr-processing/commit/90a1ecd65363f21603d07aa8b6cfd0c15045f829))

## [0.6.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.5.0...v0.6.0) (2021-01-22)


### Features

* generate version with 2D peak picking improvement ([ae62c20](https://www.github.com/cheminfo/nmr-processing/commit/ae62c2067ab491c1c6e4a9e0e271bb39935fa203))

## [0.5.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.4.0...v0.5.0) (2020-12-16)


### Features

* by default filter solvent and impurity in rangesToACS ([319e595](https://www.github.com/cheminfo/nmr-processing/commit/319e595462a17c834699249dea8757bd87008dca))

## [0.4.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.3.1...v0.4.0) (2020-11-16)


### Features

* update ml-gsd and improve documentation ([#23](https://www.github.com/cheminfo/nmr-processing/issues/23)) ([f0400ef](https://www.github.com/cheminfo/nmr-processing/commit/f0400ef10895920a4ae6f76a7c8b9418db12a425))

### [0.3.1](https://www.github.com/cheminfo/nmr-processing/compare/v0.3.0...v0.3.1) (2020-10-28)


### Bug Fixes

* update matrix-peaks-finder ([#21](https://www.github.com/cheminfo/nmr-processing/issues/21)) ([d1abb05](https://www.github.com/cheminfo/nmr-processing/commit/d1abb058f52cda9dbb2aca23ab2fa9262a85c069))

## [0.3.0](https://www.github.com/cheminfo/nmr-processing/compare/v0.2.5...v0.3.0) (2020-10-27)

### Bug Fixes

* auto peaks picking dependency ([420c92a](https://www.github.com/cheminfo/nmr-processing/commit/420c92a45ad2ba7375694cee9f2bc6ae03f2d6cd))
* use number for gyromagneticRatio and add 1 digit for 13C ([1f77c67](https://github.com/cheminfo/nmr-processing/commit/1f77c67927749e41f3c4cbb5779ef5d7e075d9ad))

## [0.2.1](https://github.com/cheminfo/nmr-processing/compare/v0.2.0...v0.2.1) (2020-06-24)


## [0.2.0](https://github.com/cheminfo/nmr-processing/compare/v0.1.5...v0.2.0) (2020-06-23)


### Features

* add gyromagneticRatio ([84a5fe9](https://github.com/cheminfo/nmr-processing/commit/84a5fe95c4fc8024344f37225005e6b2c287356d))


## 0.1.0 (2020-05-23)


### Features

* add a folder with constants ([fd48113](https://github.com/cheminfo/nmr-processing/commit/fd481139955abf5118b00f7f8a402ca4ceb831fa))
* add getPattern and joinCouplings ([f7f591d](https://github.com/cheminfo/nmr-processing/commit/f7f591d53ed3a2bff8e48e62f3bbb473b9d26e2a))
* add peak picking ([2c2ccd5](https://github.com/cheminfo/nmr-processing/commit/2c2ccd567a9e29378177fe44dcf4aecd1e4444dd))
* add signal ([e11a02c](https://github.com/cheminfo/nmr-processing/commit/e11a02c6f3f3300840121aa53d2c6af45add0bb4))
* add test data ([ab8cd2e](https://github.com/cheminfo/nmr-processing/commit/ab8cd2e449939de261a8178306af1aeff8f7baaf))
* add toACS ([5225cb1](https://github.com/cheminfo/nmr-processing/commit/5225cb1285dd66a2fa568699b706d4b518e29461))
* addn web folder allowing to debug ([965eabf](https://github.com/cheminfo/nmr-processing/commit/965eabf7335638cf7d150acb34118ef15c28a9d5))
