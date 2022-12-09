import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from 'src/studys/创建一个场景'
import DrawALine from 'src/studys/画线'

export default function BasicInfoRouter() {
  return (
    <Routes>
      <Route path='/start' element={<Start />} />
      <Route path="/draw_a_line" element={<DrawALine />} />
    </Routes>
  )
}
