import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from 'src/studys/1.创建一个场景'
import DrawALine from 'src/studys/2.画线'
import CreateText from 'src/studys/3.创建文字'
import Test from 'src/studys/test'

export default function BasicInfoRouter() {
  return (
    <Routes>
      <Route path='/start' element={<Start />} />
      <Route path="/draw_a_line" element={<DrawALine />} />
      <Route path="/create_text" element={<CreateText />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}
