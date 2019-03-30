'use strict';

module.exports = myapp;

const mylib = require('mylib')

function myapp() {
    console.log(mylib())
}

myapp()
