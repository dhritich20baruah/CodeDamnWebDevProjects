// function square(num){
//     return num ** 2
// }

// function new_cube(num){
//     return num ** 3
// }
// module.exports = {square}; commonJS
// 1 default expor tper module
// export default square //ES6

// export multiple 
// export {
//     square,
//     new_cube as cube
// }

export function square(num){
    return num ** 2
}

export function cube(num){
    return num ** 3
}