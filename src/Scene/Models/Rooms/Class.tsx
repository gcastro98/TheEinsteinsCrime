/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Room_class.gltf
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import {  selectPath } from '../../../Common/Utils/Utils'
import { REDUCE_SCALE_DOOR, SCENE_LIGHT_INTENSITY} from '../Modifiers'

export function Class(props: any) {
  const group = useRef()
  const { nodes, materials } =  useGLTF(`${selectPath()}/rooms/Class.glb`) as any

  return (
    <group {...props} dispose={null}>
      <group position={[23.25, 0.57, -21.41]} rotation={[0, -0.01, 0]} scale={0.1}>
        <group position={[-44.76, 3.81, -38.5]} rotation={[-Math.PI / 2, 0, 0]} scale={4.14}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[0, -1.63, 0]} scale={[1.31, 1.31, 1]}>
              <group position={[1922.07, 7.62, 37.6]}>
                <mesh geometry={nodes.Mesh_1.geometry} material={materials.Material_42} />
                <mesh geometry={nodes.Mesh_1_1.geometry} material={materials.Material_43} />
                <mesh geometry={nodes.Mesh_1_2.geometry} material={materials.Material_44} />
                <mesh geometry={nodes.Mesh_1_3.geometry} material={materials.Material_45} />
                <mesh geometry={nodes.Mesh_1_4.geometry} material={materials.Material_46} />
                <mesh geometry={nodes.Mesh_1_5.geometry} material={materials.Material_53} />
                <mesh geometry={nodes.Mesh_1_6.geometry} material={materials.Material_54} />
                <mesh geometry={nodes.Mesh_1_7.geometry} material={materials.Material_55} />
                <mesh geometry={nodes.Mesh_1_8.geometry} material={materials.Material_56} />
                <mesh geometry={nodes.Mesh_1_9.geometry} material={materials.Material_57} />
                <mesh geometry={nodes.Mesh_1_10.geometry} material={materials.Material_58} />
                <mesh geometry={nodes.Mesh_1_11.geometry} material={materials.Material_59} />
                <mesh geometry={nodes.Mesh_1_12.geometry} material={materials.Material_62} />
                <mesh geometry={nodes.Mesh_1_13.geometry} material={materials.Material_63} />
                <mesh geometry={nodes.Mesh_1_14.geometry} material={materials.Material_66} />
                <mesh geometry={nodes.Mesh_1_15.geometry} material={materials['Material_6.001']} />
                <mesh geometry={nodes.Mesh_1_16.geometry} material={materials.Material_67} />
                <mesh geometry={nodes.Mesh_1_17.geometry} material={materials.Material_68} />
                <mesh geometry={nodes.Mesh_1_18.geometry} material={materials.Material_69} />
                <mesh geometry={nodes.Mesh_1_19.geometry} material={materials.Material_71} />
                <mesh geometry={nodes.Mesh_1_20.geometry} material={materials.Material_72} />
                <mesh geometry={nodes.Mesh_1_21.geometry} material={materials.Material_76} />
                <mesh geometry={nodes.Mesh_1_22.geometry} material={materials.Material_77} />
                <mesh geometry={nodes.Mesh_1_23.geometry} material={materials.Material_78} />
                <mesh geometry={nodes.Mesh_1_24.geometry} material={materials['Material_19.001']} />
                <mesh geometry={nodes.Mesh_1_25.geometry} material={materials.Board_einstein} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[17.05, 0.54, -22.48]} rotation={[-Math.PI / 2, 0, 1.57]} scale={0.01 * REDUCE_SCALE_DOOR}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube001__0.geometry} material={materials['Cube.000__0.001']} position={[0, 0.05, 0]} scale={[1, 0.86, 1]} />
          </group>
        </group>
      </group>
      <group position={[20.5, 0.54, -19.04]} rotation={[-Math.PI / 2, 0, 3.14]} scale={0.01 * REDUCE_SCALE_DOOR}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube001__0001.geometry} material={materials['Cube.000__0.002']} position={[0, 0.06, 0]} scale={[1, 0.7, 1]} />
          </group>
        </group>
      </group>
      <group position={[19.55, 2.8, -18.78]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial001.geometry} material={materials['Material.002']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[21.53, 2.81, -18.78]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['Material.001']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[16.76, 2.8, -23.47]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial003.geometry} material={materials['Material.007']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[16.76, 2.81, -21.49]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial002.geometry} material={materials['Material.006']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[21.6, 0.57, -22.57]} rotation={[0, Math.PI / 2, 0]} scale={[3.5, 1, 4.5]}>
        <mesh geometry={nodes.Plane001.geometry} material={materials['Floor.001']} />
        <mesh geometry={nodes.Plane001_1.geometry} material={materials.OutsideWall} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials.InsideWall} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials.MiddleWall} />
      </group>
      <mesh geometry={nodes.Cube002__0001.geometry} material={materials['Cube.000__0.002']} />
    </group>
  )
}

useGLTF.preload(`${selectPath()}/rooms/Class.glb`)