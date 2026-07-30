//DOM : Document Object Model
import {EventEmitter } from "events"; //Event emitter kisi v event ko generate krta hai

const button =new EventEmitter();

button.on("click" ,() => {
    console.log("Button clicked ");
});

button.emit("click");