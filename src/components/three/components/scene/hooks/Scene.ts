import { useRef } from "react"
import { Three } from "src/components/three"

export default function Scene() {
  const scene = useRef(new Three.Camera())


  return scene.current
}
