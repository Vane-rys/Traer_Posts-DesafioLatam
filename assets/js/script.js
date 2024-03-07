// Definición de la función asincrónica para obtener datos
const getPosts = async () => {
    // URL de la cual se obtendrán los datos
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
        // Realiza una solicitud HTTP para obtener los datos
        const respuesta = await fetch(url);
        
        // Convierte la respuesta a formato JSON
        const datos = await respuesta.json();
        
        // Mostrar el resultado en HTML
        const contenedorDatosPost = document.getElementById('post-data');
        contenedorDatosPost.innerHTML = '';

        // Crear elementos HTML para cada post
        const ul = document.createElement('ul');
        datos.forEach(post => {
            const li = document.createElement('li');
            // Muestra el título en negrita y el cuerpo debajo
            li.innerHTML = `<strong>${post.title}</strong><br>${post.body}<br><br>`;
            ul.appendChild(li);
        });

        // Agregar la lista de posts al contenedor
        contenedorDatosPost.appendChild(ul);
    } catch (error) {
        // Manejo de errores, en caso de que la solicitud falle
        console.error(error);
    }
}