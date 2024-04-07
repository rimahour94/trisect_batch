// data types
// initialization
// functions
// scoping

//  data types
//  integer  --- 3,4,5,6,7
//  double   --- 4.233335,5.4444446
//  float    --- 4.5,7.8
//  string   --- "tanya",'amit',`Trisect`,"234"
//  array    --- [3,"ritesh",6.777,5.6, ]
//  object   --- { key:"value",key1:"value1" }
//  undefined  --- vatiable declared but not initialized
//  boolean   --- true/false

// let,var and const

let a = 34;
//  you can change the value of the variable
a = "TRISECT";
// you can not redeclare the variable
// let a=90

console.log(a, "let");

const b = "constData";
// you can not change the data of the variable
//b=345  // not allowed
// you can not redeclare the variable
// const b=566

var c = "GOOGLE";
// you can change the value of the variable
c = "Facebook";
// you can redeclare the variable but only with var keyword
var c = 45;

console.log(c, "var");

// functions
/// regular function
function addition(num1, num2) {
  // let num1=90
  // let num2=10

  //  sum is in local scope
  let sum = num1 + num2;
  return sum;
  //    console.log(sum,"function")
}

//console.log(sum);   // error sum is not defined

// call function
let ritesh = addition(3, 4); // ritesh
let tanya = addition(2, 3); // Tanya
const abhi = addition(7, 8); // abhi
const aman = addition(10, 20); // aman
var raman = addition(80, 90); // raman

console.log(ritesh, tanya, abhi, aman, raman);

//  arrow function
// ES6
let multiply = (num1, num2) => num1 * num2;

const v1 = multiply(2, 3);
console.log(v1);

// let var and const all three keywords have function scope, means if you defined the variable in the function then you can not access that variable outside the function
// let and const both are block scope means variable defined by const and let can not access outside the blocks
// var is not a block scope if you defined a variable inside the block you can also access the variable outside the block

// {
//   var num=90
// }
// console.log(num)

// if(true){

// }

// for(){

// }

