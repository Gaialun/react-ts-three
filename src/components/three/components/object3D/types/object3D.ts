import { ThreeComponentProps } from "src/components/three/types/Three";
import { AnimationClip, Material } from "three";

export default interface Ojbect3DProps {
  animations?: AnimationClip

  /** 对象是否被渲染到阴影贴图中，默认为false */
  caseShadow?: boolean

  /** 含有对象的子级的数组 */
  _children?: Array<Object>

  customDepthMaterial?: Material

  // /** 只读 - 表示该对象实例Id的唯一数字 */
  // readonly id: number
  // /** 只读，用于检查是否是object3D对象的标志 */
  // readonly isObject3D?: boolean

}

export interface Ojbect3DComponentPorps extends Ojbect3DProps, ThreeComponentProps {

}