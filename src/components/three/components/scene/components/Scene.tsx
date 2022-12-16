import React, { useLayoutEffect, useRef } from 'react'
import { Three } from 'src/components/three'
import { SceneComponentProps } from '../types/scene'


export default function Scene(props: SceneComponentProps) {
  const { children } = props
  /**
   * 创建一个场景
   */
  const scene = useRef(new Three.Scene())

  useLayoutEffect(() => {
    scene.current.background = props.background || null
  }, [])

  return (
    <>{children}</>
  )
}
