import { Button } from 'antd'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Start() {
  const box = useRef({} as HTMLDivElement)
  const isInit = useRef(true)

  useEffect(() => {
    if (!isInit.current) return
    const scene = new THREE.Scene() /* 创建一个场景 */
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000) /* 创建一个相机 */
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    box.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1) /* 创建一个立方体 */
    const material = new THREE.MeshBasicMaterial({ color: 0xfcb3fd }) /* 引入材质 */
    const cube = new THREE.Mesh(geometry, material) /* 创建一个网格 */
    scene.add(cube)

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    isInit.current = false
    animate()
  }, [])


  return (
    <>
      <Button>点击旋转</Button>
      <div ref={box} />
    </>
  )
}
