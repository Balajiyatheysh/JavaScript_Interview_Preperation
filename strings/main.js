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
console.log(truncate(str, 7));

//automic structure pattern
//backend for frontends
