// printName();
function printName() {
    console.log(firstName);
}
firstName = "John";//by default js uses let bcz we can update it later below we can see
firstName = "Jane";

async function  fetchFunction (){
    fetch("https://jsonplaceholder.typicode.com/todos/")
   .then(function(response) {
        return response.json();
    })
   .then(function(myJson) {
        console.log(myJson);
    });
}

const fetcher = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");   
    const myText = await response.text()
    console.log(myText);
};
fetcher();
fetchFunction();