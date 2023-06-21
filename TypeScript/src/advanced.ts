type Animal = {
    name: string,
    voice(): string,
}

function log(animal: Animal){
    console.log(`Animal ${animal.name}: ${animal.voice()}`)
}

class Cat implements Animal {
    constructor(public name: string) {}
    voice() { return 'meow'}
}

class Dog implements Animal {
    constructor(public name: string) {}
    voice() { return 'woof' }
}

log(new Cat('Kitty'))
log(new Dog('Laika'))

//Definite Assignment Assertion
let dice!: number; //the ! mark after variable declaration is called definite assignment assertion
function rollDice() {
    dice = (Math.floor(Math.random() *6) + 1)
}
rollDice();

console.log('Current Dice Value', dice)

rollDice();
console.log('After another roll', dice)

class Point2D  {
    x!: number;
    y!: number;
    constructor(){
        this.moveRandom()
    }
    moveRandom(){
        this.x = Math.random()
        this.y = Math.random()
    }
}

//User defined Type Guards
type Square = {
    size: number,
}

type Rectangle = {
    width: number,
    height: number,
}

type Shape = Square | Rectangle

function isSquare(shape: Shape): shape is Square{
    return 'size' in shape;
}

function isRectangle(shape: Shape): shape is Rectangle{
    return 'width' in shape
}

function area(shape: Shape){
    if (isSquare(shape)){
        return shape.size * shape.size
    }

    if (isRectangle(shape)){
        return shape.width * shape.height
    }

    const _ensure: never = shape;
    return _ensure
}

//assertion function
type Person = {
    name: string,
    dateOfBirth?: Date
}

function assert(condition: unknown, message: string): asserts condition {
    if(!condition) throw new Error(message)
}

function assertDate(value: unknown): asserts value is Date {
    if(value instanceof Date) return;
    else throw new TypeError('value is not a Date')
}

const maybePerson = loadPerson()

assert(maybePerson != null, 'Could not load person')
console.log('Name:', maybePerson.name)

assertDate(maybePerson.dateOfBirth)
console.log('Date of Birth', maybePerson.dateOfBirth.toISOString())

//Function 
function reverse(string: string): string;
function reverse(stringArr: string[]): string[];
function reverse(strOrStrArr: string | string[]){
    if (typeof strOrStrArr == 'string'){
        return strOrStrArr.split('').reverse().join('')
    } else {
        return strOrStrArr.slice().reverse()
    }
}

const hello = reverse('hello')
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o'])

//Call signatures
type Add = (a:number, b:number) => number
// If we use call signatures
type Add2 = {
    (a:number, b:number): number,
    (a:number, b:number, c:number): number,
    debugName?: string,
}

const add: Add2 = (a: number, b: number, c?:number) => {
    return a + b + (c != null ? c: 0)
}
add.debugName = 'Addition Function'

type PointCreator = {
    new (x: number, y: number) : { x: number, y: number}
} 

const Point: PointCreator = class {
    constructor(public x: number, public y: number) {}
}

//Abstract classes
abstract class Command {
    abstract commandLine(): string

    execute() {
        console.log('Executing:', this.commandLine())
    }
}

class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard'
    }
}

class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --hard'
    }
}

new GitResetCommand().execute()
new GitFetchCommand().execute()

//index signatures
const strs = {
    hello: 'world'
}

console.log(strs['hello'])

const nums = {
    1337: 'leet'
}

console.log(nums[1337])

type Dictionary = {
    [key: string] : boolean
}

type Person1 = {
    displayName: string,
    email: string
}

type Person1Dictionary = {
    [username: string]: Person1
}

const persons: Person1Dictionary = {
    jane: {displayName: 'Jane Doe', email: 'jane@email.com'}
}

persons['john'] = {displayName: 'John Doe', email: 'john@email.com'}

console.log(persons['john'])

delete persons['john']

const result = persons['missing']
console.log(result, result.email) //undefined
