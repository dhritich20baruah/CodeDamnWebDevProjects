// NaN.includes(NaN) returns true =>Same value zero algorithm

//Iterating over objects
obj = {
    something: {
        like:{
            that: "this"
        },
        somethingelse: true,
    },
    anotherprop: 100
}

//To iterate over an object convert it to an array of keys
//The following code does that
Object.keys(obj)

//Function to iterate over keys
function iterateOverObj(obj){
    const keys = Object.keys(obj)
    for(let i =0; i<keys.length; i++){
        const key = keys[i]
        const value = obj[key]

        if(typeof value === 'object'){
            console.log(`${key} =`, value)
            iterateOverObj(value)
        }else{
            console.log(`${key} = ${value}`)
        }
    }
}

//Second method
function iterateOverObj2(obj){
    for(const key in obj){
        const value = obj[key]

        if(typeof value === 'object'){
            console.log(`${key} =`, value)
            iterateOverObj2(value)
        }else{
            console.log(`${key} = ${value}`)
        }
    }
}

//Iterators
const arr = [1,2,3,4,5]

for(const value of arr){ //await async can be used with for of
    console.log(value)
}

const set = new Set([1,1,1,2,3,4,4,4,5,6,6])
console.log(set)
arr.reverse()

//Custom languages
const favLanguages = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"]
favLanguages[Symbol.iterator]//which is a custom property defined on an object to make it iterable

favLanguages[Symbol.iterator]=()=>{
    let len = favLanguages.length
    return{
        next: () =>({
            value: favLanguages[--len],
            done: len < 0
        })
    }
}

const arr2 = [1,2,3,4,5]
const x = [...arr2]//this will work only if arr2 is iterable and should have a property [Symbol.itearble] = () => {return{next(){return {value, done: false}}}}

//Creating a range function in JS like Python
let range = (start, stop, stepper = 1) => {
    return {
        [Symbol.iterator]: () =>{
            start -= 1
            return {
                next(){
                    start += 1
                    return {
                        value: start,
                        done: start > stop
                    }
                }
            }
        }
    }
}

// Objects passed by reference
function incBy1(something){
    if(typeof something === 'number'){
        something++
        console.log(something)
    }else if(typeof something === 'object'){
        something.somenumber++
        console.log(something.somenumber)
    }
}

//Check if the objects are the same
originalObj = { x: 100 }

function checkObj(ref){
    console.log(ref === originalObj)
}

checkObj(originalObj)

// Generator functions
function *generatorFn(){ //*denotes genfunc and yield keyword can be used
    yield 10;
    yield 20;
    yield 30;
}
it = generatorFn()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function *genRange(start, stop, stepper = 1){
    for(let i = start; i<stop; i+=stepper){
        yield i;
    }
}
its = genRange(1,10)
console.log(its.next())
console.log([...its])