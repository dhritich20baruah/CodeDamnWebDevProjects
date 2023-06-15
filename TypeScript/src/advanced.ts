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
