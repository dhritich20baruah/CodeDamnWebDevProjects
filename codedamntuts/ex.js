
// var today= new Date();
//  var hourNow = today.getHours(); 
//  var greeting; 
// if (hourNow > 18) 
//   { greeting= 'Good evening!';} 
// else if (hourNow > 12) 
//   { greeting = ' Good afternoon!'; }
// else if (hourNow > 0) 
//   { greeting = 'Good morni ng!'; }
// else { greeting = 'Welcome! ' ; }
// document .write( ' <h3>' +greeting + ' </ h3>'); 



// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   // change code below this line
//  const resultDisplayArray = arr.map(num => `<li class="text-warning">${num}</li>`);
//   // change code above this line

//   return resultDisplayArray;
// }
// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]
//  **/
// const resultDisplayArray = makeList(result.failure);


var myObject ={
  foo: "bar",
  func: function(){
    var self = this;
    console.log("outer func: this.foo =" + this.foo);
    console.log("outer func: self.foo =" + self.foo);
    (function(){
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
      // In the inner function this is out of scope but self remains within scope.
      (function(){
        console.log("inner func: this.foo = " + this.foo);
        console.log("inner func: self.foo = " + self.foo);
      }())
    }());
  }
};
myObject.func();

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1())
console.log(foo2())

console.log(0.1+0.2);
console.log(0.1 + 0.2 == 0.3);

// COUNTER@@@@@@@@@@@@@@@@@@@
const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const counterEl = document.getElementById('counter')
const ulElement =document.getElementById('list-items')
let counter = 0

// function incrementCounter(){
//   const counterEl = document.getElementById('counter')
//   counter++  
//   if(counter<=10){
//   counterEl.innerText = counter

//   //create an element
//   const li = document.createElement('li')
//   // li.innerHTML = '<b>Sentence</b>' + counter
//   const b = document.createElement('b')

//   const textNode = document.createTextNode('Sentence ')
//   b.appendChild(textNode)

//   const textNode2 = document.createTextNode(counter)
//   li.appendChild(b)
//   li.appendChild(textNode2)

//   //append that element
//   ulElement.appendChild(li)
//   }
// }
function incrementCounter(){
  counter++
  counterEl.innerText = counter
  //create an element
  const li = document.createElement('li')
  li.setAttribute('data-counter', counter)
  li.innerHTML = '<b>Sentence</b>' + counter
  //append that element
  ulElement.appendChild(li)
}

function decrementCounter(){
  const li = ulElement.querySelector('[data-counter="'+counter+'"]')
  const number = parseInt(li.getAttribute('data-counter'),10)
  if(number%2===0){
    li.remove()
  }
  counter--
  counterEl.innerText = counter
}

incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)
