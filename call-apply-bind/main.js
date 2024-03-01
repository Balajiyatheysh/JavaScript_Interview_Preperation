let getName ={
  firstName: 'John',
  lastName: 'Doe',
}

let getName1 ={
  firstName: 'Balaji',
  lastName: 'yatheysh',
}

const printFullName= function(state, city){
  console.log(this.firstName +' ' + this.lastName + ' lives in '+ state +' ' + city);
}

printFullName.call(getName, "Karnataka", "Bangalore");
printFullName.call(getName1, "Kerala", "Coimbator");

printFullName.apply(getName, ["Maharastra", "Mumbai"]);

const printName = printFullName.bind(getName, "Rajasthan", "Jaipur");
printName();

Function.prototype.myBind = function(...args){
  let obj = this;
  let params = args.slice(1);
  return function(...args2){
    return obj.apply(args[0], [...params, ...args2]);
  }
}


const printName1 = printFullName.myBind(getName, "Andra Pradesh", "Hyderabad");
printName1();

Function.prototype.polyBind = function(args){
  let obj = this;
  return function (){
    return obj.apply(args)
  }
}