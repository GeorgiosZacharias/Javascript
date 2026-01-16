// fetch = Function to make network requests
// (json style data,images,files, etc)
// simplifies asynchronous data fetching in js
//used for interacting with apis to retrieve and send
// data asynchronously over the web
// fetch(url, options) 

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")//resolve or reject
.then(response => response.json())
.then(data => console.log(data)) //can access single data by doing data.name etc
.catch(error => console.error("Error fetching data:", error)); 