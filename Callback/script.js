// Callback
// async await>>promise chains>>callback hell
// Sync in JS : Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.
// Asynchronous : Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediatly and doesn't block the flow.
console.log("one");
console.log("two");
console.log("three");

function hello(name) {
    console.log("hello!",name);
}
console.log("four");
setTimeout(() => {
    console.log("hello");
},200); // 200 mili sec timeout
console.log("five");
console.log("six");

// callbacks
// a function that is being passed inside some other function is known as callback function

function greet(name,helloCallback) {
    helloCallback(name);
}
greet("Yuvraj",hello);
// OR
greet("Yuvraj", (name) => {
    console.log("hello!", name);
});
// setTimeout takes callback function as it's argument

// callback hell : nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This type of programming becomes difficult to understand

function getData(dataId, getNextData) {
    setTimeout( () => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 500);
}
// getData(123);
// getData(456);
// getData(789); // all proggs. execute in 2sec
// to overcome this problem we use callback functions
getData(123, () => {
    getData(456, () => {
        getData(789);
    });
});
// this nested callback can result in callback hell
// after learning promise chain, let's see how we solve the same problem
// using promise-chain
function getData2(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("data", dataId.toString());
            resolve("success");
        }, 10000);
    });
}
getData2(3).then((res) => {
    console.log(res);
    getData2(4).then((res) => {
        console.log(res);
    })
});
// this can be reduced to
getData2(5)
    .then((res) => {
        console.log(res);
        return getData2(6);
    })
    .then((res) => {
        console.log(res);
    });

// using async-await
async function getAllData(){
    console.log("Getting data 7...");
    await getData2(7);
    console.log("Getting data 8...");
    await getData2(8);
    console.log("Getting data 9...");
    await getData2(9);
}
// getAllData(); // unnecessary call of function, can be solved using IIFE
// IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined
// syntax : (function () {...})();
(async function (){
    console.log("Getting data 10...");
    await getData2(10);
    console.log("Getting data 11...");
    await getData2(11);
    console.log("Getting data 12...");
    await getData2(12);
})();


// promises : a solution for callback hell
// it is for eventual completion of task. It is an object in JS
// let promise = new Promise((resolve, reject) => {...})
// resolve and reject are callbacks provided by JS 

let promise = new Promise((resolve,reject) => {
    console.log("I'm a promise");
    // reject("some error occured");
})
console.log(promise);
function getDataa(dataId,getNextDataa) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("dataa", dataId);
            resolve("success");
            if(getNextDataa){
                getNextDataa();
            }
        }, 2000);
    })
}
console.log(getDataa);
getDataa(123);
let promisee = getDataa(456);
console.log(promisee);
// setTimeout(console.log(promisee),10000);
// A JS promise object can be :
// Pending : the result id undefined
// Resolved : the result is a value(fulfilled)
// Rejected : th eresult is an error object

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I'm a promise");
        resolve("success");
        // reject("network error");
    });    
}
promise = getPromise();
promise.then( (res) => {
    console.log("promise fulfilled", res);
});
promise.catch( (err) => {
    console.log("promise rejected", err);
});


// Promise Chain
function asyncFun1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Some Data1");
            resolve("Success");
        }, 4000);
    });
}
function asyncFun2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Some Data2");
            resolve("Success");
        }, 4000);
    });
}

setTimeout(() => {
    console.log("Fetching Data1...");
}, 2500);
// let p1 = asyncFun1();
// p1.then((res) => {
//     console.log(res);
// })
// setTimeout(() => {
//     console.log("Fetching Data2...");
// }, 5000);
// let p2 = asyncFun2();
// p2.then((res) => {
//     console.log(res);
// })
// fetching data starts at the same time, to overcome this we use the promise chain
// implementing promise chain
// let p1 = asyncFun1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching Data2...");
//     let p2 = asyncFun2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });
// same can be reduced to-
asyncFun1().then((res) => {
    console.log(res);
    console.log("Fetching Data2...");
    asyncFun2().then((res) => {
        console.log(res);
    });
});


// Async-Await : another solutions for synchronous approach to programming
// async function always returns a promise
// async function muFunction() {...}
// await pauses th eexecution of it's surrounding async function until the promise is settled
async function helloo(){
    console.log("Helloo!");
}
console.log(helloo());

function api() {
    return new Promise ((reslove,reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 20000);
    });
}
async function getWeatherData() {
    await api(); // 1st
    await api(); // 2nd
}
// now let us use async await in the above getDataaa problem

