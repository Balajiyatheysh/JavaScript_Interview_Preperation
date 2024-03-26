// Function scope with var
function withVar() {
  var message = "Hello from inside!";
  console.log(message); // Outputs: Hello from inside!
}

withVar()

console.log(message); // ReferenceError: message is not defined (out of function scope)

// Block scope with let
if (true) {
  let blockMessage = "This is a block message"
  console.log(blockMessage); // Outputs: This is a block message 
}

console.log(blockMessage); // ReferenceError: blockMessage is not defined (out of block scope)
