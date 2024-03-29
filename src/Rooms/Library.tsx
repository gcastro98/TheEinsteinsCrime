/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Room_library.gltf
*/

import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { REDUCE_SCALE_DOOR, selectPath } from '../Utils/Utils'

export function Library(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(`${selectPath()}/rooms/Library.glb`) as any
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model006" position={[4.9, 1.88, -25.77]} rotation={[-Math.PI / 2, 0, -1.57]} scale={1.14} />
        <group name="0adb3974f2674c118badb8d20ea2b004fbx002" position={[3.91, 0.58, -22.57]} rotation={[Math.PI / 2, 0, 0]} scale={0}>
          <group name="RootNode006">
            <group name="Bookcase_1_low002" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <group name="Books_low002" />
              <group name="Draw_1_low002" position={[0.03, 0, 0]} />
              <group name="Draw_2_low002" position={[0.02, 0, 0]} />
              <group name="Draw_3_low002" position={[0.01, 0, 0]} />
            </group>
          </group>
        </group>
        <group name="Couch_1" position={[1.75, 0.69, -24.88]} rotation={[-Math.PI / 2, 0, 0]} scale={1.08}>
          <group name="f9bf87deacb14db68f28d7e6139eadd8fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
            <group name="RootNode">
              <group name="legs_geo4" scale={0.39}>
                <mesh name="legs_geo4_wood_mat_0" geometry={nodes.legs_geo4_wood_mat_0.geometry} material={materials.wood_mat} />
              </group>
              <group name="sofa_geo" scale={0.39}>
                <mesh name="sofa_geo_Leather_mat_0" geometry={nodes.sofa_geo_Leather_mat_0.geometry} material={materials.Leather_mat} />
                <mesh name="sofa_geo_Leather_mat_0001" geometry={nodes.sofa_geo_Leather_mat_0001.geometry} material={materials.Leather_mat} />
              </group>
            </group>
          </group>
        </group>
        <group name="front_parlor_mantel_finalobjcleanermaterialmergergles001" position={[1.17, 1.47, -22.4]} rotation={[-1.75, 0.46, -1.08]} scale={0}>
          <mesh name="Object_10001" geometry={nodes.Object_10001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_11001" geometry={nodes.Object_11001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_12001" geometry={nodes.Object_12001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_13001" geometry={nodes.Object_13001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_14001" geometry={nodes.Object_14001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_15001" geometry={nodes.Object_15001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_16001" geometry={nodes.Object_16001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_17001" geometry={nodes.Object_17001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_18001" geometry={nodes.Object_18001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_19001" geometry={nodes.Object_19001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_2001" geometry={nodes.Object_2001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_20001" geometry={nodes.Object_20001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_21001" geometry={nodes.Object_21001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_22001" geometry={nodes.Object_22001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_23001" geometry={nodes.Object_23001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_24001" geometry={nodes.Object_24001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_25001" geometry={nodes.Object_25001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_26001" geometry={nodes.Object_26001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_27001" geometry={nodes.Object_27001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_3001" geometry={nodes.Object_3001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_4001" geometry={nodes.Object_4001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_6001" geometry={nodes.Object_6001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_7001" geometry={nodes.Object_7001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_8001" geometry={nodes.Object_8001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
          <mesh name="Object_9001" geometry={nodes.Object_9001.geometry} material={materials['material_0.001']} position={[-75.77, 23.48, 8.32]} />
        </group>
        <group name="Point" position={[3.54, 2.41, -24.27]} rotation={[1.98, -0.51, 2.44]} scale={0.24} />
        <group name="Sketchfab_model001" position={[1.8, 1.88, -25.78]} rotation={[-Math.PI / 2, 0, -1.57]} scale={1.14}>
          <group name="0adb3974f2674c118badb8d20ea2b004fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode001">
              <group name="Bookcase_1_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <group name="Books_low">
                  <mesh name="Books_low_Books002_0" geometry={nodes.Books_low_Books002_0.geometry} material={materials['Books.002']} />
                </group>
                <group name="Draw_1_low" position={[0.03, 0, 0]}>
                  <mesh name="Draw_1_low_Bookcase001_0" geometry={nodes.Draw_1_low_Bookcase001_0.geometry} material={materials['Bookcase.001']} />
                </group>
                <group name="Draw_2_low" position={[0.02, 0, 0]}>
                  <mesh name="Draw_2_low_Bookcase001_0" geometry={nodes.Draw_2_low_Bookcase001_0.geometry} material={materials['Bookcase.001']} />
                </group>
                <group name="Draw_3_low" position={[0.01, 0, 0]}>
                  <mesh name="Draw_3_low_Bookcase001_0" geometry={nodes.Draw_3_low_Bookcase001_0.geometry} material={materials['Bookcase.001']} />
                </group>
                <mesh name="Bookcase_1_low_Bookcase001_0" geometry={nodes.Bookcase_1_low_Bookcase001_0.geometry} material={materials['Bookcase.001']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model002" position={[3.17, 0.7, -22.83]} rotation={[-Math.PI / 2, 0, -1.57]} scale={1.08}>
          <group name="f9bf87deacb14db68f28d7e6139eadd8fbx001" rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
            <group name="RootNode002">
              <group name="legs_geo4001" scale={0.39}>
                <mesh name="legs_geo4_wood_mat_0001" geometry={nodes.legs_geo4_wood_mat_0001.geometry} material={materials['wood_mat.001']} />
              </group>
              <group name="sofa_geo001" scale={0.39}>
                <mesh name="sofa_geo_Leather_mat_0002" geometry={nodes.sofa_geo_Leather_mat_0002.geometry} material={materials['Leather_mat.001']} />
                <mesh name="sofa_geo_Leather_mat_0003" geometry={nodes.sofa_geo_Leather_mat_0003.geometry} material={materials['Leather_mat.001']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model003" position={[3.82, 1.89, -25.77]} rotation={[-Math.PI / 2, 0, -1.57]} scale={1.13}>
          <group name="0adb3974f2674c118badb8d20ea2b004fbx001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode003">
              <group name="Bookcase_1_low001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <group name="Books_low001">
                  <mesh name="Books_low_Books002_0001" geometry={nodes.Books_low_Books002_0001.geometry} material={materials['Books.001']} />
                </group>
                <group name="Draw_1_low001" position={[0.03, 0, 0]}>
                  <mesh name="Draw_1_low_Bookcase001_0001" geometry={nodes.Draw_1_low_Bookcase001_0001.geometry} material={materials['Bookcase.002']} />
                </group>
                <group name="Draw_2_low001" position={[0.02, 0, 0]}>
                  <mesh name="Draw_2_low_Bookcase001_0001" geometry={nodes.Draw_2_low_Bookcase001_0001.geometry} material={materials['Bookcase.002']} />
                </group>
                <group name="Draw_3_low001" position={[0.01, 0, 0]}>
                  <mesh name="Draw_3_low_Bookcase001_0001" geometry={nodes.Draw_3_low_Bookcase001_0001.geometry} material={materials['Bookcase.002']} />
                </group>
                <mesh name="Bookcase_1_low_Bookcase001_0001" geometry={nodes.Bookcase_1_low_Bookcase001_0001.geometry} material={materials['Bookcase.002']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model004" position={[3.56, 1.84, -24.34]} rotation={[-Math.PI / 2, 0, 0]} scale={0.18}>
          <group name="692ee32a84814259bfecb829c3b13915fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode004">
              <group name="pCylinder6" />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model005" position={[4.99, 0.42, -23.2]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
          <group name="ea16bd4ed87b40cb88f597328f8e0c75fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode005">
              <group name="*GAMEREADY" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="TEXSET_A">
                  <group name="ARMCHAIR" rotation={[0, 0, 0.19]}>
                    <mesh name="ARMCHAIR_TEXSET_A_0" geometry={nodes.ARMCHAIR_TEXSET_A_0.geometry} material={materials.TEXSET_A} position={[-268.23, -131.02, 24.18]} rotation={[0, 0, 2.94]} />
                  </group>
                  <group name="COFFEETABLE" position={[23.31, -100.42, 0]} rotation={[0, 0, 0.07]}>
                    <mesh name="COFFEETABLE_TEXSET_A_0" geometry={nodes.COFFEETABLE_TEXSET_A_0.geometry} material={materials.TEXSET_A} position={[-284.5, 101.49, 24.27]} rotation={[0, 0, -1.68]} />
                  </group>
                  <group name="FLOORLAMP" position={[80.27, 19.27, 138.46]} rotation={[-0.02, 0.05, 0.69]} scale={1.03}>
                    <group name="Object_6" position={[0, 0, -10.32]}>
                      <mesh name="FLOORLAMP_TEXSET_A_0" geometry={nodes.FLOORLAMP_TEXSET_A_0.geometry} material={materials.TEXSET_A} position={[-110.57, 178.18, 14.89]} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model007" position={[5.85, 1.89, -25.78]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[1.08, 1.17, 1.13]}>
          <group name="0adb3974f2674c118badb8d20ea2b004fbx003" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode007">
              <group name="Bookcase_1_low003" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <group name="Books_low003">
                  <mesh name="Books_low_Books002_0003" geometry={nodes.Books_low_Books002_0003.geometry} material={materials['Books.004']} />
                </group>
                <group name="Draw_1_low003" position={[0.03, 0, 0]}>
                  <mesh name="Draw_1_low_Bookcase001_0003" geometry={nodes.Draw_1_low_Bookcase001_0003.geometry} material={materials['Bookcase.004']} />
                </group>
                <group name="Draw_2_low003" position={[0.02, 0, 0]}>
                  <mesh name="Draw_2_low_Bookcase001_0003" geometry={nodes.Draw_2_low_Bookcase001_0003.geometry} material={materials['Bookcase.004']} />
                </group>
                <group name="Draw_3_low003" position={[0.01, 0, 0]}>
                  <mesh name="Draw_3_low_Bookcase001_0003" geometry={nodes.Draw_3_low_Bookcase001_0003.geometry} material={materials['Bookcase.004']} />
                </group>
                <mesh name="Bookcase_1_low_Bookcase001_0003" geometry={nodes.Bookcase_1_low_Bookcase001_0003.geometry} material={materials['Bookcase.004']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model008" position={[7.75, 1.89, -24.4]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[1.2, 1.2, 1.13]}>
          <group name="0adb3974f2674c118badb8d20ea2b004fbx004" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode008">
              <group name="Bookcase_1_low004" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <group name="Books_low004">
                  <mesh name="Books_low_Books002_0002" geometry={nodes.Books_low_Books002_0002.geometry} material={materials['Books.005']} />
                </group>
                <group name="Draw_1_low004" position={[0.03, 0, 0]}>
                  <mesh name="Draw_1_low_Bookcase001_0002" geometry={nodes.Draw_1_low_Bookcase001_0002.geometry} material={materials['Bookcase.005']} />
                </group>
                <group name="Draw_2_low004" position={[0.02, 0, 0]}>
                  <mesh name="Draw_2_low_Bookcase001_0002" geometry={nodes.Draw_2_low_Bookcase001_0002.geometry} material={materials['Bookcase.005']} />
                </group>
                <group name="Draw_3_low004" position={[0.01, 0, 0]}>
                  <mesh name="Draw_3_low_Bookcase001_0002" geometry={nodes.Draw_3_low_Bookcase001_0002.geometry} material={materials['Bookcase.005']} />
                </group>
                <mesh name="Bookcase_1_low_Bookcase001_0002" geometry={nodes.Bookcase_1_low_Bookcase001_0002.geometry} material={materials['Bookcase.005']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model009" position={[5.56, 0.58, -22.99]} rotation={[-Math.PI / 2, 0, 0]} scale={0.33}>
          <group name="692ee32a84814259bfecb829c3b13915fbx001" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode009">
              <group name="pCylinder6001">
                <mesh name="pCylinder6_blinn1_0" geometry={nodes.pCylinder6_blinn1_0.geometry} material={materials['blinn1.001']} position={[0.18, 0.47, -0.5]} rotation={[0, 0.75, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model010" position={[4.68, 0.71, -23.29]} rotation={[-Math.PI / 2, 0, 1.33]} scale={0.98}>
          <group name="ca9c4adc705d486294c90ee87d8b7cc7fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode010">
              <group name="victorian_chair_cloth" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="victorian_chair_cloth_cloth_0" geometry={nodes.victorian_chair_cloth_cloth_0.geometry} material={materials.cloth} />
              </group>
              <group name="victorian_chair_wood" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="victorian_chair_wood_wood_0" geometry={nodes.victorian_chair_wood_wood_0.geometry} material={materials.wood} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model011" position={[6.73, 0.71, -23.76]} rotation={[-Math.PI / 2, 0, -0.45]} scale={0.99}>
          <group name="ca9c4adc705d486294c90ee87d8b7cc7fbx001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode011">
              <group name="victorian_chair_cloth001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="victorian_chair_cloth_cloth_0001" geometry={nodes.victorian_chair_cloth_cloth_0001.geometry} material={materials['cloth.001']} />
              </group>
              <group name="victorian_chair_wood001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="victorian_chair_wood_wood_0001" geometry={nodes.victorian_chair_wood_wood_0001.geometry} material={materials['wood.001']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model012" position={[0.42, 1.34, -20.96]} rotation={[0.47, 1.18, 2.7]} scale={0.06}>
          <group name="MonaLisaobjcleanergles" position={[-6.03, -20.57, -3.22]} />
        </group>
        <group name="Sketchfab_model013" position={[0.87, 0.09, -23.31]} rotation={[-Math.PI / 2, 0, 1.57]} scale={0.36}>
          <group name="14b59550f9d940eba8b487ab21696651objcleanermaterialmergergle" position={[-3.56, 2.19, 1.37]} />
        </group>
        <group name="Sketchfab_model014" position={[4.75, 0.58, -19.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.26, 0.32, 0.24]}>
          <group name="14b59550f9d940eba8b487ab21696651objcleanermaterialmerger" />
        </group>
        <group name="Sketchfab_model019" position={[3.38, 0.58, -22.73]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
          <group name="Oil_on_Canvus_of_Caroline_Scott_Harrison_-_Previewobjcleaner">
            <mesh name="Object_2004" geometry={nodes.Object_2004.geometry} material={materials['material_0.002']} position={[-1375.26, -745.17, 355.98]} />
          </group>
        </group>
        <group name="Sketchfab_model020" position={[8.01, 0.52, -21.48]} rotation={[-Math.PI / 2, 0, -1.57]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2002">
              <group name="RootNode012">
                <group name="Cube000" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 1.78]} scale={100}>
                  <group name="Cube002" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0" geometry={nodes.Cube002__0.geometry} material={materials['Cube.000__0']} />
                  </group>
                  <mesh name="Cube000__0" geometry={nodes.Cube000__0.geometry} material={materials['Cube.000__0']} />
                </group>
                <group name="Cube001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0" geometry={nodes.Cube001__0.geometry} material={materials['Cube.000__0']} position={[0, 0.06, -0.02]} scale={[1, 0.74, 1]} />
                </group>
                <group name="Cube003" position={[0, 100, 9.27]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 100, 100]} />
                <group name="Cube004" position={[0, 100, -9.44]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[10, 100, 100]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model021" position={[4.6, 0.6, -20.08]} rotation={[-Math.PI / 2, 0, 3.14]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx001" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2003">
              <group name="RootNode013">
                <group name="Cube009" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Cube008" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0001" geometry={nodes.Cube002__0001.geometry} material={materials['Cube.000__0.001']} />
                  </group>
                  <mesh name="Cube000__0001" geometry={nodes.Cube000__0001.geometry} material={materials['Cube.000__0.001']} />
                </group>
                <group name="Cube005" position={[0, 100, -9.44]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[10, 100, 100]} />
                <group name="Cube006" position={[0, 100, 9.27]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 100, 100]} />
                <group name="Cube007" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0001" geometry={nodes.Cube001__0001.geometry} material={materials['Cube.000__0.001']} position={[-0.02, 0.07, -0.13]} scale={[1, 0.64, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="LampLeft" position={[3.6, 2.87, -19.79]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
          <group name="Collada_visual_scene_group001" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder001">
              <mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={materials['Material.003']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight" position={[5.58, 2.88, -19.8]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
          <group name="Collada_visual_scene_group" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder028">
              <mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['Material.001']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampLeft001" position={[8.3, 2.87, -20.48]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group003" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder003">
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials['Material.004']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft001" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft001_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight001" position={[8.3, 2.88, -22.46]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group002" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder002">
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials['Material.002']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight001" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight001_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="Room" position={[3.98, 0.55, -23.09]} rotation={[0, Math.PI / 2, 0]} scale={[3, 1, 4]}>
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.Floor} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials.OutsideWall} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials.MiddleWall} />
          <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={materials.CarpetInsideWall} />
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/models/rooms/Room_library.gltf')
