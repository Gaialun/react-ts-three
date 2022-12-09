import React from 'react'
import { useNavigate } from 'react-router-dom'
import BasicInfoRouter from 'src/routers/BasicInfoRouter'
import { MButton } from 'src/components/OverButton'

export default function Basic() {
  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate('/basic/' + path)
  }

  return (
    <div>
      <MButton onClick={() => goTo('start')}>创建一个场景</MButton>
      <MButton onClick={() => goTo('draw_a_line')}>画线</MButton>
      <BasicInfoRouter />
    </div>
  )
}
