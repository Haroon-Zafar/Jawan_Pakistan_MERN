// var a = {
//         mobiles: {
//         samsung: {
//             a30: {
//             name: "a30",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 2000,
//             },
//             note10: {
//             name: "note10",
//             ram: "6gb",
//             rom: "128gb",
//             camera: "50px",
//             price: 4000,
//             },
//             s10: {
//             name: "s10",
//             ram: "3gb",
//             rom: "128gb",
//             camera: "10px",
//             price: 5000,
//             },
//         },
//         iphone: {
//             iphone4: {
//             name: "iphone4",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 10000,
//             },
//             iphone4s: {
//             name: "iphone4s",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 20000,
//             },
//             iphone5: {
//             name: "iphone5",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 30000,
//             },
//             iphone6: {
//             name: "iphone6",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 30000,
//             },
//         },
//         xiomi: {
//             redminote10: {
//             name: "redminote10",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 10000,
//             },
//             redminote11: {
//             name: "redminote11",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 10000,
//             },
//             redmi10: {
//             name: "redmi10",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 10000,
//             },
//             redmi10pro: {
//             name: "redmi10pro",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 10000,
//             },
//         },
//         oppo: {
//             a3s: {
//             name: "a3s",
//             ram: "4gb",
//             rom: "64gb",
//             camera: "50px",
//             price: 10000,
//             },
//         },
//         },
//     };

//     // console.log(a.mobiles[][]);

//     var brand = document.getElementById("brand");
//     var pName = document.getElementById("name");

// function search(){
//     var obj = a.mobiles[brand.value][pName.value]
// console.log(obj);

// }

// var arr = [0, null, undefined, 1, -1, false, true, [], {}, ''];


// //  TASK # 01
// //  Counting Number of 1's in an array
// var arr = [1,123,22,31,4,57,8,3,1,23,22,100,1001,1110100101,123123,098123,0,0,1,1,1,1,1,1,1,1,0,0,0,0]
// var count = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == 1){
//         count ++;
//     }
// };

// console.log(count);


// // TASK # 02 
// // Getting the maximum number of the array. 

// var arr = [1,2,5,9,10,12,100,11]
// var maxNum = 0;

// for (let i = 0; i < (arr.length-1); i++){
//     if (arr[i] >= arr[i+1]){
//         // console.log(arr[i], arr[i+1]);
//         maxNum = arr[i];
//     }
// };

// console.log("Maximum Number",maxNum);



// ASSIGNMENT : PASS BY VALUE , PASS BY REFERENCE 

// 1st Most Important Difference 
// Primitive Data Types ( Number, Boolean, String, Undefined, null ) : which are passed by value
// Non-Primitive Data Types ( Objects and arrays ) : which are passed by reference


// PASS BY VALUE EXAMPLE 

// let firstVariable = 5;

// // firstVariable's value is passed into secondVariable

// let secondVariable = firstVariable;
// // both variables are independent of each other

// // console.log(firstVariable); // 5
// // console.log(secondVariable); // 5

// // secondVariable = firstVariable + 5;

// // console.log(firstVariable); // 5
// // console.log(secondVariable); // 10


// // PASS BY REFERENCE EXAMPLE 

// let obj1 = {
//     name: "Ali",
//     password: "123"
// }

// // obj1's value is passed into obj2

// let obj2 = obj1;

// // console.log(obj1); // {name: "Ali", password: "123"}
// // console.log(obj2); // {name: "Ali", password: "123"}

// // If we want to change the password using obj2

// obj2.password = "easypeasy";

// console.log(obj1); // {name: "Ali", password: "easypeasy"}
// console.log(obj2); // {name: "Ali", password: "easypeasy"}

// Both obj1 and obj2 are changed because they are passed by reference
// Object is a container which holds the data in key value pairs
// obj1 is a reference 
// obj2 is another reference 
// if we change the contents of the container using any of the reference it will effect all the references accessing the contents of that container. 





//  ########################## CLASS # 02 ##########################


// ECMA SCRIPT 6

// ECMA stands for European Computer Manufacturers Association
// ECMA Script 6 is the latest version of JavaScript

// ES6 is a standard for JavaScript
// ES6 was launched in 2016 
// we study it because in this release we got so many major updates which solved many problems of developers
// ES6 is also known as ECMAScript 2015
// Our code will get shorter and shorter alongside getting advanced and professional

// CODE MUST BE EFFICEINT AND READABLE


// var , let , const
// var is a keyword which is used to declare a variable
// let is a keyword which is used to declare a variable
// const is a keyword which is used to declare a variable

// difference between var , let and const
// var is a function scoped variable
// let and const are block scoped variables

// FUNCTION SCOPE : When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

// Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop

// var is re-declarable
// let and const are not re-declarable

// var a = "ABC";

// var a = 123;

// console.log(a); // 123


// SINCE let can not be re-declared
// let b = "ABC";
// let b = 123; // Uncaught SyntaxError: Identifier 'b' has already been declared

// // const can not be re-declared
// const c = "ABC";
// const c = 123; // Uncaught SyntaxError: Identifier 'c' has already been declared


// var IS REASSIGNABLE
// var a = "ABC";

// // Reassigning the value of a
// a = 123;

// console.log("Reassigned Value", a); // 123


// let is reassignable

// let a = "ABC";
// a = 123;
// console.log(a); // 123


// const is not reassignable
// const a = "ABC";
// a = 123; // Uncaught TypeError: Assignment to constant variable.

// WHAT's a SCOPE ?
// SCOPE is the area where a variable is accessible
// scope : inside CURLY BRACKETS and it is dependent on some condition. 


// THERE ARE TWO TYPES OF SCOPES :
// 1. GLOBAL SCOPE  
// 2. LOCAL SCOPE 

// 1. Global Scope : variables which are declared outside of any function and can be accessed globally


// EXAMPLE OF GLOBAL SCOPE 

// if (true){
//     var a = "ABC";
// }

// // Since var is a global declaration keyword, so it even inside a BLOCK ( if-else, loops body) it will be accessible by any one calling the variable

// console.log(a);


// EXAMPLE OF BLOCK SCOPE USING let, const
// if (true){
//     let a = "ABC";
// }


// console.log(a); // Uncaught Reference error


// function abc(){
//     var a = "ABC" ;

// }

// abc();
// console.log(a); // Uncaught Reference

// why ? because even if we are using var we are not getting the value of the variable


// var 

// function 

// Hoisting : Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 

// console.log(a); // Undefined
// var a = "Abc";


// variable's memory is allocated once the program is instantiated i.e variable is declared but it is not getting the value for now.


// console.log(a); // Uncaught Reference
// let a = "Abc";


// abc();
// console.log(a); // Uncaught Reference Error
// var comes out of IF-ELSE but can't come out of function
// because whole function is hoisted and nothing inside of the function code is read by the compiler at the moment. 

// // This solved the debate of BLOCK AND GLOBAL SCOPE.
// function abc(){
//     var a = "123";
//     console.log("abc");
// }

// >> abc 

// JAVASCRIPT IS FIRST READ THEN RUN ACCORDING TO THE TAGS OF THE HTML

// WE DONOT USE `var` IN PROFESSIONAL CODE BECAUSE IT CAN BE RE-DECLARED AND HOISTING ISSUE.




// Use of ` Back Ticks.

// var num = 3 ;
// var a = `My Name is ${num}`;

// console.log(a); // My Name is 3



// if (marks < 70 ){
    
    //     console.log("A Grade");
    // }
    // else{
        //     console.log("C Grade");
        // }
        
        // TERNARY OPERATOR
        // ONE LINER IF-ELSE 
        
        // SYNTAX
        
        //  condition ? true_expression : false_expression
        
// IF ELIF ELSE using TERNARY OPERATOR
// var marks = 40;
// marks > 80 ? console.log("A+ Grade") : marks <=80 && marks >60 ? console.log("B Grade"): console.log("C Grade");


// CIRCUITS : 

// let num = 5 * "ab" ;

// // Using Circuits i.e Logic Gates i.e AND , OR , NOT , XOR
// let total = num ;

// console.log(total); // NaN

// NaN is a number which is not a number

// let num = 10 * 5 ;

// // Using Circuits i.e Logic Gates i.e AND , OR , NOT , XOR
// let total = num || 0;

// console.log(total); // 0


// // AND GATE : ||
// let bool = true;

// // We want to store ABC in total if bool is true otherwise we want to store 0 in total

// // In AND gate from left, if first input in TRUE then it will print whatever is on the next operand.
// let total = bool && "ABC";

// console.log(total); // ABC



// OR GATE

// let bool = true;

// // In OR Gate we check from left to right, if first input is TRUE then it will print True.
// let total = bool || "ABC";

// console.log(total); // true


// let bool = true;

// // In OR Gate we check from left to right, if first input is TRUE then it will print True.
// // else it will print the last operand
// let total = bool || NaN;

// console.log(total); // true




let object = {
    id : 1,
    name : "ABC",
    category : "XYZ",
}

// // .keys() is a method which is used to get all the keys of an object
// let arr = Object.keys(object);
// console.log(arr); // [ 'id', 'name', 'category' ]

// // .values() is a method which is used to get all the values of an object
// let arr = Object.values(object);
// console.log(arr); // [ 1, 'ABC', 'XYZ' ]

// // .entries() is a method which is used to get all the keys and values of an object
// let arr = Object.entries(object);
// console.log(arr); // [ [ 'id', 1 ], [ 'name', 'ABC' ], [ 'category', 'XYZ' ] ]


// .freeze() is a method which is used to freeze the object i.e we can not change the value of the object
// Object.freeze(object);

// // PASS BY REFERENCE EXAMPLE
// object.category = "PQR";

// console.log(object); // { id: 1, name: 'ABC', category: 'XYZ' }



let arr = [
    {
        id: 1,
        name: "Haroon",
        category: "A+",
        city: "karachi"
    },
    {
        id: 2,
        name: "rafay",
        category: "A+",
        city: "karachi"
    },
    {
        id: 3,
        name: "ahsan",
        category: "A+",
        city: "karachi"
    },
    {
        id: 4,
        name: "ahmed",
        category: "B+",
        city: "karachi"
    },
    {
        id: 5,
        name: "arsalan",
        category: "C+",
        city: "karachi"
    },
    {
        id: 6,
        name: "Shafay",
        category: "D+",
        city: "karachi"
    }
]

// for keys of array 
let valuesOfArray = Object.values(arr);
console.log(valuesOfArray); // [ { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' }, { id: 1, name: 'rafay', category: 'A+', city: 'karachi' } ]

// // for keys of array 
let keysOfArray = Object.keys(arr[0]);
// console.log(keysOfArray); // [ 'id', 'name', 'category', 'city' ]

// .map() is a method which is used to iterate over an array
for (let i = 0; i < valuesOfArray.length; i++) {
    document.getElementById("table").innerHTML = `${keysOfArray.map((key) => `<th>${key}</th>`).join("")}`;
    document.getElementById("table").innerHTML += `${valuesOfArray.map((value) => `<tr>${keysOfArray.map((key) => `<td>${value[key]}</td>`).join("")}</tr>`).join("")}`;
}