import { EventEmitter } from "events";


class DomClass extends EventEmitter{
    addEventListener(eventName , callback){
        this.on(eventName, callback); //Callback is function
    }
    removeEventListener(eventName, callback){
        this.off(eventName, callback);
    }
    dispatchEvent(eventName,eventData = {}){

        const event = {
            type:eventName,
            timespam :new Date (),
            ...eventData
        }
        this.emit(eventName, event);
    }

}

const button =new DomClass();
const handleClick = (event)=>{
    console.log(`Button click type: ${event.type} at ${event.timespam}`);
};

button.addEventListener("click", handleClick);
button.dispatchEvent("click",{
    target:'submitBtn',
});

button.removeEventListener("click",handleClick);
button.dispatchEvent("click",{
    target:"resetBtn",
});