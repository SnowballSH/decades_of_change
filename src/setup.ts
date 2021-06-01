import * as THREE from "three";

export default function setupScene() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.5, 2000);

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#cv")! as HTMLCanvasElement
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    return {scene, camera, renderer}
}