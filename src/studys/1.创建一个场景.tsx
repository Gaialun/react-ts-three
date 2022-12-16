import { Button } from 'antd'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const colors = ['#f88e8e', '#8ef8ee', '#f0a8d8', '#c1a8f0']
export default function Start() {
  const box = useRef({} as HTMLDivElement)
  const colorIdx = useRef(0)
  const material = useRef(new THREE.MeshBasicMaterial({ color: colors[colorIdx.current] }))
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const cube = new THREE.Mesh(geometry, material.current)
  const scene = new THREE.Scene()
  console.log('render...', material.current)

  const updateColor = () => {
    const idx = colorIdx.current
    colorIdx.current = idx === colors.length - 1 ? 0 : idx + 1
    material.current.color = new THREE.Color(colors[colorIdx.current])
  }

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000) /* 创建一个相机 */
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    box.current.appendChild(renderer.domElement)

    scene.add(cube)

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }, [])


  useEffect(() => {
    const timer = setInterval(updateColor, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Button onClick={updateColor}>点击变色</Button>
      <div ref={box} />
    </>
  )
}
