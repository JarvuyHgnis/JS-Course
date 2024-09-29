// Classes and Objects
// Objects
// A javaScript object is an entity having state and behaviour(properties and methods).
// JS objects have a special property called prototype
// We can set prototype using property called __ptoto__
// if objects and prototype have same method, object's method will be used

const student = {
    fullName : "Yuvraj Singh",
    marks : 94,
    printMarks : function() {
        console.log("marks = ",this.marks);
    }
};
console.log(student);
console.log(student.printMarks);
console.log(student.printMarks());
console.log(student.toString());

// practical example of prototype
let arr = ["apple", "mango", "banana"];
console.log(arr);
// array has prototype functions that proves that array is an object
arr.push("pineapple"); // without any functions being made

const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    calcTax2 : function() {
        console.log("tax rate is 20%");
    }
};
console.log(employee);
const raj = {
    salary : 50000,
    calcTax1() { // if objects and prototype have same method, object's method will be used
        console.log("tax rate is 20%");
    }
};

raj.__proto__ = employee;
console.log(raj);
console.log(raj.calcTax1());

// classes
// class is a program-code template for creating objects
// those objects will have some state(variables) & osme behaviour (functions) inside it

class car {
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}
console.log(car);
let mustang = new car("Ford-Shelby");
console.log(mustang);
console.log("typeof mustang is",typeof mustang);
console.log(mustang.start());
console.log("mustang's brand is", mustang.brand);
// constructor() method is automatically inkvoked by new and initializes object

// Inheritance in JS
class parent {
    hello() {
        console.log("hello!");
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class child extends parent {
    work() {
        console.log("work");
    }
    hello() {
        console.log("oyeoyeoye");
    }
}
const obj = new child();
console.log(obj);
console.log(obj.sleep());
console.log(obj.hello());
// if parent and child both have a function with same name then the child's function will be executed
// it is known as method overriding

// super keyword
// this suoer keyword is used to call the constructor of its parent calss to access the parent's properties and methods
// super(args) // calls parent's constructor
// super.parentMethod(args)
class person {
    constructor(name) {
        this.name = name;
        this.species = "homo sapiens";
    }
    hello() {
        console.log("hello!");
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}
class engineer extends person {
    constructor(branch,name) {
        super(name); // to invoke parent class constructor
        this.branch = branch;
    }
    work() {
        super.eat();
        console.log("work");
    }
}
let object = new person("Yuvraj");
console.log(object);
let newObj = new engineer("CS","Yuvraj");
console.log(newObj);
console.log(newObj.work());

// error handling
// try {
//     ...normal code
// } catch(err){ // err is error object
//     ...handling error
// }
let a =5;
let b =10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
try {
    console.log("a = ", a);
    console.log("b = ", b);
    console.log("a+b = ", a+b);
    console.log("a-b = ", a-c); // error
    console.log("b+b = ", b+b);
    console.log("a+a = ", a+a);
} catch(err) {
    console.log(err);
}
console.log("b+b = ", b+b);
console.log("a+a = ", a+a);
