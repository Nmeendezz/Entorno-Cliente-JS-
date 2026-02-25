const container = document.getElementById("container")
const col = document.getElementById("col");
const inputGroup = document.getElementById("input-group");
const buscar = document.createElement("button");
buscar.setAttribute("class", "btn btn-outline-secondary");
buscar.textContent = "Buscar";
inputGroup.appendChild(buscar);

async function getResults(name) {
    try {
        const response = await fetch(
            `https://api.api-ninjas.com/v1/animals?name=${name}`,
            {
                headers: {
                    "X-Api-Key": "zsVbbvGUrWdtnDeEGIYxhELnB8FR4pHxCBqlh7h2"
                }
            }
        );
        const row2 = document.createElement("div");
        row2.setAttribute("class", "row mt-4");
        container.appendChild(row2);
        const col2 = document.createElement("div");
        col2.setAttribute("class", "col mt-4");
        row2.appendChild(col2);
        const buttonsContainer = document.createElement("div");
        buttonsContainer.setAttribute("class", "d-grid gap-2 d-md-block");
        col2.appendChild(buttonsContainer);
        const data = await response.json();
        console.log(data);
        data.forEach(animal => {
            const animalButton = document.createElement("button");
            animalButton.setAttribute("class", "btn btn-outline-secondary");
            animalButton.setAttribute("type", "button");
            animalButton.textContent = animal.name;
            buttonsContainer.appendChild(animalButton);
            animalButton.addEventListener("click", () => {
                const nombre = document.createElement("h1");
                nombre.setAttribute("class", "mt-4");
                nombre.textContent = animal.name;
                col2.appendChild(nombre);

                const texto1 = document.createElement("p");
                col2.appendChild(texto1);
                const dieta = document.createElement("h3");
                dieta.textContent = "Dieta: ";
                col2.appendChild(dieta);
                const textDiet = document.createElement("p");
                textDiet.textContent = animal.characteristics.diet;
                col2.appendChild(textDiet);


                const habitat = document.createElement("h3");
                habitat.textContent = "Habitat: ";
                col2.appendChild(habitat);
                const textHabitat = document.createElement("p");
                textHabitat.textContent = animal.characteristics.habitat;
                col2.appendChild(textHabitat);

                const years = document.createElement("h3");
                years.textContent = "Esperanza de vida: ";
                col2.appendChild(years);
                const textYears = document.createElement("p");
                textYears.setAttribute("class", "mb-4");
                textYears.textContent = animal.characteristics.lifespan;
                col2.appendChild(textYears);
            })
        })
    } catch (error) {
    }

}


const valor = document.getElementById("buscar");
buscar.addEventListener("click", () => {
    getResults(valor.value);
});