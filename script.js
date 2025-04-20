// Theme Toggle
document.getElementById("theme-toggle").onclick = function () {
    document.body.classList.toggle("dark");
};

// Typing Animation
const text = ["Creative Designer.", "Web Developer.", "3D Enthusiast.", "Portfolio Explorer."];
let index = 0, charIndex = 0;
const typedText = document.getElementById('typed-text');

function type() {
    if (charIndex < text[index].length) {
        typedText.innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.innerHTML = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Particle Background
tsParticles.load("tsparticles", {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    particles: {
        color: { value: "#ffffff" },
        links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.3, width: 1 },
        move: { enable: true, speed: 2, outModes: { default: "bounce" } },
        number: { value: 60, density: { enable: true, area: 800 } },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: 3, random: true }
    }
});

// 3D Model: Wireframe Torus Knot
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    document.getElementById("3d-container").clientWidth / 400,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(document.getElementById("3d-container").clientWidth, 400);
document.getElementById("3d-container").appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(8, 2, 120, 16);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    wireframe: true
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const glowLight = new THREE.PointLight(0x00ffff, 2, 50);
glowLight.position.set(0, 10, 10);
scene.add(glowLight);

const ambientLight = new THREE.AmbientLight(0x222222);
scene.add(ambientLight);

camera.position.z = 30;

// New ADD: Floating Cubes (Tech Style)
const cubes = [];
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    metalness: 0.8,
    roughness: 0.3
});

for (let i = 0; i < 8; i++) {
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
    scene.add(cube);
    cubes.push(cube);
}

// Animate Function
function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.008;

    // Light moving
    glowLight.position.x = Math.sin(Date.now() * 0.001) * 15;
    glowLight.position.y = Math.cos(Date.now() * 0.001) * 15;

    // Cubes floating animation
    cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.y = Math.sin(Date.now() * 0.001 + i) * 5;
    });

    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = document.getElementById("3d-container").clientWidth / 400;
    camera.updateProjectionMatrix();
    renderer.setSize(document.getElementById("3d-container").clientWidth, 400);
});

// New ADD: Background Sound
const bgMusic = new Audio('https://cdn.pixabay.com/download/audio/2023/03/15/audio_3fdbf5057b.mp3?filename=cyberpunk-sci-fi-ambient-144117.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;
window.addEventListener('click', () => {
    if (bgMusic.paused) bgMusic.play();
});
const tracks = document.querySelectorAll('.carousel-track');

tracks.forEach(track => {
    const images = track.innerHTML;
    track.innerHTML += images;  // Duplicate images for seamless loop
});