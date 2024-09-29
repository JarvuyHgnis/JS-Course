// The Fectch API provides an interface for fetching(sending/receiving) resources.
// It uses Request and Response objects
// The fetch() method is used to fetch a resource(data).
// let promise = fetch(url,[options])
const URL = "https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL);
console.log(promise);
console.log(typeof promise);

// Understanding Terms
// AJAX is asynchronous JS and XML
// JSON is a JS Object Notation
// json() method : returns a second promise that resolves with the result of parsing the response body text as JSON.
// (Input is JSON, output is JS object)

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// using async await
const getFacts = async () => {
    console.log("Getting Data ...")
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    factPara.textContent = data[1].text;
};
// console.log(getFacts());
btn.addEventListener("click", getFacts);

// using promise chain
// function getFactss() {
//     fetch(URL)
//     .then((Response) => {
//         return Response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.textContent = data[1].text;
//     })
// }
// btn.addEventListener("click", getFactss);

// Requests and Response
// HTTP Verbs
// Response Status Code
// HTTP response headers also contain details about the responses, such as conetnt type, HTTP status code etc.

// HW : Sending POST Request using fetch api(using options in fatch() method)

