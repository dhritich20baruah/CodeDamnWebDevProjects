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