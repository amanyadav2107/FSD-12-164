//Dom Started
// import {EventEmitter } from "events"; 

// const music =new EventEmitter();

// music.on("click" ,() => {
//     console.log("Music ");
// });

// music.emit("click");

import {EventEmitter } from "events"; //Event emitter kisi v event ko generate krta hai

const button =new EventEmitter();

button.on("click" ,() => {
    console.log("Task 1 ");
});

button.on("click" ,() => {
    console.log("Task 1 ");
});

button.emit("click");