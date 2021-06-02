import * as THREE from "three";

import spaceIMG from './assets/space.jpg';
import plutoIMG from './assets/pluto.jpg';
import plutoBumpIMG from './assets/plutobump.jpg';
import earthIMG from './assets/earth.jpg';
import earthBumpIMG from './assets/earthbump.jpg';
import machineIMG1 from './assets/machine1.jpg';

export function addSingleStar(scene: THREE.Scene) {
    const Geometry = new THREE.SphereGeometry(1);
    const Material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const Mesh = new THREE.Mesh(Geometry, Material);
    const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(800));
    Mesh.position.set(x, y, z);
    scene.add(Mesh);
}

export function addSpace(scene: THREE.Scene) {
    scene.background = new THREE.TextureLoader().load(spaceIMG);
}

export function addLights(scene: THREE.Scene) {
    const ambientLight = new THREE.AmbientLight(0xeeeeee);
    scene.add(ambientLight);

    const light = new THREE.PointLight(0xeeeeee);
    light.position.set(100, 0, -50);
    scene.add(light);

    const lightHelper = new THREE.PointLightHelper(light);
    scene.add(lightHelper);
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

export function addMachine1(scene: THREE.Scene) {
    const Picture = new THREE.TextureLoader().load(machineIMG1);
    const Object_ = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, 30),
        new THREE.MeshStandardMaterial({map: Picture})
    );

    Object_.position.set(180, -85, -10);

    scene.add(Object_);

    return Object_
}
