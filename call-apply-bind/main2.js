// const printFullName= function(state, city){
//   console.log(this.firstName +' ' + this.lastName + ' lives in '+ state +' ' + city);
// }

// const printName = printFullName.bind(getName, "Rajasthan", "Jaipur");
// printName();


let Fullname ={
  firstName: "balaji",
  lastName: "yatheysh"
}

function printFullName1 (state, city){
  console.log(this.firstName + ' ' + this.lastName + ' ' + state + ' ' + city);
}

const fullBind = printFullName1.bind(Fullname, "karnataka" );
fullBind("bangalore");


Function.prototype.polyBind = function(...args){
  let obj = this;
  let params = args.slice(1);
  // console.log(params);
  return function (...args2){
    return obj.apply(args[0], [...params, ...args2]);
  }
}

const fullBind1 = printFullName1.polyBind(Fullname, 'karnataka');
fullBind1('bangalore');