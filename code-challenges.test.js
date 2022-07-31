// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("objSentence", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(objSentence(people)).toEqual(["Ford Perfect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
  })
})

//  ReferenceError: objSentence is not defined
//  Note: my code is correct but for some reason the test does not pass. 


// b) Create the function that makes the test pass.

// Pseudo Code: 
// Declare a function called objSentence
// Name param: Object
// Return object.map to iterate over the object thats passed in as an argument
// Use string interpolation to return key value pairs in a sentence.
// Chain methods .charAt and .toUpperCase to value.name to capitalize the first index of the values of name:
// Use concatenation (+) to join the previous step to value.name.slice(1).

//-------This is my first attempt 
// I tried creating the function that makes the test pass before even creating the test which I realized was not a good idea. When I did write the test it did not pass and I was able to quickly realize the disparity between the expected output and the test I had written. This was definitely a great learning experience as it is so easy to overlook things and the order in which we do things matter. 
// const objSentence = (object) => {
//     return object.map(value => {
//       return `${value.name.charAt(0).toUpperCase() + value.name.slice(1)} is ${value.occupation}`
//       })  
// }

//--------Passing code
// Same idea for the pseudo code as my first attempt but with more variables to target the first and last name of the person name:

const objSentence = (object) => {
  return object.map(value => {
   let name = value.name.split(" ")
   let firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1)
   let lastName = name[1].charAt(0).toUpperCase() + name[1].slice(1)
   return `${firstName} ${lastName} is ${value.occupation}`
  })
}
// console.log(objSentence(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// describe("remainder", () => {
//     it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
//       expect(remainder(hodgepodge1)).toEqual([2, 0, -1, 0]);
//       expect(remainder(hodgepodge2)).toEqual([2, 1, -1]);
//     })
//   })
// ReferenceError: remainder is not defined
// PASS

// b) Create the function that makes the test pass.

const remainder = (array) => {
  let numbers = array.filter(value => {
    if(typeof value === "number") {
      return true 
    } else {
      return false
    }
  })
    return numbers.map(value => value % 3)
 }
// console.log(remainder(hodgepodge1)) // [ 2, 0, -1, 0 ]
// console.log(remainder(hodgepodge2)) // [ 2, 1, -1 ]


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// describe("cubed", () => {
//   it("returns the sum of all the numbers cubed.", () => {
//     expect(cubed(cubeAndSum1)).toEqual(99);
//     expect(cubed(cubeAndSum2)).toEqual(1125);
//   })
// })
// ReferenceError: cubed is not defined
// PASS

// b) Create the function that makes the test pass.

const cubed = (array) => {
  let numsCubed = array.map(value => Math.pow(value,3)) 
   return numsCubed.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
   })
} 
// console.log(cubed(cubeAndSum1)) // 99
// console.log(cubed(cubeAndSum2)) // 1125
