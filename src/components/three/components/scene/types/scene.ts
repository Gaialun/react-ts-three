import { ThreeComponentProps } from "src/components/three/types/Three";
import { Color, Texture } from "three";


type SceneBackground = Color | Texture | null

export interface SceneProps {
  background?: SceneBackground
  backgroundBlurriness?: number
}

export interface SceneComponentProps extends ThreeComponentProps, SceneProps {

}