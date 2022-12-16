import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function DrawALine() {
  const box = useRef({} as HTMLDivElement)
  useEffect(()=>{
    /* 先创建一个渲染器 */
    const renderer = new THREE.WebGL1Renderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    box.current.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
    camera.position.set(0, 0, 50)
    camera.lookAt(0, 0, 0)

    const scene = new THREE.Scene()

    /**对于线条，能使用的材质只有LineBasicMaterial || LineDashedMaterial */
    const material = new THREE.LineBasicMaterial({color:  0xfcb3fd })

    /** 需要一个带有一些顶点的geometry(几何体) */
    const points = []
    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0,10, 0))
    points.push(new THREE.Vector3(10, 0, 0))
    points.push(new THREE.Vector3(0, -10, 0))
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    /** 现在我们已经有了能够画两条线的点和一个材质，然后就可以组合在一起，形成一条线 */
    const line = new THREE.Line(geometry, material)

    /** 然后就是渲染 */
    scene.add(line)
    renderer.render(scene, camera)
  }, [])
  return (
    <div ref={box}/>
  )
}
