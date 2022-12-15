import React, { ReactNode } from 'react'
import { Three } from 'src/studys'
import { MaterialProps } from './Material'

export interface LineBasicMaterialProps extends MaterialProps {
  
}
export default function LineBasicMaterial(props: LineBasicMaterialProps) {

  const material = new Three.LineBasicMaterial({})

  return (
    <>{props.children}</>
  )
}


