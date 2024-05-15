const myPromise = new Promise((res, rej)=>{
  if (true) {
    res("response successfull")
  }else{
    rej("rejected")
  }
});

console.log(myPromise.then().catch());