import { useRef } from "react";
import { Three } from "src/components/three";
import CameraProps from "../types/camera";

export default function useCamera(props?: CameraProps) {
  const camera = useRef(new Three.Camera())

  return camera.current
}
