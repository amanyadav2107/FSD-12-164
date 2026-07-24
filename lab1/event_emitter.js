import{EventEmitter} from 'node:events'

const login = (name) =>{
    console.log(`${name} logged in `);

};


const start =()=> {
    console.log("System Start");
};

const working =(name)=> {
    console.log(`${name} add items to cart `);
};
const checkout =(name)=>{
    console.log(`${name} logged out`);
};
// login ("Aman Yadav");
// start();

const task = new EventEmitter();
task.on("greet", login);

task.emit("greet", "Aman Yadav");

