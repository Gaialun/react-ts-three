import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MButton } from 'src/components/OverButton'
import MainRouter from 'src/routers/MainRouter'

export default function Main() {

  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate(path)
  }
  return (
    <div>
      <MButton onClick={() => goTo('basic')}>three基础</MButton>
      <MainRouter />
    </div>
  )
}
