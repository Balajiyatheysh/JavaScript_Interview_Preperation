"use strict"

//this works differently in strict mode and non strict mode
//this the value of this is undefined or null it takes global object in non strict mode which is called "this substitution"
//this is global scope points to the globalObject

console.log(this); //globalObject

function x (){
  //value depends on strict or non strict mode
  console.log(this);
}

x();
window.x();