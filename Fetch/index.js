// fetch = Function to make network requests
// (json style data,images,files, etc)
// simplifies asynchronous data fetching in js
//used for interacting with apis to retrieve and send
// data asynchronously over the web
// fetch(url, options) 

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")//resolve or reject
.then(response =>{
    if(!response.ok){
        throw new Error("could not fetch resource");
    }
    return response.json();
} 
    
)
.then(data => console.log(data)) //can access single data by doing data.name etc
.catch(error => console.error("Error fetching data:", error));


async function fetchData(){
    try{
        const pokemonName= document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
             throw new Error("could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement =document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}