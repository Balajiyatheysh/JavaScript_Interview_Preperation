const message = "Hello, world!";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("typedText").textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Delay between characters
  }
}

typeWriter();


