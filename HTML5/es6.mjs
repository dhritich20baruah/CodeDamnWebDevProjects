import { square, power4 } from './module2.mjs'
console.log(square(5));
console.log(power4(5));

// IMPORT EVERYTHING
import * as util from './module.mjs'
import { m2 } from "./module.mjs"
console.log(util.square(100))
