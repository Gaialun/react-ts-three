import React, { useRef, useLayoutEffect } from 'react'



export default function CreateText() {

  const box = useRef({} as HTMLDivElement)

  useLayoutEffect(() => {
    // new Three.TextGeometry()
  }, [])

  return (
    <div ref={box}>3.创建文字</div>
  )
}
