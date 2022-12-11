import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MButton, MDivider } from 'src/components/OverComponent'
import MainRouter from 'src/routers/MainRouter'

export default function Main() {

  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate(path)
  }
  return (
    <div>
      <MButton onClick={() => goTo('basic')}>three基础</MButton>
      <MDivider />
      <MainRouter />
    </div>
  )
}
