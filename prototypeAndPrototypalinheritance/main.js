let object = {
  name: "balaji",
  city: "bangalore",
  getInfo : function (){
    console.log(this.name + ' ' + "from"+" "+this.city)
  }
}

let object2 = {
  name: "yatheysh"
}

object2.__proto__ = object;

//Function prototype

Function.prototype.multi = function (){
  console.log("this is multi function")
}


function multiply (x){
  console.log(x * 3);
}

//Array prototype
let arr = [{
  degree:{
    name:"bit",
    year:2020
  }
}]

console.log(arr.__proto__); // this is Array.prototype
console.log(Array.prototype);
console.log(arr.__proto__.__proto__); //this is Object.prototype
console.log(Object.prototype);
console.log(arr.__proto__.__proto__.__proto__); // this will be bull

console.log(multiply.__proto__);
console.log(multiply.__proto__.__proto__);//this is Object.prototype

console.log(object.__proto__); //Object.prototype
console.log(object.__proto__.__proto__); //null