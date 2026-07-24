import{EventEmitter} from 'node:events'
import { exit } from 'node:process';

const login = (name) =>{
    console.log(`${name} logged in `);

};


const start =()=> {
    console.log("System Start");
};

const working =(name)=> {
    console.log(`${name} added items to cart `);
};
const checkout =(name)=>{
    console.log(`${name} logged out`);
};
// login ("Aman Yadav");
// start();

const task = new EventEmitter();
task.once("greet", start);
task.on("greet", login); //Event emitter ka naam bnaya hai or naam rkha hai task 
task.on("greet", working); //On har event ke liye call hoga but once ek baar hi call hoga 
task.on("greet", checkout);

task.once("exit", () => {
    console.log("System Shutting down");
});

task.emit("greet", "Aman Yadav");
task.emit("greet", "Amey yadav");
task.off("greet", working);
task.emit("greet", "Amuu");
task.emit("exit", "Manager");

