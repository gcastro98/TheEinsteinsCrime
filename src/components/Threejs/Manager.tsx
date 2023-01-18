import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { movement } from './Controls/Character_movement';
import {initializeResources, _loadObjectGLTF} from './Loader/Loader';

export default class Manager extends React.Component{
    private scene : THREE.Scene;
    private camera : THREE.PerspectiveCamera;
    private renderer : THREE.WebGLRenderer;
    private controls : OrbitControls;

    constructor(props: any){
        super(props);
        const res = initializeResources();
        this.scene = res.scene;
        this.camera = res.camera;
        this.renderer = res.renderer;
        this.controls = res.controls;
    }
  
    public async componentDidMount(){
        // await _loadObjectGLTF('Tesla_character.gltf', [this.scene]);
        await _loadObjectGLTF('Board.glb', [this.scene]);
        console.log(this.scene); 
        this.animationManager();
        this.controlManager();
        document.body.appendChild(this.renderer.domElement); 
        movement(this.scene);
    }

    public animation() {
       const animate = () => {
            requestAnimationFrame(animate);
            this.controls.update()
            this.renderer.render(this.scene, this.camera);
          }
          animate()
    }

    public animationManager() {
      this.animation();
    }

    public controlManager() {
      window.addEventListener('resize', ()=>{
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
      })
    }
    public render(){
        return null;
    }
}

