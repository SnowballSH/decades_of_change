import './style.css';

import * as THREE from 'three';

import "./helpers";
import setupScene from "./setup";
import textData from "./data";
import {addEarth, addLights, addPluto, addSingleStar, addSpace} from "./bg";

const {scene, camera, renderer} = setupScene();

const FONT_NAME = "/font1.json";

const loader = new THREE.FontLoader();

let texts: THREE.Mesh[] = [];

let doneLoading = false;

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
    doneLoading = true;
});

addLights(scene);

addSpace(scene);

const Pluto = addPluto(scene);
const Earth = addEarth(scene);

function addBGStuff() {
    for (let i = 0; i < 500; i++) addSingleStar(scene);
}

addBGStuff();

const BreakPoints: BreakPoint[] = [
    {b: -5000, s: -5300},
    {b: -12000, s: -13000},
    {b: -20000, s: -25000},
    {b: -28000, s: -30000}
];

const step1x = (BreakPoints[1].b - BreakPoints[0].s) * -0.015;
const step1y = (BreakPoints[2].b - BreakPoints[1].s) * 0.02;
const step1z = (BreakPoints[2].b - BreakPoints[1].s) * -0.005;

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
        camera.position.y = step1y;
        camera.position.z = step1z + (BreakPoints[0].b) * -0.01;
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

function animate() {
    requestAnimationFrame(animate);

    if (doneLoading) {
        if (autoscroll) {
            window.scrollBy(0, 20);
        }

        Pluto.rotation.x += 0.005;
        Pluto.rotation.y += 0.0075;
        Pluto.rotation.z += 0.005;

        Earth.rotation.x += 0.007;
        Earth.rotation.y += 0.005;
        Earth.rotation.z += 0.008;

        renderer.render(scene, camera);
    }
}

animate();
