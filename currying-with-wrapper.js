/*How do we write a wrapper function curry which accepts a function say func and returns the curried version of func.**/
function multiply(a, b, c) {
    return a*b*c;
}

function add(a, b, c) {
    return a+b+c;
}
function curry(func) {
    function curried(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function(...more) {
                return curried(...args,...more);
            }
        }
    }
    return curried;
}

// To get the curried version of multiply we pass it to our above curry function.
let curriedMul = curry(multiply);
console.log(curriedMul(2)(3)(4)); // 24
console.log(curriedMul(2,3)(4));  // 24
console.log(curriedMul(2,3,4));  // 24
console.log(curriedMul(5)(6,7)); // 210
// To get the curried version of add we pass it to our above curry function.
let curriedAdd = curry(add);
console.log(curriedAdd(2)(3)(4)); // 24
console.log(curriedAdd(2,3)(4));  // 24
console.log(curriedAdd(2,3,4));  // 24
console.log(curriedAdd(5)(6,7)); // 210