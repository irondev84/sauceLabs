# sauceLabs - tutorial version for SauceLabs POC

### Installation
Project requires latest [Node.js](https://nodejs.org/) to run.

Install the dependencies and start testing.

```sh
$ mkdir saucePoc
$ cd saucePoc
$ npm install
```


### Running test

```sh
$ cd saucePoc
$ npm run test PATH_TO_TESTS -- ADDITIONAL_PARAMS
```

#### Example of using parallel running and special environment 

```sh
$ cd saucePoc
$ npm run test .\spec\saucePoc -- --env sauce-desktop-windows --workers 4
```

### LIST OF PREDEFINED ENVIRONMENTS
| ENV | DESC |
| ------ | ------ |
|sauce-desktop-windows|Winows 10 and latest chrome browser|
|sauce-desktop-linux|Linux standard from SauceLabs and latest chrome browser|
|sauce-desktop-macos|macOS 10.13 and latest firefox browser|