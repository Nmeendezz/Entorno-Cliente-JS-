fetch("https://pokeapi.co/api/v2")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

async function getPokemon(name) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=00&limit=1025");
        const pokemons = await response.json();
        let encontrado = false;
        for(let i = 0; i < pokemons["results"]; i++){
            if(pokemons["results"][i]["name"] == name.toLowerCase()){
                encontrado = true;
                return pokemons["results"][i]["url"];
            }
        }
        if(!encontrado){
            return "No se ha encontrado el pokemon " + name;
        }
    } catch (error) {
        return error;
    }
}

async function getType(){
    try {
        const pokemons = await getPokemon();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const type = await response.json();
        return type;
    } catch (error) {
        return error;
    }
}

async function postData() {
    try {
        const select = document.getElementById("select");
        pokemons.results.forEach(pokemon => {
            const option = document.createElement("option");
            option.textContent = pokemon.name;
            select.appendChild(option);
            
            const div = document.createElement("div");
        });


    } catch (error) {
        console.log(error);
    }
}
postData();

