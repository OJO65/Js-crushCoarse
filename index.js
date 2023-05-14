console.log('hello world!');
//alert('omera'); how to write a comment inline

//variables
let b = 'smoothie';
console.log(b);

let someNumber = 45;
console.log(someNumber);

//let age = prompt('what is your age?');

//document.getElementById('someText').innerHTML = age;

//numbers in Js
let num1 = 5.7;
//increment num1 by 1
num1++;

//decrement num1 by 1
num1--;
console.log(num1);

//divide, multiply *, remainder %
console.log(num1 % 6);

//increment/decrement by 2 or whatever number you want
num1 -= 2;
console.log(num1);

/*functions
1.create a function
2.call the function
*/
//create
function fun() {
    console.log('this is a function');
}
//call
fun();

/*this is a function that takes in a name
and says hello followed by your name

for example

Name: "Jeffrey"
Return: "Hello Jeffrey"
*/



/*function greeting(yourName) {
    
    let result = 'Hello' + ' ' + yourName;//string concatenation
    console.log(result);
}

//let name = prompt('what is your name?');
/*greeting(name);

//how do arguments work in funtions?
//how to add 2 numbers in a function

function sumNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

/*while loop

let num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/

//for loop
for (let num = 0; num < 100; num++) {
    console.log(num);
}
 //const declaration
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);

//using Js to change html attributes

onclick = "document.getElementById('myImage').src='bulbon.gif'";
onclick = "document.getElementById('myImage').src='bulboff.gif'";

/*using Js to change css

works inside the html index

using Js to hide html elements


works inside the html index

using Js to show hidden html elements


works inside the html index

/*you can place any number of scripts in an
html doc
*/

//Js in <head>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/*change in style, hidding elements were
Js in <body>
*/

//data types
let yourAge = 18; //number
let yourName = 'Jeffrey'; //string
let name =  {first: 'Dante', last: 'Mallowa'}; //object
let truth =false; //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing = null; //value null

//strings in Js
let fruit = 'banana, apple, orange, blackberry';
let moreFruits = 'banana\napple';  //new line

//common string operations
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', 'ojo'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit.split(',')); //split by comma
console.log(fruit.split('')); //split by character


//Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');
console.log(fruits[3]); //access value at index 3

fruits[0] = 'pear';
console.log(fruits);

for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

//Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

console.log(subarray);
console.log(nestedSubarray);
console.log(element);

//Manipulating Arrays with push method
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

//Manipulate Arrays with pop method
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//Manipulate Arrays with shift method
 const ourArray = ["stimpson", "J", ["cat"]];
 const removedFromOurArray = ourArray.shift();
 console.log(myArray);
 console.log(removedFromOurArray);

 //Manipulate Arrays with unshift method
 const isArray = ["stimpson", "J", "cat"];
 isArray.shift();
 isArray.unshift("Happy");
 console.log(isArray);

 //Passing values to functions with arguments
function testFun(param1, param2) {
    console.log(param1, param2);
}
testFun("Hello", "world");

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}
functionWithArgs(7, 9);

//Return a value from a function with return

function timesFive(num) {
    return num * 5;
}
const result = timesFive(4);
console.log(result);

//Global scope and functions
let myGlobal = 10; //declared a global variable outside a function & initialized it with 10
function fun1() {
    oopsGlobal = 5; //inside the function fun1, assigned 5 to oopsGlobal
}
fun1();
console.log(myGlobal);
console.log(oopsGlobal);