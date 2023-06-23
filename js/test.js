// // function sayHello(firstName, gender) {
// //     gender === "male" ? console.log(`hello Mr ${firstName}`) : console.log(`hello Mrs ${firstName}`);
// // }
// // sayHello = (firstName, gender) => gender === "male" ? console.log(`hello Mr ${firstName}`) :
// //     gender === "female" ? console.log(`hello Miss ${firstName}`) : console.log(`hello  ${firstName}`);

// // sayHello("alaa", "male")
// // sayHello("alaa", "female")
// // sayHello("alaa")
// ///////////////////////////////////
// function calculate(firstNum, secondNum, operation = "add") {
//     // Your Code Here
//     if (operation === "add" && typeof firstNum == "number" && typeof secondNum == "number") {
//         console.log(`${firstNum + secondNum}`);
//     } else if (operation === 'subtract') {
//         console.log(`${firstNum - secondNum}`);
//     } else if (operation === 'multiply') {
//         console.log(`${firstNum * secondNum}`);
//     } if (typeof firstNum === typeof +Number && secondNum == undefined) {
//         console.log("second Number Not Found")
//     } if (firstNum == undefined && secondNum == undefined) {
//         console.log("There's No Numbers")
//     }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600
// //////////////////////
// // Assignmen - 4

// function checkStatus(a, b, c) {
//     let name = [a, b, c];
//     for (let i = 0; i < name.length; i++) {
//         if (typeof name[i] === "string") {
//             a = name[i];
//         } if (typeof name[i] === "number") {
//             b = name[i]
//         } else if (typeof name[i] === "boolean") {
//             c = name[i];
//             if (c === true) {
//                 c = "You Are Available For Hire"
//             } else {
//                 c = "You Are Not Available ForHire"
//             }
//         }
//     }
//     console.log(`Hello ${a}, Your Age Is ${b}, ${c}`)
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// //////////////////////
// function createSelectBox(startYear, endYear) {
//     // Your Code Here
//     document.write('<select>')
//     for (let i = startYear; i <= endYear; i++) {
//         document.write(`<option value= ${i}>${i}</option>`);
//     }
//     document.write('</select>')

// }
// createSelectBox(2000, 2021);

// function multiply(...numbers) {
//     let result = 1;
//     for (let i = 0; i <= numbers.length; i++) {
//         if (typeof numbers[i] === "number") {

//             if (parseFloat(numbers[i])) {
//                 numbers[i] = parseInt(numbers[i])
//             }
//             result *= numbers[i]
//         } else {
//             continue
//         }
//     }
//     console.log(result);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); //