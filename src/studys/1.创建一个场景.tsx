import { Button } from 'antd'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const colors = ['#f88e8e', '#8ef8ee', '#f0a8d8', '#c1a8f0']
export default function Start() {
  const box = useRef({} as HTMLDivElement)
  const [colorIdx, setColorIdx] = useState(0)
  console.log('render...')
  const material = useMemo(() => new THREE.MeshBasicMaterial({color: colors[colorIdx]}), [])
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const cube = useMemo(()=> new THREE.Mesh(geometry, material), [])
  const scene = useMemo(() => new THREE.Scene(), [])


  const updateColor = () => {
    material.color = new THREE.Color(colors[colorIdx + 1])
    setColorIdx(colorIdx === colors.length - 1 ? 0 : colorIdx + 1 )
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


  return (
    <>
      <Button onClick={updateColor}>点击变色</Button>
      <div ref={box} />
    </>
  )
}
