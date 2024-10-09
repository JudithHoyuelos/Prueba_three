const menu = document.querySelector("#icono-menu-lateral");
const exit = document.querySelector("#exit");
const div = document.querySelector("#desplegable");
const logo = document.querySelector('#inicio');

// Añadir evento al botón del menú
menu.addEventListener('click', onClickMenu);

// Añadir evento al botón de salida
exit.addEventListener('click', onClickExit);

// Evento para cerrar el menú al hacer clic en cualquier parte de la página
document.addEventListener('click', (e) => {
    if (div.style.display === '' && !div.contains(e.target) && e.target !== menu) {
        div.style.display = 'none';
        menu.style.display = '';
    }
});

// Función para abrir el menú
function onClickMenu(e) {
    // e.stopPropagation(); // Evitar que el evento se propague y cierre el menú inmediatamente
    div.style.display = '';
    menu.style.display = 'none';
}

// Función para cerrar el menú
function onClickExit(e) {
    // e.stopPropagation(); // Evitar que el evento se propague y vuelva a abrir el menú
    div.style.display = 'none';
    menu.style.display = '';
}

// Función para manejar el clic en el menú lateral
function setCameraPosition(x, y, z, lookAtX, lookAtY, lookAtZ, points) {
    // Guarda las posiciones y los puntos a mostrar en localStorage
    localStorage.setItem('cameraPosition', JSON.stringify({ x, y, z }));
    localStorage.setItem('cameraLookAt', JSON.stringify({ lookAtX, lookAtY, lookAtZ }));
    localStorage.setItem('points', JSON.stringify(points));

    // Redirige a la página principal
    window.location.href = 'index.html'; // Cambia 'index.html' por la ruta de tu página principal
}

// Añade los event listeners a los botones del menú
document.querySelector("#sobre").addEventListener('click', () => {
    setCameraPosition(4.5475, 1.8324, 3.982, 10, 1, -1, "newPositionsDerecha");
});

document.querySelector("#soluciones").addEventListener('click', () => {
    setCameraPosition(-0.0588, 1.8324, -9.332, -0.05, 1.8, -12, "arriba");
});

document.querySelector("#tecnologias").addEventListener('click', () => {
    setCameraPosition(0.6202, 1.8324, 2.5258, -6, 1, -4, "newPositionsAbajo");
});

document.querySelector("#experiencias").addEventListener('click', () => {
    setCameraPosition(-4.7371, 1.8324, 0.0701, -9, 1, 0, "newPositionsIzquierda");
});

// function navigateAndSetState(cameraX, cameraY, cameraZ, lookAtX, lookAtY, lookAtZ, points) {
//     localStorage.setItem('cameraPosition', JSON.stringify({ x: cameraX, y: cameraY, z: cameraZ }));
//     localStorage.setItem('cameraLookAt', JSON.stringify({ x: lookAtX, y: lookAtY, z: lookAtZ }));
//     localStorage.setItem('activePoints', JSON.stringify(points.map(p => p.element.id))); // Guardar los ids de los puntos activos
//     localStorage.setItem('runUpdateAnnotation', true); // Bandera para ejecutar la actualización de puntos
//     window.location.href = 'index.html'; // Asegúrate de que esta es la URL de tu página principal
// }

// sobre.addEventListener('click', () => navigateAndSetState(4.547513663373049, 1.8324140151651975, 3.9819783918301144, 10, 1, -1, newPositionsDerecha));
// soluciones.addEventListener('click', () => navigateAndSetState(-0.05881682153498034, 1.8324140151651975, -9.332008651101873, -0.05, 1.8, -12, arriba));
// tecnologias.addEventListener('click', () => navigateAndSetState(0.6201922849652849, 1.8324140151651975, 2.5258305164814105, -6, 1, -4, newPositionsAbajo));
// experiencias.addEventListener('click', () => navigateAndSetState(-4.737092106867862, 1.8324140151651975, 0.07007195162038703, -9, 1, 0, newPositionsIzquierda));

// // En el script del menú
// function handleMenuClick(cameraX, cameraY, cameraZ, lookAtX, lookAtY, lookAtZ, pointsArrayName) {
//     // Llama a la función global con los parámetros correctos
//     window.moveCameraAndShowPoints(cameraX, cameraY, cameraZ, lookAtX, lookAtY, lookAtZ, window[pointsArrayName]);
// }

// // Manejar los clics del menú
// sobre.addEventListener('click', () => handleMenuClick(4.547513663373049, 1.8324140151651975, 3.9819783918301144, 10, 1, -1, 'newPositionsDerecha'));
// soluciones.addEventListener('click', () => handleMenuClick(-0.05881682153498034, 1.8324140151651975, -9.332008651101873, -0.05, 1.8, -12, 'arriba'));
// tecnologias.addEventListener('click', () => handleMenuClick(0.6201922849652849, 1.8324140151651975, 2.5258305164814105, -6, 1, -4, 'newPositionsAbajo'));
// experiencias.addEventListener('click', () => handleMenuClick(-4.737092106867862, 1.8324140151651975, 0.07007195162038703, -9, 1, 0, 'newPositionsIzquierda'));
