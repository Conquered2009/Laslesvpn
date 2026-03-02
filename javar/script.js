// declare
function greetCustomer(customername, bankname) {
    console.log(`Merry christmas to you ${customername}, ${bankname}`)
}
greetCustomer("james", 'Opay')
greetCustomer("paul", 'United Bank')
greetCustomer("daniel", 'Fidelity')


function sum(num1, num2) {
    console.log(num1 / num2)
    return num1 + num2
}
//console.log(num1 + num2)
console.log(sum(5, 4))


function convertAudToUsd(Usd) {
    return (Usd * 1.5)
}
console.log(convertAudToUsd(2000000000))



//




product();


function product() {
    let num1 = 5
    let num2 = 10
    let result = num1 * num2
    console.log(result)
}

//funtion expression
// let showText = function () {
//     console.log("hello customer!")
//     return "hello customer!"
// }
// console.log(showText())

// // showText() is different from showText.
// let newText = showText; // it storing the function called showText in a variable called newText.

// console.log(newText());

// let oldText = showText();  // execute the function called showText() and assign the return value to a variable called oldText.








// function expression
    let showText = function() {
        console.log("hello customer!")
        return "hello customer!"
    }
    console.log(showText());

    // showText() is different from showText.
    let newText = showText; // it storing the function called showText in a variable called newText.
    console.log(newText);
    c
