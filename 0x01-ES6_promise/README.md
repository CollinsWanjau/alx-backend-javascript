# 0x01. ES6 Promises

## Learning Objectives

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an `async` function

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using [Jest](https://jestjs.io/en/) and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```
$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

in your project directory, install jest, babel, and ESLint:

## Configuration files

## Tasks

### 0. Keep every promise you make and only make promises you can keep mandatory

Return a Promise using this prototype function `getResponseFromAPI()`

File: [0-promise.js](0-promise.js/)

### 1. Don't make a promise...if you know you can't keep it mandatory

Using the prototype below, return a Promise. The parameter is a boolean.

File: [1-promise.js](1-promise.js/)

### 2. Catch me if you can! mandatory

Using the function prototype below:

```function handleResponseFromAPI(promise)```

Append three handlers to the function:

- If the Promise resolves, return an object `{ status: 200, body: 'success' }`
- When the promise rejects, return an empty Error object

File: [2-then.js](2-then.js/)