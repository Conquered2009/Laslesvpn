// function displayI() {
//     document.getElementById("fname").innerHTML = "Conquered";
//     document.getElementById("lname").innerHTML = "Ngbede";
// }
// // garbbing and storing the HTML elements in a varialbe
// let h1Elem = document.getElementById("h1text");
// let h2Elem = document.getElementById("h2text");


// h1Elem.innerHTML = "My blog title";
// h1Elem.style.color =  "Blue";

// h2Elem.innerHTML = "The Kidnapping Pandemic";

// // grab input element
// let inputfN = document.getElementById("firstName").value;
// let inputlN = document.getElementById("lastName").value;
// let spanElem = document.getElementById("showFN").value;

// console.log(inputFN);
// console.log(inputFN);

// spanElem.style.color = "red";
// spanElem.style.fontweight= "900";
// // let newLNValue = inputFN.value;
// // let newLNValue = inputLN.value;

// function displayFullName() {
//     let fullName = inputFN.value +" "+ inputLN.value;
//     spanElem.innerHTML = fullName;
// }


// function displayIN() {
//     document.getElementById("Inumber").innerHTML = "Conquered";
//     document.getElementById("Inumber").innerHTML = "Ngbede";
// }
// // garbbing and storing the HTML elements in a varialbe
// let h1Elem = document.getElementById("h1text");
// let h2Elem = document.getElementById("h2text");


// h1Elem.innerHTML = "My blog title";
// h1Elem.style.color =  "Blue";

// h2Elem.innerHTML = "The Kidnapping Pandemic";

// // grab input element
// let inputIN = document.getElementById("firstName").value;
// let inputIN = document.getElementById("lastName").value;
// let spanElem = document.getElementById("showFN").value;

// console.log(inputFN);
// console.log(inputFN);

// spanElem.style.color = "red";
// spanElem.style.fontweight= "900";
// // let newLNValue = inputFN.value;
// // let newLNValue = inputLN.value;

// function displayFullName() {
//     let fullName = inputFN.value +" "+ inputLN.value;
//     spanElem.innerHTML = fullName;
// }

// ler



let h1Elem = document.getElementById("h1text");
let h2Elem = document.getElementById("h2text");


// grabbing and storing the HTML elements in a variable
h1Elem.innerHTML = "My Blog Title";
h1Elem.style.color = "blue";
h1Elem.style.textAlign = "center";

h2Elem.innerHTML = "The Kidnapping Pandemic!";
"900";

// grab input elements

let inputFN = document.getElementById("firstName");
let inputLN = document.getElementById("lastName");
let spanElem = document.getElementById("showFN");

spanElem.style.color = "blue";
spanElem.style.fontWeight = 900;

function displayFullName() {
    let fullName = inputFN.value + " " + inputLN.value;
    spanElem.innerHTML = fullName;
}

// grab number elements

let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let spanNum = document.getElementById("numResult");

function displayResult() {
    let Enter= Number(number1.value) + Number(number2.value);
    spanNum.innerHTML = Enter
};


let x = 16 + "Volvo";
console.log(x);

let y = 16 + 4 + "Volvo";
console.log(y);

let w ="volvo" + 16 + 4;
console.log(w);


// Non-Primitive data types (compound) - object

// object
const person = {
    firstName: "John,",
    lastName: "Doe",
    age: 40,
    eyeColor: "blue",
    residence: "Port Harcourt"
};

// Array object
 const cars = ["Saaab", "Volvo","BMW"];



 //  Arithemeic Operators

 // addition+
 let numb = 45 + 34;

 let z = 100 - numb;

 let r = z * 3;
console.log(r); 

 let div = 48 / 4;

 console.log(div);


 //modulus ()

 let newResult = numb % 2;

 console.log(newResult)

 let newR = 7 % 2;

 console.log(newR);

 //comparison operators 
 // Comparism Operator



 let gh = "5";
 console.log(gh);

 gh === 5; // "5"===5

 console.log (gh === 5);
 
 gh != 5; // "5" === 5

 console.log(gh != 5)

 let text1 = "resultA"
 let text2 = "resultB"
 let result = text1 < text2;

 console.log(result)

 let textB = "BE"
 let textA = "BA"
 let answer = text1 < text2;

 console.log(answer)

 //Conditionals

 
 // if statement
 
 let gender = prompt("select ")