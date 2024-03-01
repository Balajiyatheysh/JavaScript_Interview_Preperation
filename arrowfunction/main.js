const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

const personB = {
  name: "Alice",
  greet: ()=> {
    console.log("Hello, my name is " + this.name);
  }
};


person.greet(); // Outputs: Hello, my name is Alice (uses person's this)
personB.greet();
