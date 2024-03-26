const arr1 = [1,2,3,4,5];

const mappedArray = arr1.map(arr => arr * 2 );
const filteredArray = arr1.filter(arr => arr % 2 === 0);
const reducedArray = arr1.reduce((accumulator, current)=> { return accumulator + current}, 5);

console.log(mappedArray);
console.log(filteredArray);
console.log(reducedArray);