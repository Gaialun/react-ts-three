import React, { ReactNode, useRef } from 'react'
import { Three } from 'src/components/three'

export interface MaterialProps {
  children: ReactNode
}


export default function Material(props: MaterialProps) {
  /**
   * 创建一个通用材质
   */
  const material = useRef(new Three.Material())
  console.log(material.current)

  return (
    <>{props.children}</>
  )
}
