/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\Arrows.glb
*/

import React, { useContext, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { selectPath } from "../../../Utils/Utils";
import { GameContext, useDataByPath, usePosition } from "../../../Services/DataServices";
import { off, onValue, ref } from "firebase/database";
import DataBase from "../../../Services/DataBase";
import {IPosition} from "../../../Services/DataModels";

export function Arrows(props: any) {
  const { game, setGame, userId, active, setActive } = useContext(GameContext);
  const { nodes, materials } = useGLTF(`${selectPath()}/characters/Arrows.glb`) as any;
  // const [position, setPosition] = useDataByPath<IPosition>(props.path, { positionX: 0, positionY: 0 });
  
  const [position, setPosition] = usePosition(props.characterId);
  const [showArrows, setShowArrows] = useState(false);
  
 
  const handleMove = (dx: number, dy: number) => {
    const newPos: IPosition = { positionX: position.positionX + dx, positionY: position.positionY + dy };
    setPosition(newPos);
  };
  const [rotationZ, setRotationZ] = useState(0);

  const nextX = () => {
    handleMove(1, 0);
    setRotationZ(Math.PI / 2);
  };
  const nextY = () => {
    handleMove(0, -1);
    setRotationZ(Math.PI);
  };
  const backX = () => {
    handleMove(-1, 0);
    setRotationZ(-Math.PI / 2);
  };
  const backY = () => {
    handleMove(0, 1);
    setRotationZ(0);
  };
  const XlimitUp = 25;
  const XlimitLess = 0;
  const YlimitUp = 0;
  const YlimitLess = -25;

  return (
    <group position={[position.positionX, 0.4, position.positionY]}>
      <group visible={showArrows}>
      <mesh
        visible={position.positionX < XlimitUp}
        geometry={nodes.right.geometry}
        material={materials.arrow}
        position={[1.15, 0.6, -0.46]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.12}
        onClick={() => nextX()}
      />
      <mesh
        visible={position.positionX > XlimitLess}
        geometry={nodes.left.geometry}
        material={materials.arrow}
        position={[-0.14, 0.6, -0.46]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.12}
        onClick={() => backX()}
      />
      <mesh
        visible={position.positionY < YlimitUp}
        geometry={nodes.back.geometry}
        material={materials.arrow}
        position={[0.5, 0.6, 0.18]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.12}
        onClick={() => backY()}
      />
      <mesh
        visible={position.positionY > YlimitLess}
        geometry={nodes.front.geometry}
        material={materials.arrow}
        position={[0.5, 0.6, -1.11]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.12}
        onClick={() => nextY()}
      />
      </group>
      {props?.character({ rotationZ })}
    </group>
  );
}

useGLTF.preload("./Arrows.glb");
