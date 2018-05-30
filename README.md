# MI133 Examples

[![Build Status](https://travis-ci.org/mjleehh/mi133-examples.svg?branch=master)](https://travis-ci.org/mjleehh/mi133-examples)

This repo contains the code examples for the MI133 class held in sumer semseter
2018 at FH Kiel.

Each example can be found in a separate subfolder.

### Requirements

You will need to install the following tools:

* **Node.js** JavaScript runtime
* **npm** package manager
* **npx** package runner

### Running Examples:

From an example folder run

```bash
$ npm start
```

to run an example.

**NOTE:** On windows systems you may encounter problems with symbolic links. If
you get an error reporting an invalid `.babelrc` copy the `.babelrc` file from
the root directory to the example folder you want to use
(overwriting the symlink).

### List of examples:

`/led-matrix`: simple example of a react app keeping its state in the components.

![led matrix screenshot](resources/led-matrix.png)

`/led-matrix-plain-redux`: same user flow as `led-matrix` using Redux state container.

![redux led matrix screenshot](resources/led-matrix-plain-redux.png)

`/led-matrix-with-backend`: same user flow as `led-matrix` using a backend.

![backend log screenshot](resources/led-matrix-with-backend.png)

`/led-matrix-with-db`: same user flow as `led-matrix` with MongoDB storage.

![mongo collection screenshot](resources/led-matrix-with-db.png)

`/calculator`: A calculator lab assignment solution.

![calculator screenshot](resources/calculator.png)

`/bookmarks-with-testing`: A little bookmark app with app logic testing.

![bookmarks](resources/bookmarks-with-testing.png)

`/putzplan`: Backend implementation for the 'Putzplan' lab assignment.

![putzplan](resources/putzplan.png)

[putzplan docs](/putzplan/README.md)

`/infinite-counter`: Very simple click count application to demonstrate the use
of the elm programming language as a real functional alternative to react/redux.

![infinite counter screenshot](/resources/infinite-counter.png)

`/infinite-counter-with-react`: Same as the *inifinite counter* implemented in
elm and Koa but implemented using React/Redux and express.

![infinite counter with React screenshot](/resources/infinite-counter-with-react.png)

`/address-book`: A little address book app using passportjs for authentication.

![signup](resources/address-book/signup.png)
![login](resources/address-book/login.png)
![main screen](resources/address-book/main-screen.png)
![add contact menu](resources/address-book/add-contact-menu.png)
