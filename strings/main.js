//TRUNCATE FUNCTION
const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    let str2 = str.slice(0, maxlength);
    return str2.concat("...");
  } else {
    return str;
  }
};

let str = "Welcome to my channel";
// console.log(truncate(str, 7));


//palindrome
const isPalindrome = function (x){
  return x <0 ? false : x === +x.toString().split("").reverse().join("");
};
// console.log(isPalindrome(-12541));

//hamming distance






//automic structure pattern



//backend for frontends

