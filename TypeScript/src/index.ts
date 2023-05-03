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
// let biggy: bigint = 24n //Arbitarily large numbers

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
 arr = ['hello'] //error

 //Tuple
 let tuple: [number, number] = [0,0]
 //Usage
 tuple = [1,2]
 tuple = [1] //error
 tuple = [1,2,3] //error
 tuple = ['num', 12] //error

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