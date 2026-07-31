const f1 = ()=>{
    console.log("F1");
};
const f2 = ()=>{
    console.log("F2");
};
const f3 = ()=>{
    console.log("F3");
};

function main (){
    console.log("main");
    // setInterval(f1,1000);
    setTimeout(f1,0);
    setImmediate(f2) ;//It is running only main not all file
    //0 second v kuch time hota hai
    //f3(); //f1 and f2 are independet nhi hai 
    process.nextTick(f3); //nexttick pehele run hoga
    console.log("end") //await is used to 
}
main();