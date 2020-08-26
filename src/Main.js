import React from 'react'
import {useAlertToggle} from "./alert/AlertContext"

export default function Main() {
  const toggle = useAlertToggle()
  return (
    <>
      <h1>Hello Context</h1>
      <button onClick={toggle} className='btn btn-success'>Show the alert</button>
    </>
  )
}