import React, { useContext } from 'react'
import {useAlert} from './AlertContext'

export default function Alert() {
  const alert = useAlert()
  if (!alert) return null
  
  return (
    <div className={'alert alert-danger'}>
      This is a very important message
    </div>
  )
}