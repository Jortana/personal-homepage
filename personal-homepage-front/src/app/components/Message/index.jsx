import React from 'react'
import { ReactComponent as InfoLogo } from './info.svg'
import { ReactComponent as SuccessLogo } from './success.svg'
import { ReactComponent as ErrorLogo } from './error.svg'
import { ReactComponent as WarningLogo } from './warning.svg'

export default function Message(props) {
  const { type, message } = props

  const Logo = () => {
    switch (type) {
      case 'info':
        return <InfoLogo />
      case 'success':
        return <SuccessLogo />
      case 'error':
        return <ErrorLogo />
      case 'warning':
        return <WarningLogo />
      default:
        break
    }
  }

  return (
    <div className={`alert alert-${type} shadow-lg`}>
      <div>
        <Logo />
        <span>{message}</span>
      </div>
    </div>
  )
}
