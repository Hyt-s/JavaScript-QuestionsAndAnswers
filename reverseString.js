//REVERSE STRING:
// Write a function that takes an array of characters and reverses the letters in place.
// Examples:
// reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
// reverse("Happy") ➞ yppaH

//1. ANSWER
function reverse(text) {
    reversed = ''
    for (i=text.length-1; i>=0; i--) {
        reversed += text[i]
    }
    return reversed
}
console.log(reverse('Clarusway Rocks!'))  // output: !skcoR yawsuralC
console.log(reverse('Happy'))  // output: yppaH


//2. ANSWER

function reverse2(text) {
    for (var i = 0, reversed = ''; i < text.length; i++) {
        reversed =  text[i] + reversed  //pay attention to the order
    }
    return reversed
}
console.log(reverse2('Clarusway Rocks!'))  // output: !skcoR yawsuralC
console.log(reverse2('Happy'))  // output: yppaH

