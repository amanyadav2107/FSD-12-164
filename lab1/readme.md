# Even Loop 

#is used for main topic ##is used for sub topic -is used for bullet points

JS is synchronous(it execute all function line by line from top to bottom) and single threaded bydefault
## There can be async behaviour
- with browserAPI - setTimeout, SetInterval, setImmediate, nextTick
- with promises 
- with event handlers 
## Promise 
- A function not exceuted emidiatly but it must be exceuted after a while it has some status during the exceution 
- At final it may resolve () => success or reject => unsuccess.

## Call Back Function =>
- That pass as arguments or the parameter to another function 

## Modern JavaScript is divided into two categories
1. Common Js(.cjs) -> support OOPs -> require (According to cjs first priority is nectTick) Order=(nextTick, Promise setImmediate,/settimeout)
2. Module JS(.mjs) -> follow modular approach -> import (According to cjs first priority is promise) Order=(Promise, nextTick,setImmediate/setTimeout)
