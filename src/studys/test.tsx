import React from 'react'
import useCamera from 'src/components/three/components/camera/hooks/Camera'
import Material from 'src/components/three/components/material/components/Material'
import Scene from 'src/components/three/components/scene/components/Scene'

export default function Test() {

  const camera = useCamera()

  console.log(camera)
  return (
    <Scene>
      <Material>

      </Material>
    </Scene>
  )
}
