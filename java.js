const muro = document.querySelector('#muro');

// Función para generar una publicación
function generarPublicacion(titulo, contenido, fecha) {
  const publicacion = document.createElement('div');
  publicacion.classList.add('publicacion');

  const tituloElemento = document.createElement('h3');
  tituloElemento.textContent = titulo;
  publicacion.appendChild(tituloElemento);

  const contenidoElemento = document.createElement('p');
  contenidoElemento.textContent = contenido;
  publicacion.appendChild(contenidoElemento);

  const fechaElemento = document.createElement('small');
  fechaElemento.textContent = fecha;
  publicacion.appendChild(fechaElemento);

  muro.appendChild(publicacion);
}

// Generamos algunas publicaciones de ejemplo
generarPublicacion('Título 1', 'Contenido 1', '2023-09-29');
generarPublicacion('Título 2', 'Contenido 2', '2023-09-28');
generarPublicacion('Título 3', 'Contenido 3', '2023-09-27');
