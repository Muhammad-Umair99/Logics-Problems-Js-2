//  1) Object Property Access
// • Question: Create an object named car with properties make, model, and year. How would
// you access and print the model of the car?

// const car = {
//     name : "Toyota",
//     model : "Toyota Supra",
//     year: 2024,
// };
// console.log(car.model);


// 2) Array Iteration
// • Question: Given an array of numbers, write a for loop that prints each number in the array.

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// 3) Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the
// sum of all elements in the array.


// function numbers(arr){
//     let sum = 0
//     for(let val of arr){
//     sum = sum + val
//     }
//     return sum
//  }

//  let result = numbers([1,2,3,4,5,6]);
//  console.log(result);


// 4) Date Manipulation
// • Question: How would you create a new Date object in JavaScript and extract the current year
// from it?

// let date = new Date();

// console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() );

// console.log(date.getFullYear());




// 5) If-Else Statement
// • Question: Write a function that takes a number as an argument and returns "Positive" if the
// number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is  0.


// first)
// function integrs (numbers){
//     if(numbers < 0){
//         console.log("Negative");
//     }
//     else if(numbers > 0){
//         console.log("Positive");

//     }
//     else{
//         console.log("Zero")
//     }
//     
// }
// let res = integrs(0)
// console.log(res);




//second)
// function integrs(number) {
//     if (number < 0) {
//         return "Negative";
//     } else if (number > 0) {
//         return "Positive";
//     } else {
//         return "Zero";
//     }
// }

// let res = integrs(5); 
// console.log(res); 



// 6) While Loop
// • Question: Write a while loop that prints numbers from 1 to 5.

// let num = 1;
// while(num <= 5){
//     console.log(num);
//     num++;
// };



// 7) Math Operations
// • Question: Write a function that calculates the square root of a number using JavaScript's
// Math object.

// function squareRoot(number) {
//     return Math.sqrt(number);
// }

// let result = squareRoot(5);
// console.log(result);



//8)
// calculates the square of the number. 

// function square(number) {
//     return number * number;
// }
// let res = square(5);
// console.log(res);




// 9) Array Filtering
// • Question: Write a function that takes an array of numbers and returns a new array
// containing only the even numbers.

// function evenNumbers(arr) {
//     let result = [];               // Initialize an empty array to store even numbers
//     for (let val of arr) {
//         if (val % 2 === 0) {
//             result.push(val);      // Add even number to the result array
//         }
//     }
//     return result
// };

// let res = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(res);




// 10) Function with Default Parameters
// • Question: Create a function that multiplies two numbers. If the second number is not
// provided, it should default to 10.


// const multiply = ( x , y = 10)=>{
//    return x * y
// };

// res1 = multiply(5,5);
// console.log(res1);

// res2 = multiply(5);
// console.log(res2);



