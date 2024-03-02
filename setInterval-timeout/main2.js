function printNumber(number, delay) {
  setTimeout(() => {
    console.log(number);
  }, delay * 1000); // Convert delay to milliseconds
}

var currentDelay = 0; // Initialize delay variable

for (let i = 1; i <= 10; i++) {
  currentDelay += i; // Accumulate delay for each number
  printNumber(i, currentDelay); // Pass number and updated delay
}
