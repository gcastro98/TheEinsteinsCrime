


import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

interface IManager{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    renderer: THREE.WebGLRenderer;
}

export function initializeResources(): IManager{
    //Initialize scene
    const scene = new THREE.Scene();
    //Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    camera.position.set(0, 1000, 1000);
    camera.lookAt( scene.position );
   //Initialize renderer
   const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.sortObjects = true;
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.toneMappingExposure = 0;
    
    //Initialize controls
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
    //Add light
    // const ambient = new THREE.AmbientLight(0xcccccc, 5);
    // scene.add(ambient);

    return {scene, camera, controls, renderer};
}

export async function _loadObjectGLTF(uri: string, scene: THREE.Scene[]){
    const loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );
    
    // Load a glTF resource
    loader.load(
      // resource URL
      'res/gltf/'+ uri,
      // called when the resource is loaded
       ( gltf ) => {
        const model = gltf.scene;
        model.traverse((object:any) => {
          if (object.isMesh) object.castShadow = true
        })
        console.log(model);
        scene[0].add(model);
      }
    );
    }

   
