// onclick="console.log('the button was cliked')"
// js alternate for the above inline event function
let btn1 = document.querySelector("button");
let a = 0;
btn1.onclick = () => {
    a++;
    console.log("Button 1 has been clicked",a,"times");
}
// onmouseover="console.log('You\'r inside div')"
// js alternative
// assan hai karlena
// # handles written in js file is given priority over inline handling of events
// # if we rewrite some code for an event handler then the last code only gets executed
// # all event handlers have access to the event object's properties and methods.
// # the event object is passed in the callback function
let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("You are inside the div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}

// ############# Event Listeners #############
// node.addEventListener(event. callback) 
// # this callback is called as handler
btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked-Handler1");
});
// # the event handler can be implemented as many times as possible
// # it works unlike the above event handling
btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked-Handler2");
});
// node.removeEventListener(event, callback)
// # if I simply copy the callback function in the removeEventListener function, it won't work
// because the functions will be is different memory locations
// we have to pass the same callback reference as well
// That's why we use better approach to name the callback like a arrow fucntion and then use in the addEventListener function
const handler3 = () => {
    console.log("Button 1 was clicked-Handler3");
}
btn1.addEventListener("click", handler3);
// btn1.removeEventListener("click", handler3);
