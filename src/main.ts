import './style.css';

import * as THREE from 'three';

import "./helpers";
import setupScene from "./setup";
import textData from "./data";

const {scene, camera, renderer} = setupScene();

const FONT_NAME = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/gentilis_bold.typeface.json";

const loader = new THREE.FontLoader();

let texts: THREE.Mesh[] = [];

loader.load(FONT_NAME, function (font) {
    textData.forEach(dt => {
        let FontMaterial = new THREE.MeshStandardMaterial({color: dt.color});

        let geometry = new THREE.TextGeometry(dt.text, {
            font: font,
            size: dt.size,
            height: 1,
            curveSegments: 8,
        });

        let text = new THREE.Mesh(geometry, FontMaterial);

        text.position.setX(dt.x);
        text.position.setY(dt.y);
        text.position.setZ(dt.z);

        scene.add(text);
        texts.push(text);
    });
});

const ambientLight = new THREE.AmbientLight(0xeeeeee);
scene.add(ambientLight);

const light = new THREE.PointLight(0xeeeeee);
light.position.set(100, 0, -50);
scene.add(light);

const lightHelper = new THREE.PointLightHelper(light);
scene.add(lightHelper);

const BreakPoints: BreakPoint[] = [
    {b: -5000, s: -5300},
    {b: -12000, s: -13000},
    {b: -20000, s: -22000},
    {b: -25000, s: -26000}
]

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    if (1 + 1 !== 2) {
    } else if (t > BreakPoints[0].b) {
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = t * -0.01;
    } else if (t > BreakPoints[0].s) {
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = BreakPoints[0].b * -0.01;
    } else if (t > BreakPoints[1].b) {
        camera.position.x = (t - BreakPoints[0].s) * -0.015;
        camera.position.y = 0;
        camera.position.z = BreakPoints[0].b * -0.01;
    } else if (t > BreakPoints[1].s) {
        camera.position.x = (BreakPoints[1].b - BreakPoints[0].s) * -0.015;
        camera.position.y = 0;
        camera.position.z = BreakPoints[0].b * -0.01;
    } else if (t > BreakPoints[2].b) {
        camera.position.x = (BreakPoints[1].b - BreakPoints[0].s) * -0.015;
        camera.position.y = (t - BreakPoints[1].s) * 0.02;
        camera.position.z = (t - BreakPoints[1].s) * -0.005 + (BreakPoints[0].b) * -0.01;
    } else if (t > BreakPoints[2].s) {
        camera.position.x = (BreakPoints[1].b - BreakPoints[0].s) * -0.015;
        camera.position.y = (BreakPoints[2].b - BreakPoints[1].s) * 0.02;
        camera.position.z = (BreakPoints[2].b - BreakPoints[1].s) * -0.005 + (BreakPoints[0].b) * -0.01;
    } else if (t > BreakPoints[3].b) {
        camera.position.x = (BreakPoints[1].b - BreakPoints[0].s) * -0.015;
        camera.position.y = (BreakPoints[2].b - BreakPoints[1].s) * 0.02;
        camera.position.z = (BreakPoints[2].b - BreakPoints[1].s) * -0.005 + (BreakPoints[0].b) * -0.01;
    }

    // console.log(t);
}

window.onscroll = moveCamera;
moveCamera();

function resetScrollPos() {
    window.scrollTo(0, 0);
    camera.position.z = 0;
    camera.position.y = 0;
    camera.position.x = 0;
    moveCamera();
}

// @ts-ignore
window.resetScrollPos = resetScrollPos;

resetScrollPos()

function toggleAuto() {
    let box = document.querySelector("#auto")! as HTMLInputElement;
    autoscroll = box.checked;
}

// @ts-ignore
window.toggleAuto = toggleAuto;

let autoscroll = false;

function animate() {
    requestAnimationFrame(animate);

    if (autoscroll) {
        window.scrollBy(0, 20);
    }

    renderer.render(scene, camera);
}

animate();
