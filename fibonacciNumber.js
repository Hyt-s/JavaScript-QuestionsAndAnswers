// FIBONACCI NUMBERS:
// Create a function that, given a number, returns the corresponding Fibonacci number.
// Examples:
// fibonacci(7) ➞ 21
// fibonacci(12) ➞ 233


// 1. ANSWER:
// fibonacci_sequence = 1, 1, 2, 3, 5, 8, 13, 21, 34, ....

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    }else;
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(3))  // output: 3
console.log(fibonacci(7))  // output: 21
console.log(fibonacci(12))  // output: 233


// 2. ANSWER:

function fibonacci2(n) {
    let list = [];
    let total = 0;
    for (i=0, x=1, y=1; i <= n; i++) {
        list.push(x);  
        total = x+y  
        x = y  
        y = total  
    }
    return list[n]  
}
console.log(fibonacci2(3))  // output: 3
console.log(fibonacci2(7))  // output: 21
console.log(fibonacci2(12))  // output: 233


// 3. ANSWER

function fibonacci3(n) {
    list = []
    for (i=0; i<=n; i++) {
        i===0 || i===1 ? list.push(1) : list.push(list[i-1] + list[i-2])
    }
    return list[n]
}
console.log(fibonacci3(3))  // output: 3
console.log(fibonacci3(7))  // output: 21
console.log(fibonacci3(12))  // output: 233

