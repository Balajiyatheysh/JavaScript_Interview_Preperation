const myPromise = new Promise((res, rej)=>{
  if (true) {
    res("result")
  }
});

myPromise.then().catch();