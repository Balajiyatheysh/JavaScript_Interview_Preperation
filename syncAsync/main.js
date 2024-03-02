async function getData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Http error status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.log("Error fetching data" + error);
  }
}

getData("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => console.log("received data", data))
  .catch((error) => console.log("Error handling data", error));

console.log("Continuing with other code..."); // Continues execution before data arrives
