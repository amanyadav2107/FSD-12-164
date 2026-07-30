import {EventEmitter } from "events";

const button = new EventEmitter();

button.on("click",(uname) =>{
    console.log(`button clicked by ${uname}`);
});

button.emit("click", "Aman");
button.emit("click", "Amey");
button.emit("click");