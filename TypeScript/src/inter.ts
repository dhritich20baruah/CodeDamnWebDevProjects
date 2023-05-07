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