import THREE from './three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
// import lights from './Luzambiental';

// Configuración básica
function createScene(containerId, modelPath) {
    const container = document.getElementById(containerId);
    console.log(container);
    // container.style.width = '22rem';
    // container.style.height = '22rem';
    // const width = container.offsetWidth;
    // const height = container.offsetHeight;

    // Obtener el tamaño de 1 rem en píxeles
    const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Definir las dimensiones del canvas en rem y convertirlas a píxeles
    const width = 22 * remInPixels;
    const height = 22 * remInPixels;

    // Crear una nueva escena
    const scene = new THREE.Scene();

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 1;

    // Crear un nuevo renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    scene.background = new THREE.Color("blue");

    // Añadir luz
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Cargar el modelo 3D
    const loader = new GLTFLoader();
    loader.load(modelPath, function (gltf) {
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });

    // Animar la escena
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

// Llamar a createScene para cada modelo
// createScene('model-canvas-turismo', 'assets/mitadAlvea/prueba.glb');
// createScene('model-canvas-patrimonio', 'assets/mitadAlvea/prueba.glb');
// createScene('model-canvas-comercio', 'assets/mitadAlvea/prueba.glb');
// createScene('model-canvas-delivery', 'assets/mitadAlvea/prueba.glb');
// createScene('model-canvas-entretenimiento', 'assets/mitadAlvea/prueba.glb');
// createScene('model-canvas-socializacion', 'assets/mitadAlvea/prueba.glb');


document.addEventListener("DOMContentLoaded", function() {
    createScene('model-canvas-turismo', 'assets/mitadAlvea/prueba.glb');
    createScene('model-canvas-patrimonio', 'assets/mitadAlvea/prueba2.glb');
    createScene('model-canvas-comercio', 'assets/mitadAlvea/prueba3.glb');
    createScene('model-canvas-delivery', 'assets/mitadAlvea/prueba 4.glb');
    createScene('model-canvas-entretenimiento', 'assets/mitadAlvea/prueba5.glb');
    createScene('model-canvas-socializacion', 'assets/mitadAlvea/prueba6.glb');
});