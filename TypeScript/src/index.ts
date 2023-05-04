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