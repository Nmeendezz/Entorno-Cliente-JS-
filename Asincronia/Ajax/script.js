
fetch("https://stephen-king-api.onrender.com/api/books")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


async function obtenerLibros() {
    try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const data = await response.json();

        const h1 = document.createElement("h1");
        h1.textContent = "Titulos y Años de Stephen King";
        document.body.appendChild(h1);

        const tabla = document.createElement("table");
        document.body.appendChild(tabla);

        const idTabla = document.createAttribute("id");
        idTabla.value = "tabla";
        tabla.setAttributeNode(idTabla);

        const border = document.createAttribute("border");
        border.value = "1";
        tabla.setAttributeNode(border);

        const primeraFila = document.createElement("tr");
        tabla.appendChild(primeraFila);

        const encabezado1 = document.createElement("th");
        encabezado1.textContent = "Titulo";
        primeraFila.appendChild(encabezado1);

        const encabezado2 = document.createElement("th");
        encabezado2.textContent = "Año";
        primeraFila.appendChild(encabezado2);

        data.data.forEach(libro => {
            const filas = document.createElement("tr");
            tabla.appendChild(filas);

            let title = document.createElement("td");
            title.textContent = libro.Title;
            filas.appendChild(title);

            let year = document.createElement("td");
            year.textContent = libro.Year;
            filas.appendChild(year);

        });


    } catch (error) {
        console.log(error);
    }
}
obtenerLibros();