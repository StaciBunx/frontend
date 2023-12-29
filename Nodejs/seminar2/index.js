// const passGen = require('./passwordGenearator');
const passGen = require('passgen-gb');


const password = passGen.generatePassword(10);
console.log(password);