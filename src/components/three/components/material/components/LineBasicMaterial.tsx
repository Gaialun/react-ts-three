import React from 'react'
import { Three } from 'src/components/three'

import { MaterialProps } from './Material'

export interface LineBasicMaterialProps extends MaterialProps {

}
export default function LineBasicMaterial(props: LineBasicMaterialProps) {

  const material = new Three.LineBasicMaterial({})

  return (
    <>{props.children}</>
  )
}


