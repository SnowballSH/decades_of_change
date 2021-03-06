import * as THREE from "three";

import spaceIMG from './assets/space.jpg';
import plutoIMG from './assets/pluto.jpg';
import plutoBumpIMG from './assets/plutobump.jpg';
import earthIMG from './assets/earth.jpg';
import earthBumpIMG from './assets/earthbump.jpg';
import marsIMG from './assets/mars.jpg';
import marsBumpIMG from './assets/marsbump.jpg';
import machineIMG1 from './assets/machine1.jpg';
import migrationIMG1 from './assets/migration1.jpg';
import childIMG1 from './assets/child1.jpg';
import childIMG2 from './assets/child2.jpg';
import womenIMG1 from './assets/women1.jpg';
import exc from './assets/exc.png';
import greedIMG1 from './assets/greed1.jpg';
import protestIMG1 from './assets/protest1.jpg';
import speaker from './assets/speaker.jpg';

export function addSingleStar(scene: THREE.Scene) {
    const Geometry = new THREE.SphereGeometry(1);
    const Material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const Mesh = new THREE.Mesh(Geometry, Material);
    let [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(1500));
    z -= 1000;
    x -= 500;
    y -= 600;
    Mesh.position.set(x, y, z);
    scene.add(Mesh);
}

export function addSpace(scene: THREE.Scene) {
    scene.background = new THREE.TextureLoader().load(spaceIMG);
}

export function addLights(scene: THREE.Scene) {
    const ambientLight = new THREE.AmbientLight(0xeeeeee);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xeeeeee, 0.3);
    light1.position.set(100, 0, -50);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xeeeeee, 0.3);
    light2.position.set(-120, -70, -140);
    scene.add(light2);

    const lightHelper1 = new THREE.PointLightHelper(light1);
    const lightHelper2 = new THREE.PointLightHelper(light2);
    scene.add(lightHelper1, lightHelper2);
}

export function addPluto(scene: THREE.Scene) {
    const PlanetTexture = new THREE.TextureLoader().load(plutoIMG);
    const NormalTexture = new THREE.TextureLoader().load(plutoBumpIMG);
    const Planet = new THREE.Mesh(
        new THREE.SphereGeometry(25, 32, 32),
        new THREE.MeshStandardMaterial({
            map: PlanetTexture,
            normalMap: NormalTexture,
        })
    );

    Planet.position.set(-10, -125, -60);

    scene.add(Planet);

    return Planet;
}

export function addEarth(scene: THREE.Scene) {
    const PlanetTexture = new THREE.TextureLoader().load(earthIMG);
    const NormalTexture = new THREE.TextureLoader().load(earthBumpIMG);
    const Planet = new THREE.Mesh(
        new THREE.SphereGeometry(35, 32, 32),
        new THREE.MeshStandardMaterial({
            map: PlanetTexture,
            normalMap: NormalTexture,
        })
    );

    Planet.position.set(180, 35, -80);

    scene.add(Planet);

    return Planet;
}

export function addMars(scene: THREE.Scene) {
    const PlanetTexture = new THREE.TextureLoader().load(marsIMG);
    const NormalTexture = new THREE.TextureLoader().load(marsBumpIMG);
    const Planet = new THREE.Mesh(
        new THREE.SphereGeometry(35, 32, 32),
        new THREE.MeshStandardMaterial({
            map: PlanetTexture,
            normalMap: NormalTexture,
        })
    );

    Planet.position.set(900, 0, -1140);

    scene.add(Planet);

    return Planet;
}

export function addMachine1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(machineIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.BoxGeometry(100 / 2, 65 / 2, 100 / 2),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(190, -165, -20);

    scene.add(Object_);

    return Object_;
}

export function addMigration1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(migrationIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(144 / 2, 90 / 2),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(-130, -150, -45);

    scene.add(Object_);

    return Object_;
}

export function addChild1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(childIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(90 / 2, 67 / 2),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(-160, -220, -180);

    scene.add(Object_);

    return Object_;
}

export function addChild2(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(childIMG2);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(64 / 1.5, 48 / 1.5),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(-120, -220, -330);

    scene.add(Object_);

    return Object_;
}

export function addWomen1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(womenIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(120 / 2, 94 / 2),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(150, -160, -1100);

    scene.add(Object_);

    return Object_;
}

export function addExc(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(exc);
    const Object_ = new THREE.Mesh(
        new THREE.BoxGeometry(295 / 20, 512 / 20, 295 / 20),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(390, -190, -1100);

    scene.add(Object_);

    return Object_;
}

export function addGreed1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(greedIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(206 / 3.4, 175 / 3.4),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(500, -65, -1100);

    scene.add(Object_);

    return Object_;
}

export function addProtest1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(protestIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(128 / 1.5, 72 / 1.5),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(805, -560, -1100);

    scene.add(Object_);

    return Object_;
}

export function addSpeaker(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(speaker);
    const Object_ = new THREE.Mesh(
        new THREE.PlaneGeometry(200 / 3, 133 / 3),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(1190, -610, -1100);

    scene.add(Object_);

    return Object_;
}
