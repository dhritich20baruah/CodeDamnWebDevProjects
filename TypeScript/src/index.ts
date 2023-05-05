let message: string = "Hello World"
console.log(message)

//Primitive types
let isPresent: boolean = false//boolean
let magic: number = 99.9//number
let str: string = "Hello World"//string

//TS primitives for non avaialability of data
let notDefined: undefined = undefined
let notPresent: null = null

let penta: symbol = Symbol('star') //Globally unique identifiers 
let biggy: bigint = 24n //Arbitarily large numbers

//Instance type
let regexp: RegExp = new RegExp('ab+c')
let array: Array<number> = [1,2,3]
let set: Set<number> = new Set([1,2,3])

//A first in first out collection
class Queue<T>{
    private data: Array<T> = [];
    push(item: T){ this.data.push(item);}
    pop(): T | undefined { return this.data.shift()}
}

let queue: Queue<number> = new Queue()

//Array
let arr: number[] = [1,2,3]
 //Usage
 arr = [1];
 arr = [1,2,3,4]
//  arr = ['hello'] //error

 //Tuple
 let tuple: [number, number] = [0,0]
 //Usage
 tuple = [1,2]
//  tuple = [1] //error
//  tuple = [1,2,3] //error
//  tuple = ['num', 12] //error

 //Object Type and type aliases
 let center: {x: number, y: number} = {
    x: 0,
    y: 0
 }

 type Point = { x: number, y: number}

 let vertex: Point = {
    x: 1,
    y: 2
 }

 const intersect: Point = { x: 2, y: 3}

//  intersect = {x:10, y:30} //Error re declaration for const not allowed

//All other behaviours are allowed
intersect.x = 10
intersect.y = 30

//Functions
function add(a: number, b: number){
    return a + b
}

function log(message: string): void{ //for functions that doesnot return anything
    console.log('LOG:', message)
}

function sum(...values: number[]){ //values is called rest parameter
    return values.reduce((previous, current)=>{
        return previous + current
    })
}

//First class functions(variables that are functions)
type Add = (a: number, b: number) => number

// let add: Add

let add2 = function (a: number, b: number): number{
    return a + b
}

// Structural Typing
type User = {id: string}
type Product = {id: string}

let user: User = {id: "user123"}
let product: Product = {id: "modelX"}
//Type scripts type system is structural it doesnot care about the name of the types. It means that the user and the product has the same type compatibility. We can assign a product to a user and user to product
user = product
product = user

type Point2D = { x: number, y: number}
type Point3D = { x: number, y: number, z: number}

let point2d: Point2D = {x:2, y:3}
let point3d: Point3D = {x:2, y:4, z:5}

// Extra info OK
point2d = point3d
// point3d = point2d not OK
function takespt2d(point: Point2D){}
takespt2d(point3d)

//CLASS
class Animal{
    protected name: string;
    private horn: boolean;

    constructor(name: string, horn: boolean){
        this.name = name,
        this.horn = horn
    }

    public move(distance: number): void{
        console.log(`${this.name} having ${this.horn} moved ${distance} mtrs.`)
    }
}

// let cat = new Animal('Cat')
// cat.move(10);
// cat.name = 'Milli'
// cat.horn = false

class Bird extends Animal{
    fly(distance: number){
        console.log(`${this.name}  moved ${distance} mtrs.`)
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
let exampleAny: any;
let exampleUnknown: unknown;

//any
exampleAny = 123;
exampleAny = 'Hello'

//Unknown
exampleUnknown = 123
exampleUnknown = 'World'

//any - it bypasses everything that typescript stands for
exampleAny.allows.anything.you.can.imagine()
let anySetBool: boolean = exampleAny

//unknown - safer than any
if (typeof exampleUnknown == 'string'){
    exampleUnknown.trim()
}

if (typeof exampleUnknown == 'boolean'){
    let unknownSetBool: boolean = exampleUnknown
}

//Universal Utilities
function util(value: unknown){
    if (typeof value == 'number'){
        console.log(value.toFixed(2))
    } else {
        console.log(value)
    }
}

util(123.456)
util('hello world')

//Type Asertions
function load(arg: string){
    return "Hello s" + arg
}
let hello = load("Dhriti")

if (typeof hello === 'string'){
    const trimmed = hello.trim()
    console.log(trimmed)
}

//Type casting
let leet

leet = '1337'

const number = +leet

console.log(number === 1337)
console.log(number)

//MODULES
import { isPalindrome } from "./palindrome"

console.log(isPalindrome('madam'))
console.log(isPalindrome('madan'))

//Types declaration
console.log(
    'Logged in user:',
    process.env.USER
)

//To declare environment variables install @types/node for express install @types/express

import fs from 'fs'
fs.writeFileSync('hello.txt', 'Hello World')

const express = require('express')
const app = express()
app.get('/', function(req, res){
    res.send('Hello')
})
app.listen(3000, ()=>{
    console.log('server started')
})

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
}

const main = () => {
    setTimeout(()=>{
        console.log('1s')
        setTimeout(()=>{
            console.log('2s')
            setTimeout(()=>{
                console.log('3s')
            }, 1000)
        }, 1000)
    }, 1000)
}

//ts-node package that runs typescript locally
