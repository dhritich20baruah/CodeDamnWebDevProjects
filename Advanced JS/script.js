const timer = document.querySelector('#timespan')

// setInterval(()=>{
//     timer.innerText = new Date().toLocaleString()
// }, 1000)

function getMeAPromise(){
    return fetch('/data.json')
}

//First the above promise is pending then it is resolved
const promise = getMeAPromise()

console.log(promise)//Same thing

promise.then(result=>{
console.log(result)
})
//.then is a function which is called after the promise is resolved

//Promise is passed as a argument and .then a new result is returned
function fn(customPromise) {
	return customPromise.then(result=>{
        return result + 1
    })
}

//catch
promise.then((data)=>{
    console.log('Got some data')
}).catch((error)=>{
    console.log('Promise failed', error)
})

//Nesting promises
// promise.then((data)=>{ //first promise resolve returns a object
//     data.json().then(data2=>{ //second promise retunr the parsed data
//         console.log(data2)
//     })
// })

//the code is a call back hell. Below is better structured
promise.then(data=>{
    return data.json()
}).then(data2=>{
    console.log(data2)
})

function getMeANewPromise(){
    return fetch('/data.json')
}
const promise2 = getMeANewPromise()

promise.then(data=>{
    console.log("passed1")//will execute
}).then(data2=>{
    console.log("passed2")//will execute
    throw new Error('first error')//error will be thrown
}).then(data2=>{
    console.log("passed3")//will not execute
}).catch(error=>{
    console.log("error Found")//error will be resolved
}).then(data2=>{
    console.log("passed4")//will execute
})

//To preserve the continuity of the code you should nest a .catch after every .then.

//Converting callbacks to promises
setTimeout(()=>{
    timer.innerText = 'Hello there:'
}, 1000)

function promiseSetTimeout2(){
    function fn(resolve, reject){
        resolve()        //this block of code is a callback function
        reject()
    }
    return new Promise(fn)//syntax for a new promise
}

function promiseSetTimeout(){
    return new Promise((resolve, reject)=>{ //Same as the above block of code
        setTimeout(()=>{
            timer.innerText = 'Hello there:'
            resolve()
            reject()//will be executed what ever is executed first
        }, 1000)
    })
}

promiseSetTimeout().then(()=>{
    console.log('Text displayed')
})

function promise4(){
    return Promise.resolve(100)//or Promise.reject(100)
}

promise4().then((res)=>{
    console.log("Text to screen", res)
}).catch((res)=>{
    console.log("Error", res)
})

// Async and Await
async function boot(){
    const fn1 = promiseSetTimeout()
    console.log('statement1', fn1)

    await fn1

    const fn2 = Promise.resolve(true)
    console.log(fn2)

    const data2 = await promiseSetTimeout()
    console.log('statement2')
}

boot()

//error
async function fetchAll(){
    try{
        const req1 = await fetch('/data.json')
        console.log("it works")
    }catch(error){
        console.log('Something went wrong', error)
    }
}
fetchAll()
//the error will be logged after running the codes that come after it 
//if not asynced then the code will terminate as soon as it gets to the error
async function promise1(){
    throw new Error('wow')
}

promise1()
console.log('Still works!')

//promise.all
async function fetchall2(){
    const req1 = fetch('/data.json')
    const data1 = await req1.json()

    const req2 = fetch('/data.json')
    const data2 = await req2.json()

    const req3 = fetch('/data.json')
    const data3 = await req3.json()

    console.log(data1, data2, data3)
}

//promise.all built in command
async function fetchall2(){
    const req1 = await fetch('/data.json')
    const data1 = await req1.json()

    const req2 = await fetch('/data.json')
    const data2 = await req2.json()

    const req3 = await fetch('/data.json')
    const data3 = await req3.json()

    console.log(data1, data2, data3)
}

fetchall2()

async function fetchall3(){
    const req1 = fetch('/data.json')

    const req2 = fetch('/data.json')

    const req3 = fetch('/data.json')

    const promise = Promise.all([req1, req2, req3])
    const responses = await promise

    const json = await Promise.all(responses.map(t => t.json()))
    console.log(json)
}

fetchall3()

// Promise.all
// Let’s try Promise.all. In the function on right, your job is to resolve all the promises and multiply their resolved values by 2. Make sure you use Promsie.all for this as number of promises passed could be variable

async function fn(...promises) {
	// resolve them all
	// add one to all of them
    return Promise.all([...promises]).then((num)=>num.map(result=> result*2))
}

// Promise.allSettled
async function fetchall4(){
    const req1 = fetch('/data2.json')

    const req2 = fetch('/data4.json')

    const req3 = fetch('/data3.json')

    const promise = Promise.allSettled([req1, req2, req3])
    try{
        const responses = await promise
        console.log(responses)        
        
        const successRequests = responses.filter(response=>{
            return response.status === " fulfilled"
        }).map(response => response.value)

        const json = await Promise.all(successRequests.map(t => t.json()))
    console.log(json)
    } catch(error){
        console.log('Something went wrong', error)
    }
}

fetchall4()
//Promise.allSettled
// Let’s try Promise.allSettled. In the function on right, your job is to resolve all the promises and multiply their resolved values by 2. Make sure you use Promsie.allSettled for this as number of promises passed could be variable.

// Also, make sure, if a promise “fails”, you return null value for that.
async function fn(...promises) {
	// resolve them all
	// add one to all of them
    let respon = await Promise.allSettled(promises)
    return respon.map(item=>{
        if(item.status === 'fulfilled'){
            return item.value*2;
            }else{
                return null;
            }

    })
}

//Prototype
const a = {
    prop1: 10
}
const b = {
    prop2: 10
}
const c = {
    prop3: 10
}
const d = {
    prop4: 10
}

d.__proto__= c
c.__proto__= b
b.__proto__= a

console.log(d.__proto__ === Object.getPrototypeOf(d)) //returns true
//Create an object without prototypal chain
x.__proto__ = null

const f = Object.create(a) //creates an object that has null prototype

const s = {
    method1(){
        return "Hello World."
    }
}
const t = {
    method2(){
        return "Hello World."
    }
}

Object.setPrototypeOf(a,b)
console.log(a.method2())

//FUNCTIONAL PROTOTYPE CHAIN
function Car(){
    this.fuel = 100;
    this.wheels = 4;
}

Car.prototype.type = 'Vehicle'//Adds a new property called type to function car and whenever this function is initiallised like it is done on obj and obj2 the property type gets added to it.

const obj = new Car() // If you don't write this all the above values this.fuel and wheels are assigned to the window.
const obj2 = new Car()

Car.prototype.addFuel = function(amount){
    this.fuel += amount
}

console.log(obj.addFuel(100))

//Delete and hasOwnProperty
const object = {
    prop1: 100
}
const object2 = {
    prop1: undefined,
    prop2: 300,
    prop4: 400
}
object2.__proto__ = object; //object2 builds on top of object1 although both contains the same prop object2.prop1 will still be undefined. 
console.log(object2.hasOwnProperty(prop1)) //returns False because it inherits it from obj
console.log(object2.hasOwnProperty(prop2)) //returns True
delete object2.prop4 // deletes the property

// TEST
function addOrDeleteProp(object, propertyName) {
	if(object.hasOwnProperty(propertyName)){
    delete object[propertyName]
    }else if(!object.hasOwnProperty(propertyName)){
    object.propertyName = "objects are cool"
}
    return object
}

const obj1 = {
    prop1: 100,
    prop2: 200
}
addOrDeleteProp(obj1, 'prop4')

console.log(obj1)

// DOM
const button =document.querySelector('#btn')
const remove = document.querySelector('#remove-btn')
//root ->child1, child2
//child1 -> child11, child12
const h1 = document.createElement('h1')

h1.innerText = 'Wow this is so magical'

button.onclick = () =>{
    document.body.appendChild(h1)// appendchild only works on HTML nodes i.e. it only accepts document.query or document.createelement and is older
    // document.body.append(h1)// works with text nodes
    // document.body.prepend(h1, 'hello')
}

remove.onclick = () =>{
    setTimeout(()=>{
        h1.remove()
    }, 1000)
}

//Add event listener
const eventbtn = document.getElementById("event-btn")
const eventdiv = document.getElementById("event-div")
const eventbtn2 = document.getElementById("event-remove")

eventbtn.addEventListener('click', clickHandler5, true)
// once: true // to fire it only once.

// eventbtn.addEventListener('click', clickHandler6)
eventbtn2.addEventListener('click', stopListener)


function clickHandler5(){
    eventdiv.innerText = "Your one time random number: " + Math.random()
}

function stopListener(){
    eventbtn.removeEventListener('click', clickHandler5, true)
}

function clickHandler6(){
    alert('Hello')
}

// BUBBLING
const btnbub = document.getElementById("bubblebtn")
const div = document.getElementById("something")

btnbubble.addEventListener('click', clickHandler, true)//addEventListener takes three arguments the third is a boolean by default it is false meaning bubbling if it is true then it will be event capturing
div.addEventListener('click', clickHandler2, {
    capture: false,
    once: true
})//Third argument boolean
document.body.addEventListener('click', clickHandler3)
document.querySelector('html').addEventListener('click', clickHandler4)

function clickHandler2(){
    alert('From div')
}
function clickHandler3(event){
    event.preventDefault()
    alert('From body')
}
function clickHandler4(event){
    event.stopPropagation()
    alert('From html')
}
function clickHandler(){
    alert('From button')
}