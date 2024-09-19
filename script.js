console.log("Ram Ram");

// ###############Variables##############
let naam = "Yuvraj Singh";
let age  = 22;
let cgpa = 8.46;
let a = null;
let b = undefined;
let isPlaced = false;
// reserved words , words starting with numbers cannot be variables
// let, var, const keywords should be used before every variable name
// usually we use let and then variable name
// var name = "Yuvraj"; // Global scope
// var name = "Singh"; // Allowed as we have used var keyword
let name = "Yuvraj"; // {block/local} scope
// let name = "Singh"; // Not allowed as let keyword doesn't allows re-declaration of same variable
const maxCGPA = 10; // Cannot be changed in future
// ES6 launched in 2015 introduced let and const
 
// ###############Data Types###############
console.log(typeof age); // number
console.log(typeof naam); // string
typeof cgpa; // number
console.log(typeof isPlaced); // boolean
console.log(typeof a); // object
console.log(typeof b); // undefined
let x = BigInt("123");
console.log(typeof x); // bigint
let y = Symbol("Hello");
console.log(typeof y); // symbol
// these were primitive datatype
// object(arrays, functions) are non-primitive datatype
const student = {
    fullName : "Yuvraj Singh",
    age : 22,
    cgpa : 8.46,
    isPass :true,
};
typeof student; // object
console.log(student.age); // 22
student.age = student.age + 1; // 23
student["age"] = student["age"] + 1; //24
console.log(student["age"]); // 24

console.log("123"+123); // 123123
console.log(123+123); // 246

// ################Operators#################
// Arithmetic Operators
a = 5;
b = 7;
console.log("a = "+a+" b = "+b);
console.log(a+b); // 12
console.log(a-b); // -2
console.log(a*b); // 35
console.log(b/a); // 1.4
console.log(b%a); // 2
console.log(a**b); // 78125
console.log(++a); // 6
console.log(--b); // 6
// assignment operators
a += 7;
console.log(a);
a %= b;
console.log(a);
a **= 2;
console.log(a);
a %= a;
console.log(a);
// comparison operators
a = 5;
b = 5;
console.log(a==b);
console.log(a===b); // checks value as well as datatype
// same goes for !==
// logical operators
let cond1 = a<b;
let cond2 = a==b;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond1);

// ##############Conditional Statements################
// if, if else, else if
// ternary operator
// condition?true output:false output
console.log(age>18?"adult":"minor");
// switch
const z = 2;
switch (z) {
    case 1 : console.log("not = 2");
    break;
    case 2 : console.log("= 2");
    break;
    default : console.log("default");
}
// let userAge = prompt("Enter your age");
// if(userAge >= 18){
//     alert("Adult");
// } else {
//     alert("Minor");
// }

// ###############Loops################
// for loop
for(let i=0; i<3; i++){
    console.log("Jai Shree Ram");
}
// while loop
i=0;
while(i<5){
    console.log(i+1);
    i++;
}
// do while loop
i=0;
do {
    console.log(i+1);
    i++;
} while(i<5);
// for-of loop
// used to loop over arrays and strings
let str = " Yuvraj Singh ";
console.log(str);
for(let val of str){
    console.log(val);
}
// for in loop
for(let props in student){
    console.log(props+" = "+student[props]);
}

// ##############Strings##############
let str1 = "Yuvraj";
let str2 = "Singh";
console.log(str1.length);
console.log(str1[2]);
// template literals
let specialString = `This is template literal`;
console.log(specialString);
console.log(typeof specialString);
// usage of template literals
let output = `The name of the student is ${student.fullName} and the age is ${student.age}`; // this is known as string interpolation
console.log(output);
// escape characters \n, \t etc in length function they are counted as 1

// string methods : built in methods to manipulate strings
console.log(str1.toUpperCase()); // doesn't changes original string
// JS string are immutable
console.log(str2.toLowerCase());
console.log(str.trim());
console.log(str.slice(1,6));
console.log(str1.concat(str2));
console.log(str.replace('v','b')); // only replaces first occurence
console.log(str.replaceAll(' ','#')); // replaces all occurences
console.log(str.charAt(2));
// practice question
// let userName = prompt("Enter user name");
// let alertMessage = "@"+userName+userName.length;
// alert(alertMessage);

// ################Arrays###################
let marks = [97,94,72,62,92];
console.log(marks);
console.log(marks.length);
console.log(typeof marks); // objects
console.log(marks[0]); // 97
console.log(marks[5]); // undefined
marks[0] = 98; // array in js is mutable
for(let i=0; i<marks.length; i++){
    console.log(marks[i]);
}
for(let el of marks){
    console.log(el);
}
// array methods
marks.push(83); // add at end
marks.push(94,90,94);
marks.pop(); // remove from end
console.log(marks.toString()); // returns array as string
console.log(marks);
let marvelHeroes = ["ironman", 'spiderman', "thor"];
let dcHeroes = ["superman", "batman", "joker"];
let heroes = marvelHeroes.concat(dcHeroes); // returns new concatenated array
console.log(heroes);
marvelHeroes.unshift("wolverine"); // adds element in beginning
dcHeroes.shift(); // removers first element
console.log(marvelHeroes.slice(0,2)); // returns piece of an array
console.log(marvelHeroes.slice(0));
// splice(startIndex, deleteCount, newElement); // changes th eoriginal array
console.log(marvelHeroes.splice(2,1,"doctor strange", "wanda"));
heroes = marvelHeroes.concat(dcHeroes); // returns new concatenated array
console.log(heroes);

// #################Functions################
// block of code that performs a specific task , can be invoked whenever needed
// redueces redundancy
function greetings(){ // no params are required these are block level
    console.log("Ram Ram Ji");
}
greetings(); // no args being passed
function sum(a,b){
    s = a+b;
    return s;
}
let ans = sum(5,9);
console.log(ans);
// arrow functions
// part of modern javascript
const multiply = (a,b)=>{
    console.log(a*b);
};
multiply(3,2);
// forEach method(function to an object class) // method of array class
// arr.forEach(callBackFunction) // callBackFunction is an argument passed ti another function
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val, idx, arr) {
    console.log(idx, val, arr);
});
// 3 kind of parameters can be passed in callBackFunction parameters
// foreach is a higher order function which either takes another function as parameter or returns another function
// practice
let calcResult = (val) => {
    if(val>80) console.log(val+" Good");
    else console.log(val+" Bad");
};
marks.forEach(calcResult);
// imp array methods
// map crates a new array with the result of some opn. The value it's callback returns is used to form a new array
newArr = marks.map((val) => {
    return val;
});
console.log(newArr);
// filter method
let evenArray = marks.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArray);
// reduce method , used where multiple values are reduced to single value
let sumOfArray = marks.reduce((res,curr) => {
    return res + curr;
});
console.log(sumOfArray);
let maxMarks = marks.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(maxMarks);


