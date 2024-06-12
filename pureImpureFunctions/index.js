             //pure and impure functions//
//pure function return same value for same arguements passed everytime, does not change the local state, will not have any side effects
//impure function return different value for same arguements passed, it can change the local state, it has side effects

let message = 4;
function greeting (name){
  // return `Hello ${name} ${message}`
  return ++message;
}
console.log(greeting("Balaji"));
console.log(message);


// foreach does not return new array whereas filter and map function returns new array

let arr =[1,2,3,4,5,6,7,8,4,2,2];
let arr2=arr.map(element => {
 return element >5;
});
console.log(arr2);