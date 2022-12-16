import { Button, ButtonProps, Divider, DividerProps } from 'antd'
import React from 'react'


export function MButton(props: ButtonProps) {
  return (
    <Button style={{ margin: "0 5px" }} {...props} />
  )
}

export function MDivider(props: DividerProps) {
  return <Divider style={{ margin: "10px 0" }} {...props} />
}