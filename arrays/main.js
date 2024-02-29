const arr1 = [1,2,3,4,5,3];
const arr2 = [6,7,8,9,2,3];


function removeDuplicatesFilterImproved(arr1, arr2) {
  const uniqueArray = arr1.filter((element, index) => {
    // Check if element exists in arr2 at a later index (avoids unnecessary checks)
    return arr2.indexOf(element) === -1 || index < arr2.indexOf(element);
  });

  const uniueArray2 = arr2.filter((element, index) => {

    return arr1.indexOf(element) === -1;
  });

  const uniueArray1 = arr1.filter((element, index) => {

    return arr2.indexOf(element) === -1;
  });

  // Concatenate with remaining elements from arr2 (optimization)
  console.log(uniqueArray);  // [1,2,3,4,5]
  console.log(uniueArray1);  // [1,4,5]
  console.log(uniueArray2);  // [6,7,8,9]
  return uniqueArray.concat(arr2.filter(element => uniqueArray.indexOf(element) === -1));
}

const finalResult =removeDuplicatesFilterImproved(arr1, arr2);
console.log(finalResult);