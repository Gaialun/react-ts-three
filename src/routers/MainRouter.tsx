import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basic from 'src/pages/basic study'

export default function MainRouter() {

  return (
    <Routes>
      <Route path="/basic/*" element={<Basic />} />
    </Routes>
  )
}
