import React, { useRef } from 'react'
import { Three } from 'src/components/three'
import { Ojbect3DComponentPorps } from '../types/object3D'

export default function Object3D(props: Ojbect3DComponentPorps) {

  const object3D = useRef(new Three.Object3D())



  return (
    <>{props.children}</>
  )
}
