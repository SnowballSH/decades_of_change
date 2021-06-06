import './style.css';

import * as THREE from 'three';

import "./helpers";
import setupScene from "./setup";
import textData from "./data";
import {
    addChild1,
    addChild2,
    addEarth,
    addExc,
    addGreed1,
    addLights,
    addMachine1,
    addMars,
    addMigration1,
    addPluto,
    addProtest1,
    addSingleStar,
    addSpace,
    addSpeaker,
    addWomen1
} from "./bg";

import font1Source from "./assets/font1.json";

const {scene, camera, renderer} = setupScene();

const loader = new THREE.FontLoader();

let texts: THREE.Mesh[] = [];

const font1 = loader.parse(font1Source);

textData.forEach(dt => {
    let FontMaterial = new (dt.is2d ? THREE.MeshBasicMaterial : THREE.MeshStandardMaterial)({color: dt.color});

    let geometry = new THREE.TextGeometry(dt.text, {
        font: font1,
        size: dt.size,
        height: dt.is2d ? 0.2 : 0.8,
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
const Mars = addMars(scene);

const Machine1 = addMachine1(scene);
const Migration1 = addMigration1(scene);
const MG1OX = Migration1.position.x;
let mg10xk = -1;

addChild1(scene);
addChild2(scene);
addWomen1(scene);
const Exc = addExc(scene);

addGreed1(scene);
addProtest1(scene);
addSpeaker(scene);

function addBGStuff() {
    for (let i = 0; i < 800; i++) addSingleStar(scene);
}

addBGStuff();

const BreakPoints: BreakPoint[] = [
    {b: -5000, s: -5300},
    {b: -12000, s: -13000},
    {b: -20000, s: -25000},
    {b: -41000, s: -44000},
    {b: -49000, s: -54000},
    {b: -59000, s: -65000},
    {b: -74500, s: -75500},
    {b: -80400, s: -88000},
    {b: -93400, s: -103000},
    {b: -106000, s: -109000},
    {b: -114000, s: -132000},
    {b: -135000, s: -143000},
    {b: -147000, s: -153000},
    {b: -157000, s: -163000},
    {b: -169000, s: -176000},
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

const step5x = step4x;
const step5y = step4y;
const step5z = step4z + (BreakPoints[6].b - BreakPoints[5].s) * 0.08;

const step6x = step5x - (BreakPoints[7].b - BreakPoints[6].s) * 0.06;
const step6y = step5y;
const step6z = step5z;

const step7x = step6x - (BreakPoints[8].b - BreakPoints[7].s) * 0.06;
const step7y = step6y;
const step7z = step6z;

const step8x = step7x;
const step8y = step7y - (BreakPoints[9].b - BreakPoints[8].s) * 0.05;
const step8z = step7z;

const step9x = step8x - (BreakPoints[10].b - BreakPoints[9].s) * 0.06;
const step9y = step8y;
const step9z = step8z;

const step10x = step9x;
const step10y = step9y + (BreakPoints[11].b - BreakPoints[10].s) * 0.05;
const step10z = step9z;

const step11x = step10x;
const step11y = step10y + (BreakPoints[12].b - BreakPoints[11].s) * 0.05;
const step11z = step10z;

const step12x = step11x;
const step12y = step11y + (BreakPoints[13].b - BreakPoints[12].s) * 0.05;
const step12z = step11z;

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
        camera.position.x = step5x;
        camera.position.y = step5y;
        camera.position.z = step5z;
    } else if (t > BreakPoints[7].b) {
        camera.position.x = step5x - (t - BreakPoints[6].s) * 0.06;
        camera.position.y = step5y;
        camera.position.z = step5z;
    } else if (t > BreakPoints[7].s) {
        camera.position.x = step6x;
        camera.position.y = step6y;
        camera.position.z = step6z;
    } else if (t > BreakPoints[8].b) {
        camera.position.x = step6x - (t - BreakPoints[7].s) * 0.06;
        camera.position.y = step6y;
        camera.position.z = step6z;
    } else if (t > BreakPoints[8].s) {
        camera.position.x = step7x;
        camera.position.y = step7y;
        camera.position.z = step7z;
    } else if (t > BreakPoints[9].b) {
        camera.position.x = step7x;
        camera.position.y = step7y - (t - BreakPoints[8].s) * 0.05;
        camera.position.z = step7z;
    } else if (t > BreakPoints[9].s) {
        camera.position.x = step8x;
        camera.position.y = step8y;
        camera.position.z = step8z;
    } else if (t > BreakPoints[10].b) {
        camera.position.x = step8x - (t - BreakPoints[9].s) * 0.06;
        camera.position.y = step8y;
        camera.position.z = step8z;
    } else if (t > BreakPoints[10].s) {
        camera.position.x = step9x;
        camera.position.y = step9y;
        camera.position.z = step9z;
    } else if (t > BreakPoints[11].b) {
        camera.position.x = step9x;
        camera.position.y = step9y + (t - BreakPoints[10].s) * 0.05;
        camera.position.z = step9z;
    } else if (t > BreakPoints[11].s) {
        camera.position.x = step10x;
        camera.position.y = step10y;
        camera.position.z = step10z;
    } else if (t > BreakPoints[12].b) {
        camera.position.x = step10x;
        camera.position.y = step10y + (t - BreakPoints[11].s) * 0.05;
        camera.position.z = step10z;
    } else if (t > BreakPoints[12].s) {
        camera.position.x = step11x;
        camera.position.y = step11y;
        camera.position.z = step11z;
    } else if (t > BreakPoints[13].b) {
        camera.position.x = step11x;
        camera.position.y = step11y + (t - BreakPoints[12].s) * 0.05;
        camera.position.z = step11z;
    } else if (t > BreakPoints[13].s) {
        camera.position.x = step12x;
        camera.position.y = step12y;
        camera.position.z = step12z;
    } else if (t > BreakPoints[14].b) {
        camera.position.x = step12x - (t - BreakPoints[13].s) * 0.05;
        camera.position.y = step12y;
        camera.position.z = step12z;
    } else if (t > BreakPoints[14].s) {
        camera.position.x = step12x - (BreakPoints[14].b - BreakPoints[13].s) * 0.05;

        camera.position.y = step12y;
        camera.position.z = step12z;
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
        window.scrollBy(0, 16);
    }

    Pluto.rotation.x += 0.005;
    Pluto.rotation.y -= 0.0075;
    Pluto.rotation.z += 0.005;

    Earth.rotation.x += 0.007;
    Earth.rotation.y += 0.005;
    Earth.rotation.z -= 0.008;

    Mars.rotation.x += 0.005;
    Mars.rotation.y += 0.005;
    Mars.rotation.z -= 0.008;

    Machine1.rotation.y += 0.005;

    Exc.rotation.y -= 0.005;

    if (MG1OX - 50 === Math.round(Migration1.position.x))
        mg10xk = 1;
    if (MG1OX === Math.round(Migration1.position.x))
        mg10xk = -1;
    Migration1.position.x += 0.1 * mg10xk;

    renderer.render(scene, camera);
}

animate();
