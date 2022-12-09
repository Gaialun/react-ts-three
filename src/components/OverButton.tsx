import { Button, ButtonProps } from 'antd'
import React from 'react'


export function MButton(props: ButtonProps) {
  return (
    <Button style={{ margin: "0 10px 10px 0" }} {...props} />
  )
}
