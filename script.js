//Question-1 : Array Manipulation
let givenArray = [-2, 5, 3, -8, 10, -4];

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i]
        }
    }
    return total;
}

console.log("sum", sum(givenArray));

//************************************************************************************************************** */

//Question-2 : Object Manipulation

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 92 },
    { name: "David", score: 75 }
]

function segregate(arr, val) {
    const newAns = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score > val) {
            // return arr[i]
            newAns.push(arr[i])
        }
    }
    return newAns


}

console.log("segregate", segregate(students, 70));
//*************************************************************************************************************** */

//Question-3 : Sorting number in ascending order, without using array.sort().First convert number to array

let numbers = 8046957321;

let arrFormed = Array.from(String(numbers))
// console.log('arrFormed: ', arrFormed);


for (let i = 0; i < arrFormed.length; i++) {
    for (let j = 0; j < (arrFormed.length - i - 1); j++) {
        if (arrFormed[j] > arrFormed[j + 1]) {
            var value = arrFormed[j]
            arrFormed[j] = arrFormed[j + 1]
            arrFormed[j + 1] = value
        }
    }
}
console.log("arrFormed", arrFormed);


//************************************************************************************************************** */

//Qusetion-4 : Asynchronous Programming and Error Handling

let dataArray = [];

let fetchingData = async () => {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        let parsedData = await data.json();

        // console.log(parsedData);
        let fetchedData = [];
        for (let i = 0; i < 5; i++) {
            let ans = parsedData[i].title
            fetchedData.push(ans)
        }
        console.log("fetchedData", fetchedData);
    } catch (error) {
        console.log("Unable to fetch the data");
    }
}
fetchingData();

//*************************************************************************************************************** */

//Question-5 : ES6 Features

/* Difference between var, let and const in javascript 

var- 1. Decleration of var is globally scoped.
     2. Can be updated and redeclared within scope.
     3.Can be declared without initialized.
let- 1. Decleration of let is blocked scoped.
     2. Can be updated but not re-Declared.
     3. Can be declared without initialized.
const- 1. Decleration of const is blocked scoped.
       2.Can neither be updated nor re-Declared.
       3.Cannot be declared without initialized.
*/

//Point-- While using the function the scope of var let and const is function scope, i.e you cannot access their values
//        function directly.

//Example 

function Hello() {
    var a = "Hey Whats up"    //Here you can use any i.e var, let and const
}

// console.log(a);


//var example
//Exapmple-1
{
    var x = 0;
}

// console.log(x);   //Here we can access the value of the x, because var is globally scoped

//let example
//Exapmple-1
{
    let y = 0;
}

// console.log(y);    //Here you cannot access the value of the y, because let is blocked scope.
console.log(a);
const a = 5;

//const example
//Exapmple-1
{
    const z = 0;
}

// console.log(z);  //Here you cannot access the value of the z, because const is blocked scope.


