// we shall understand function currying using two methods bind and closure

//this method uses bind strategy
// function multiply (x,y){
//   console.log(x * y)
//   return x*y;
// }

// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(3));

//this is using closure method
function multiply(x){
  return function(y){
    return x * y;
  }
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(28));