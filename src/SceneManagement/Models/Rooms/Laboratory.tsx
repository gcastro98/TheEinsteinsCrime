/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\Laboratory.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { REDUCE_SCALE_DOOR, selectPath } from '../../../Utils/Utils'

export function Laboratory(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(`${selectPath()}/rooms/Laboratory.glb`) as any;
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Class">
        <group name="BaseLaboratory" position={[25.93, 0.46, -26.28]} rotation={[0, -Math.PI / 2, 0]} scale={0.1}>
          <group name="Circle004_55" position={[19.95, 1.32, 18.71]} scale={0.64}>
            <group name="Cylinder004_51" position={[-1.67, 0.74, 4.02]} rotation={[0, -0.41, -Math.PI / 2]} scale={[0.51, 0.18, 0.45]}>
              <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.black} />
            </group>
            <group name="Plane018_54" position={[0.15, 8.07, 0.01]} rotation={[0, -0.4, 0]} scale={[4.36, 4.36, 4.13]}>
              <group name="Plane019_52" position={[1.11, 1.26, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.56, 1, 0.8]}>
                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials['fabric-red']} />
              </group>
              <group name="Plane020_53" position={[1.11, 1.26, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 0.18, 0.19]}>
                <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.metallic} />
              </group>
              <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials['fabric-red']} />
            </group>
            <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.metallic} />
          </group>
          <group name="Circle013_42" position={[12.7, 1.51, 42.1]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={0.24}>
            <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.metallic_dark} />
          </group>
          <group name="Cube001_88" position={[11.69, 1.74, 20.36]} scale={0.33}>
            <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.metallic_2} />
          </group>
          <group name="Cube002_89" position={[8.95, 4.19, 7.45]} scale={[4.4, 2.77, 2.77]}>
            <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials['white.004']} />
          </group>
          <group name="Cube004_90" position={[8.95, 4.19, 7.45]} scale={[4.4, 2.77, 2.77]}>
            <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.metallic} />
          </group>
          <group name="Cube005_91" position={[8.95, 4.19, 7.45]} scale={[4.4, 2.77, 2.77]}>
            <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.light_blue} />
          </group>
          <group name="Cylinder002_6" position={[9.26, 6.9, 48.97]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={4.68} />
          <group name="Cylinder006_48" position={[9.26, 6.9, 48.97]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={4.68}>
            <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['light_yellow.001']} />
          </group>
          <group name="Cylinder008_43" position={[9.26, 6.9, 48.97]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={4.68}>
            <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.glass} />
          </group>
          <group name="Cylinder_38" position={[9.26, 6.9, 48.97]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={4.68}>
            <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.metallic} />
            <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.metallic} />
            <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.metallic} />
          </group>
          <group name="Plane001_39" position={[9.34, 1.34, 48.88]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={5.62}>
            <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.metallic} />
          </group>
          <group name="Plane004_75" position={[4.86, 1.43, 31.83]} scale={[0.44, 2.77, 5.52]} />
          <group name="Plane005_44" position={[9.27, 1.87, 43.26]} rotation={[Math.PI / 2, 0, 3.13]} scale={[0.96, 0.96, 0.52]}>
            <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.metallic_2} />
          </group>
          <group name="Plane007_5" position={[6.82, 17.57, 10.06]} scale={[2.16, 2.77, 5.32]}>
            <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Material} />
          </group>
          <group name="Plane008_56" position={[8.28, 9.32, 10.71]} rotation={[0, -0.45, 0]} scale={[1.59, 1.98, 1.98]}>
            <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.white} />
          </group>
          <group name="Plane009_59" position={[9.46, 9.3, 6]} scale={[2.77, 2.77, 1.29]}>
            <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials['white.006']} />
          </group>
          <group name="Plane010_40" position={[7.43, 1.4, 32.58]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={2.83}>
            <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.metallic_2} />
          </group>
          <group name="Plane021_20" position={[7.02, 17.93, 11.79]} scale={[1.46, 2.77, 2.54]}>
            <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.metallic} />
          </group>
          <group name="Plane022_58" position={[8.04, 9.3, 18.98]} rotation={[0, 0.69, 0]} scale={[1.76, 0.97, 2.51]}>
            <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials['white.005']} />
          </group>
          <group name="Plane023_21" position={[6.88, 17.93, 5.54]} scale={[1.82, 2.77, 0.46]}>
            <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.metallic_2} />
          </group>
          <group name="Plane024_22" position={[6.88, 17.93, 6.64]} scale={[1.82, 2.77, 0.46]}>
            <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.metallic_2} />
          </group>
          <group name="Plane025_77" position={[5.94, 1.43, 31.83]} scale={6.4} />
          <group name="Plane026_41" position={[14.17, 1.41, 43.54]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={1.97}>
            <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.metallic_2} />
          </group>
          <group name="Plane027_78" position={[4.86, 1.43, 31.83]} scale={[0.44, 2.77, 5.52]} />
          <group name="Plane029_24" position={[4.41, 2.43, 22.95]} rotation={[0, 0, -Math.PI / 2]} scale={0.83}>
            <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.floor} />
          </group>
          <group name="Plane031_63" position={[11.22, 9.3, 14.53]} rotation={[0, 1.12, 0]} scale={1.75}>
            <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.white} />
          </group>
          <group name="Plane032_64" position={[8.04, 9.3, 18.98]} rotation={[0, 0.69, 0]} scale={[1.76, 0.97, 2.51]}>
            <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.black} />
          </group>
          <group name="Plane033_65" position={[8.04, 9.3, 18.98]} rotation={[0, 0.69, 0]} scale={[1.76, 0.97, 2.51]}>
            <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.gray} />
          </group>
          <group name="Plane034_66" position={[11.22, 9.3, 14.53]} rotation={[0, 1.12, 0]} scale={1.75}>
            <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.gray} />
          </group>
          <group name="Plane035_67" position={[11.22, 9.3, 14.53]} rotation={[0, 1.12, 0]} scale={1.75}>
            <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.light_green} />
          </group>
          <group name="Plane036_68" position={[8.28, 9.32, 10.71]} rotation={[0, -0.45, 0]} scale={[1.59, 1.98, 1.98]}>
            <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.black} />
          </group>
          <group name="Plane037_69" position={[8.04, 9.3, 18.98]} rotation={[0, 0.69, 0]} scale={[1.76, 0.97, 2.51]}>
            <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials.gray} />
          </group>
          <group name="Plane038_70" position={[9.46, 9.3, 6]} scale={[2.77, 2.77, 1.29]}>
            <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.light_blue} />
          </group>
          <group name="Plane039_79" position={[4.86, 1.43, 31.83]} scale={[0.44, 2.77, 5.52]} />
          <group name="Plane040_80" position={[4.86, 1.43, 31.83]} scale={[0.44, 2.77, 5.52]} />
          <group name="Plane041_71" position={[8.04, 9.3, 18.98]} rotation={[0, 0.69, 0]} scale={[1.76, 0.97, 2.51]}>
            <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials.gray} />
          </group>
          <group name="Plane042_47" position={[7.43, 1.4, 32.58]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={2.83}>
            <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.light_yellow} />
          </group>
          <group name="Plane043_34" position={[7.02, 17.93, 11.79]} scale={[1.46, 2.77, 2.54]}>
            <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.light_blue} />
          </group>
          <group name="Plane_87" position={[8.94, 7.89, 13.44]} scale={[4.44, 4.44, 8.79]}>
            <mesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials['gray.002']} />
          </group>
          <group name="Vert009_49" position={[9.74, 1.67, 42.51]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={2.77}>
            <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.black} />
          </group>
          <group name="Vert010_50" position={[9, 1.67, 43.14]} rotation={[-Math.PI, -0.01, -Math.PI]} scale={2.77}>
            <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.black} />
          </group>
          <group name="Vert011_72" position={[6.68, 9.62, 4.98]} scale={2.77}>
            <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials.black} />
          </group>
          <group name="Vert012_73" position={[10.31, 9.45, 14.08]} scale={2.77}>
            <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.black} />
          </group>
          <group name="Vert013_74" position={[6.39, 12.06, 8.95]} scale={2.77}>
            <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials.black} />
          </group>
        </group>
        <group name="DoorGroup" position={[19.99, 0.51, -21.47]} rotation={[-Math.PI / 2, 0, -1.57]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2001">
              <group name="RootNode001">
                <group name="Cube000" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Cube002" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0" geometry={nodes.Cube002__0.geometry} material={materials['Cube.000__0']} />
                  </group>
                  <mesh name="Cube000__0" geometry={nodes.Cube000__0.geometry} material={materials['Cube.000__0']} />
                </group>
                <group name="Cube001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0" geometry={nodes.Cube001__0.geometry} material={materials['Cube.000__0']} position={[0, 0.07, -0.03]} scale={[1, 0.64, 1]} />
                </group>
                <group name="Cube003" position={[0, 100, 9.27]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 100, 100]} />
                <group name="Cube004" position={[0, 100, -9.44]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[10, 100, 100]} />
              </group>
            </group>
          </group>
        </group>
        <group name="LampLeft" position={[19.8, 2.77, -22.52]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group001" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder001">
              <mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft_Orientation" intensity={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight" position={[19.8, 2.78, -20.54]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder028">
              <mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['Material.011']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight_Orientation" intensity={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampLeft001" position={[21.5, 2.77, -17.8]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
          <group name="Collada_visual_scene_group003" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder003">
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials['Material.014']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft001" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft001_Orientation" intensity={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight001" position={[23.48, 2.78, -17.8]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
          <group name="Collada_visual_scene_group002" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder002">
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials['Material.013']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight001" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight001_Orientation" intensity={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="DoorGroup001" position={[22.49, 0.51, -18.08]} rotation={[-Math.PI / 2, 0, 3.14]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx001" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2002">
              <group name="RootNode002">
                <group name="Cube009" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Cube008" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0001" geometry={nodes.Cube002__0001.geometry} material={materials['Cube.000__0.001']} />
                  </group>
                  <mesh name="Cube000__0001" geometry={nodes.Cube000__0001.geometry} material={materials['Cube.000__0.001']} />
                </group>
                <group name="Cube005" position={[0, 100, -9.44]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[10, 100, 100]} />
                <group name="Cube006" position={[0, 100, 9.27]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 100, 100]} />
                <group name="Cube007" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0001" geometry={nodes.Cube001__0001.geometry} material={materials['Cube.000__0.001']} position={[0, 0.07, -0.03]} scale={[1, 0.83, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Room" position={[23.09, 0.53, -22.12]} scale={[3, 1, 4]}>
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Floor.001']} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials.OutsideWall} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials.InsideWall} />
          <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={materials.MiddleWall} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(`${selectPath()}/rooms/Laboratory.glb`)