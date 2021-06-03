import './style.css';

import * as THREE from 'three';

import "./helpers";
import setupScene from "./setup";
import textData from "./data";
import {addChild1, addEarth, addLights, addMachine1, addMigration1, addPluto, addSingleStar, addSpace} from "./bg";

import font1Source from "./assets/font1.json";

const {scene, camera, renderer} = setupScene();

const loader = new THREE.FontLoader();

let texts: THREE.Mesh[] = [];

const font1 = loader.parse(font1Source);

textData.forEach(dt => {
    let FontMaterial = new THREE.MeshStandardMaterial({color: dt.color});

    let geometry = new THREE.TextGeometry(dt.text, {
        font: font1,
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

addLights(scene);

addSpace(scene);

const Pluto = addPluto(scene);
const Earth = addEarth(scene);

const Machine1 = addMachine1(scene);
const Migration1 = addMigration1(scene);
const MG1OX = Migration1.position.x;
let mg10xk = -1;

addChild1(scene);

function addBGStuff() {
    for (let i = 0; i < 500; i++) addSingleStar(scene);
}

addBGStuff();

const BreakPoints: BreakPoint[] = [
    {b: -5000, s: -5300},
    {b: -12000, s: -13000},
    {b: -20000, s: -25000},
    {b: -41000, s: -44000},
    {b: -49000, s: -51000},
    {b: -56000, s: -58000},
    {b: -69000, s: -69000}
];

const step1x = (BreakPoints[1].b - BreakPoints[0].s) * -0.015;
const step1y = (BreakPoints[2].b - BreakPoints[1].s) * 0.02;
const step1z = (BreakPoints[2].b - BreakPoints[1].s) * -0.005;

const step2x = step1x + (BreakPoints[3].b - BreakPoints[2].s) * 0.015;
const step2y = step1y + (BreakPoints[3].b - BreakPoints[2].s) * 0.003;
const step2z = step1z + (BreakPoints[0].b) * -0.01 + (BreakPoints[3].b - BreakPoints[2].s) * 0.0025;

const step3x = step2x + (BreakPoints[4].b - BreakPoints[3].s) * -0.006;
const step3y = step2y;
const step3z = step2z + (BreakPoints[4].b - BreakPoints[3].s) * 0.03;

const step4x = step3x;
const step4y = step3y;
const step4z = step3z + (BreakPoints[5].b - BreakPoints[4].s) * 0.03;

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
        camera.position.x = step1x;
        camera.position.y = 0;
        camera.position.z = BreakPoints[0].b * -0.01;
    } else if (t > BreakPoints[2].b) {
        camera.position.x = step1x;
        camera.position.y = (t - BreakPoints[1].s) * 0.02;
        camera.position.z = (t - BreakPoints[1].s) * -0.005 + (BreakPoints[0].b) * -0.01;
    } else if (t > BreakPoints[2].s) {
        camera.position.x = step1x;
        camera.position.y = step1y;
        camera.position.z = step1z + (BreakPoints[0].b) * -0.01;
    } else if (t > BreakPoints[3].b) {
        camera.position.x = step1x + (t - BreakPoints[2].s) * 0.015;
        camera.position.y = step1y + (t - BreakPoints[2].s) * 0.003;
        camera.position.z = step1z + (BreakPoints[0].b) * -0.01 + (t - BreakPoints[2].s) * 0.0025;
    } else if (t > BreakPoints[3].s) {
        camera.position.x = step2x;
        camera.position.y = step2y;
        camera.position.z = step2z;
    } else if (t > BreakPoints[4].b) {
        camera.position.x = step2x + (t - BreakPoints[3].s) * -0.006;
        camera.position.y = step2y;
        camera.position.z = step2z + (t - BreakPoints[3].s) * 0.03;
    } else if (t > BreakPoints[4].s) {
        camera.position.x = step3x;
        camera.position.y = step3y;
        camera.position.z = step3z;
    } else if (t > BreakPoints[5].b) {
        camera.position.x = step3x;
        camera.position.y = step3y;
        camera.position.z = step3z + (t - BreakPoints[4].s) * 0.03;
    } else if (t > BreakPoints[5].s) {
        camera.position.x = step4x;
        camera.position.y = step4y;
        camera.position.z = step4z;
    } else if (t > BreakPoints[6].b) {
        camera.position.x = step4x;
        camera.position.y = step4y;
        camera.position.z = step4z + (t - BreakPoints[5].s) * 0.08;
    } else if (t > BreakPoints[6].s) {
        camera.position.x = step3x;
        camera.position.y = step3y;
        camera.position.z = step4z + (BreakPoints[6].b - BreakPoints[5].s) * 0.08;
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

resetScrollPos();

function toggleAuto() {
    let box = document.querySelector("#auto")! as HTMLInputElement;
    autoscroll = box.checked;
}

// @ts-ignore
window.toggleAuto = toggleAuto;

let autoscroll = false;

(document.querySelector("#loading")! as HTMLElement).style.display = "none";

function animate() {
    requestAnimationFrame(animate);

    if (autoscroll) {
        window.scrollBy(0, 20);
    }

    Pluto.rotation.x += 0.005;
    Pluto.rotation.y -= 0.0075;
    Pluto.rotation.z += 0.005;

    Earth.rotation.x += 0.007;
    Earth.rotation.y += 0.005;
    Earth.rotation.z -= 0.008;

    Machine1.rotation.y += 0.005;

    if (MG1OX - 50 === Math.round(Migration1.position.x))
        mg10xk = 1;
    if (MG1OX === Math.round(Migration1.position.x))
        mg10xk = -1;
    Migration1.position.x += 0.1 * mg10xk;

    renderer.render(scene, camera);
}

animate();
