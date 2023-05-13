import { type } from "os"

//Lexical this
class Person {
    private _age: number
    constructor(_age: number){
        this._age = _age
    }
    growOld = () => {
        this._age++
    }
    age(){
        return this._age
    }
}

const person = new Person(0)
// person.growOld()
const growOld = person.growOld;
growOld()
console.log('age', person.age())

// readonly modifier
type Point = {
    readonly x: number,
    readonly y: number
}

const point: Point = {
    x: 0,
    y: 0,
}
//If a variable is declared as readonly it cannot be reassigned.
//Variable assignment
point = { x: 1, y: 1}

//Property assignment
point.x = 1
point.y = 1

//Property read
console.log(`(${point.x}), ${point.y}`)

class Animal {
    public readonly name: string;
    constructor(name: string) {
        this.name = name
    }
}

const sheep =  new Animal('sheep')
console.log(sheep.name)
sheep.name = 'wolf'

// UNION TYPES
/**
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */

function formatCommandLine(input: string | string[]){
    let line = '';
    if (typeof input === 'string'){
        line = input.trim()
    } else {
        line = input.map(x => x.trim()).join('')
    }
    return line
}

console.log(formatCommandLine('hello'));
console.log(formatCommandLine(['hello ', ' world']))
console.log(formatCommandLine(1337))

type Padding = number | string
/**
 * Takes a string and adds 'padding' to the left
 * If 'padding' is a number, then that number of spaces is added to the left
 * If 'padding' is a string, then padding is appended to the left
 */
function padLeft(value: string, padding: Padding){
    if(typeof padding === 'number'){
        return Array(padding + 1).join(' ') + value
    }
    if(typeof padding  === 'string'){
        return padding + value
    }
    throw new Error(`Expected number or string, got ${padding}`)
}

padLeft('hello world', 4)

//Type Narrowing
class Cat {
    meow(){
        console.log('meow')
    }
}

class Dog{
    bark(){
        console.log('woof')
    }
}

type Animals = Cat | Dog

function speak(animal: Animals){
    if(animal instanceof Cat){
        animal.meow()
    }
    if(animal instanceof Dog){
        animal.bark()
    }
}
type Square = {
    size: number
}

type Rectangle = {
    width: number,
    height: number
}

type Shape = Square | Rectangle

function area(shape: Shape){
    if('size' in shape){
        return shape.size * shape.size
    }
    if('width' in shape){
        return shape.width * shape.height
    }
}

area({ size: 2 })
//Literal types
type CardinalDirection= 'North' | 'South' | 'East' | 'West' //named type alias
let direction: CardinalDirection
direction = 'North'
direction = "South"
direction = 'n0923th'

function move(distanceMeters: number, direction: CardinalDirection){
    console.log(`Moving ${distanceMeters} in ${direction}`)
}

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice(){
    return (Math.floor(Math.random()*6)+1) as DiceValue
}

if (rollDice() === 7){
    throw new Error('not possible')
}

//Discriminated Unions
type Squares = {
    kind: 'square',
    size: number
}

type Rectangles = {
    kind: 'rectangle',
    width: number,
    height: number
}

type Shapes = Squares | Rectangles

function areas(shapes: Shapes){
    if(shapes.kind === 'square'){
        return shapes.size * shapes.size
    }
    if(shapes.kind === 'rectangle'){
        return shapes.width * shapes.height
    }
}

type ValidationSuccess = {
    isValid: true,
    validatedValue: string
}

type ValidationFailure = {
    isValid: false,
    errorReason: string
}

type validationResult = 
    | ValidationSuccess
    | ValidationFailure

function logResult(result: validationResult){
    if(result.isValid){
        console.log('Success, validated value:', result.validatedValue)
    }
    if(result.isValid === false){
        console.log('Failure, error reason:', result.errorReason)
    }
}

//Class Parameter Properties
class Persons {
    constructor(
        public name: string,  //Constructor
        public age: number
    ) {
    }
}

const adam = new Persons('Adam', 12000000);
console.log(adam.name, adam.age)

//null versus undefined
console.log(null == null) //true
console.log(undefined == undefined) //true


console.log(undefined == null) //true


console.log(false == null) //false
console.log(0 == null) //false
console.log('' == null) //false

function decorate(value: string | null | undefined){
    if (value == null){
        return value
    }
    return `--${value.trim()}--`
}

console.log(decorate('Hello'))
console.log(decorate('Hello World '))

console.log(decorate(null))
console.log(decorate(undefined))

//intersection types
type Point2D1 = {
    x: number,
    y: number
};

type Point3D1 = Point2D1 & {
    z: number
}

type Person1 = {
    name: string
}

type Email1 = {
    email: string
}

type Phone1 = {
    phone: string
}

type ContactDetails = 
    & Person1
    & Email1
    & Phone1

function contact(details: ContactDetails){
    console.log(`Dear ${details.name}.
    I hope you have saved our ${details.email} and ${details.phone}`)
}

contact({
    name: 'John',
    email: "john@email.com",
    phone: '1234'
})

//OPTIONAL MODIFIER
type Person2 = {
    name: string,
    email: string,
    phone?: string, //optional modifier
}

const bruce: Person2 = {
    name: 'Bruce',
    email: 'b@email.com',
    phone: '124',
}

const alfred: Person2 = {
    name: 'Alfred',
    email: 'alfred@email.com', //providing the phone number is optional
}

console.log(alfred.phone) //Will return undefined

class Point2 {
    x?: number | null;
    y?: number;
}

const point2 = new Point2()

console.log(point2.x)

point2.x = 0;
point2.x = undefined;
point2.x = null //error as null is not added as explicit annotation as shown above

//Non null assertion operator
type Point3 = {
    x: number,
    y: number,
}

let point3: Point3;
function initialize() {
    point3 = {x: 0, y: 0}
}

initialize();
console.log('After initialized', point3!.x, point3!.y) //! mark is known as non null assertion they are used in compile time only not in run time so they should be avoided.

//To avoid the non null assertions the above code should be written as follows
type Point3s = {
    x: number,
    y: number,
}

function initialize2(): Point3s {
    return {x: 0, y: 0}
}

const point3s = initialize2();
console.log('After initialized', point3s.x, point3s.y) 

//interfaces
// type Point2D2 = {
//     x: number,
//     y: number,
// }

// type Point3D2 = Point2D2 & {
//     z: number,
// }

// export const point4: Point3D2 = {
//     x: 0,
//     y: 0,
//     z: 0,
// } 

interface Point2D2  {
    x: number,
    y: number,
}

interface Point3D2 extends Point2D2  {
    z: number,
}

export const point4: Point3D2 = {
    x: 0,
    y: 0,
    z: 0,
} 