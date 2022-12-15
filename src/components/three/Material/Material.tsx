import React ,{ ReactNode } from 'react'

export interface MaterialProps {
  children: ReactNode
}
export default function Material(props: MaterialProps) {
  return (
    <>{props.children}</>
  )
}
