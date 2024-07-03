// import * as THREE from '../vendor/three/build/three.module.js';

import THREE from './three.js';
import scene from './Screen.js';
// const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(-0.23324931851256903, 1.8324140151651975, 0.2862530684020239);
camera.lookAt(0, 1, -11);

const renderer = new THREE.WebGLRenderer({antialia: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const lights = new THREE.AmbientLight( 0x404040 ); // soft white light

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
directionalLight.position.set(-10,10,-10);
lights.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.7 );
directionalLight2.position.set(10,-10,10);
lights.add(directionalLight2);

const gridHelper = new THREE.GridHelper( 200, 50 );

// Fondo con imagen 
var loader = new THREE.TextureLoader();

// scene.background = "assets/img/istockphoto-1303973122-170667a.jpg";

loader.load("assets/img/istockphoto-1303973122-170667a.jpg", function (texture) {
    scene.background = texture;
});


scene.background = new THREE.Color("black");
scene.add(lights);
scene.add(gridHelper);

function animate() {

    requestAnimationFrame(animate);


    renderer.render(scene, camera);
}

animate()