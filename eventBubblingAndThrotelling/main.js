//Event bubbling, Capturing aka trickling and deligation concepts
//Event bubbling and capturing are the two ways of event propogation in the dom tree
//by default useCapture flag is set to false (means bubbling is true)

document.querySelector("#grandparent").addEventListener("click", (e) => {
  console.log("GrandParent Clicked");
},false);

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("Parent Clicked");
}, false);

document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child Clicked");
}, false);
