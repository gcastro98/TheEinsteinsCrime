/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Chess_board.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { selectPath } from '../../../Common/Utils';

export function Board(props: any) {
  const { nodes, materials } = useGLTF(`${selectPath()}/board/Board.glb`) as any;
  return (
    <group {...props} dispose={null}>
      <group position={[13, 0.28, -13]} rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial026.geometry} material={materials.lambert1} position={[16.94, -44.47, -15.88]} scale={[0.44, 0.41, 0.41]} />
          <mesh geometry={nodes.defaultMaterial025.geometry} material={materials.lambert1} position={[16.94, -44.47, -15.88]} scale={[0.44, 0.41, 0.41]} />
          <mesh geometry={nodes.defaultMaterial024.geometry} material={materials.lambert1} position={[16.94, -44.47, -15.88]} scale={[0.44, 0.41, 0.41]} />
          <mesh geometry={nodes.defaultMaterial023.geometry} material={materials.lambert1} position={[16.94, -44.47, -15.88]} scale={[0.44, 0.41, 0.41]} />
          <mesh geometry={nodes.defaultMaterial003.geometry} material={materials.lambert1} position={[16.94, -44.47, -15.88]} scale={[0.44, 0.41, 0.41]} />
        </group>
      </group>
      <group position={[13.64, 0.5, -13.25]} rotation={[-Math.PI / 2, 0, 0.28]} scale={0.27}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['low_Material_#57_0'].geometry} material={materials.Material_57} position={[-0.1, 2.69, 0.09]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[12.85, 0.52, -12.19]} rotation={[3.1, 0.29, 0.01]} scale={0}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_4002.geometry} material={materials.material_0} />
      </group>
      <group position={[15.13, 0.28, -14.99]} rotation={[-Math.PI / 2, 0, -0.3]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Industrial_Light_Industrial_Light_Transparent_0.geometry} material={materials.Industrial_Light_Transparent} />
          <mesh geometry={nodes.Industrial_Light_Industrial_Light_0.geometry} material={materials.Industrial_Light} position={[-5.38, 9.31, 1.64]} />
        </group>
      </group>
      <group position={[11.81, 0.47, -15.08]} rotation={[-Math.PI / 2, 0, 0.65]} scale={1.86}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.12, 0]}>
            <mesh geometry={nodes.Object_4005.geometry} material={materials.WorkLight} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.WorkLightGlass} />
          </group>
          <mesh geometry={nodes.Object_7.geometry} material={materials.WorkLight} position={[0.04, 0.09, 0]} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.WorkLight} position={[-0.04, 0.09, 0.01]} />
        </group>
      </group>
      <group position={[13.53, 1.12, -13.39]}>
        <pointLight intensity={0.5} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[13, 0.28, -13]} scale={[13, 0.2, 13]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.ChessBoard} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.chess} />
      </group>
      <mesh geometry={nodes.FenceBottom.geometry} material={materials['Material.002']} position={[14.33, 0.49, -0.02]} rotation={[0, -Math.PI / 2, 0]} scale={[0.21, 0.5, 0.48]} />
      <mesh geometry={nodes.FenceTop.geometry} material={materials['Material.004']} position={[9.13, 0.49, -25.97]} rotation={[0, Math.PI / 2, 0]} scale={[0.21, 0.5, 0.48]} />
      <mesh geometry={nodes.FenceRight.geometry} material={materials['Material.005']} position={[23.58, 0.49, -0.07]} rotation={[0, Math.PI / 2, 0]} scale={[0.21, 0.5, 0.48]} />
      <mesh geometry={nodes.FenceLeft.geometry} material={materials['Material.001']} position={[0.08, 0.48, -9.24]} scale={[0.21, 0.5, 0.47]} />
      <mesh geometry={nodes.FenceRight001.geometry} material={materials['Material.003']} position={[25.92, 0.49, -8.82]} scale={[0.21, 0.5, 0.48]} />
      <mesh geometry={nodes.FenceLeft001.geometry} material={materials['Material.006']} position={[0.02, 0.5, -19.37]} scale={[0.21, 0.5, 0.47]} />
      <mesh geometry={nodes.FenceLeft002.geometry} material={materials['Material.007']} position={[25.92, 0.52, -18.27]} scale={[0.21, 0.5, 0.47]} />
    </group>
  )
}

useGLTF.preload(`${selectPath()}/board/Board.glb`)
