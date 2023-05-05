"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello World";
console.log(message);
//Primitive types
let isPresent = false; //boolean
let magic = 99.9; //number
let str = "Hello World"; //string
//TS primitives for non avaialability of data
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star'); //Globally unique identifiers 
let biggy = 24n; //Arbitarily large numbers
//Instance type
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
//A first in first out collection
class Queue {
    data = [];
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
//Array
let arr = [1, 2, 3];
//Usage
arr = [1];
arr = [1, 2, 3, 4];
//  arr = ['hello'] //error
//Tuple
let tuple = [0, 0];
//Usage
tuple = [1, 2];
//  tuple = [1] //error
//  tuple = [1,2,3] //error
//  tuple = ['num', 12] //error
//Object Type and type aliases
let center = {
    x: 0,
    y: 0
};
let vertex = {
    x: 1,
    y: 2
};
const intersect = { x: 2, y: 3 };
//  intersect = {x:10, y:30} //Error re declaration for const not allowed
//All other behaviours are allowed
intersect.x = 10;
intersect.y = 30;
//Functions
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG:', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
// let add: Add
let add2 = function (a, b) {
    return a + b;
};
let user = { id: "user123" };
let product = { id: "modelX" };
//Type scripts type system is structural it doesnot care about the name of the types. It means that the user and the product has the same type compatibility. We can assign a product to a user and user to product
user = product;
product = user;
let point2d = { x: 2, y: 3 };
let point3d = { x: 2, y: 4, z: 5 };
// Extra info OK
point2d = point3d;
// point3d = point2d not OK
function takespt2d(point) { }
takespt2d(point3d);
//CLASS
class Animal {
    name;
    horn;
    constructor(name, horn) {
        this.name = name,
            this.horn = horn;
    }
    move(distance) {
        console.log(`${this.name} having ${this.horn} moved ${distance} mtrs.`);
    }
}
// let cat = new Animal('Cat')
// cat.move(10);
// cat.name = 'Milli'
// cat.horn = false
class Bird extends Animal {
    fly(distance) {
        console.log(`${this.name}  moved ${distance} mtrs.`);
    }
}
//GENERICS
// class Queue1<T>{
//     data = []
//     push(item) {this.data.push(item)}
//     pop(): T { return this.data.shift()}
// }
// class NumberQueue extends Queue {
//     push(item: number) { super.push(item);}
//     pop(): number{ return super.pop()}
// }
// const queue1 = new Queue1<number>()
// queue.push(123)
//Special Types: any and unknown
let exampleAny;
let exampleUnknown;
//any
exampleAny = 123;
exampleAny = 'Hello';
//Unknown
exampleUnknown = 123;
exampleUnknown = 'World';
//any - it bypasses everything that typescript stands for
exampleAny.allows.anything.you.can.imagine();
let anySetBool = exampleAny;
//unknown - safer than any
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetBool = exampleUnknown;
}
//Universal Utilities
function util(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
util(123.456);
util('hello world');
//Type Asertions
function load(arg) {
    return "Hello s" + arg;
}
let hello = load("Dhriti");
if (typeof hello === 'string') {
    const trimmed = hello.trim();
    console.log(trimmed);
}
//Type casting
let leet;
leet = '1337';
const number = +leet;
console.log(number === 1337);
console.log(number);
//MODULES
const palindrome_1 = require("./palindrome");
console.log((0, palindrome_1.isPalindrome)('madam'));
console.log((0, palindrome_1.isPalindrome)('madan'));
//Types declaration
console.log('Logged in user:', process.env.USER);
//To declare environment variables install @types/node for express install @types/express
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('hello.txt', 'Hello World');
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(3000, () => {
    console.log('server started');
});
const delay = (ms) => new Promise(res => setTimeout(res, ms));
const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
};
const main = () => {
    setTimeout(() => {
        console.log('1s');
        setTimeout(() => {
            console.log('2s');
            setTimeout(() => {
                console.log('3s');
            }, 1000);
        }, 1000);
    }, 1000);
};
//ts-node package that runs typescript locally
