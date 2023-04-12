// Destructuring
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1, ...arr2] //OP [1,2,3,4,5,6]
let arr4 = [...arr1, arr2] //OP [1,2,3,[3,4,5]]

const key = 'keyname'
const obj1 = [{
    name: "delta",
    key // value of key will be taken from line 8
}]

const obj2 = [{
    name: "echo",
    age: 34
}]

const obj3 = [...obj1, ...obj2] //OP [{"name": "delta", "key":"keyname"}, {"name": "echo", "age": 34}] an array of objects

//A new obj with properties of both the objects
const obj4 = {
    ...obj1,
    ...obj2
} //OP {"name": "echo", "age": 34} if both the obj have same value then the obj that is destructured at the last will be given more weightage.

// ARROW FUNCTIONS
console.log(regular()) // this will work because this will be hoisted to the top
function regular(){
    console.log('hello')
}
//regular function are hoisted to the top arrow funcitons to the top

// console.log(arrfunc())//will not work as the function is defined below the function call. Arrow function should be called after initialization.

const arrfunc = () =>{
    return "Hello Arrow!"
}
console.log(arrfunc())

const arrfunc2= (arg)=> arg**2//brackets can be removed if there is only one argument.
console.log(arrfunc2(100))

const promiseObject = fetch('/data.json');

promiseObject.then(response => {
    const promiseObject2 = response.json()
    promiseObject2.then(data => {
        console.log(data)
    })
})

// MAP REDUCE FILTER FIND
const arr = [1,2,3,4,5,6,7,8]

const newMappedArray = arr.map(function(element){
    console.log(element)
    return element ** 2
})
const newarr = arr.map(element => element ** 2)

const filteredArr = arr.filter(element => element > 5) // returns a boolean value
console.log(arr, newMappedArray, filteredArr, newarr)

const objectarr = [{
    name: "delta",
    age: 33
},
    {
    name: "echo",
    age: 34
}]

const findX = objectarr.find(el => el.name === 'echo')

console.log(findX)

objectarr.forEach(elem => {
    console.log(elem)
})