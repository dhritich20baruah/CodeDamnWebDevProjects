"use strict";
//npx tsc --watch
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
// let biggy: bigint = 24n //Arbitarily large numbers
//Instance type
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
//A first in first out collection
class Queue {
    constructor() {
        this.data = [];
    }
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
