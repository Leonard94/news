import React from 'react'
import styles from './styles.module.scss'

import classnames from 'classnames'

type TProps = {
  children: React.ReactNode
  typeView: 'primary' | 'default' | 'text'
  onClick?: () => void
  full?: boolean
  small?: boolean
  style?: React.CSSProperties
}

export const Button: React.FC<TProps> = (props) => {
  const { children, typeView, onClick, full, small, style } = props

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (onClick) {
      event.preventDefault()
      event.stopPropagation()
      onClick()
    }
  }

  const btnClass = classnames(styles.btn, {
    [styles[typeView]]: typeView,
    [styles.btn_full]: full,
    [styles.btn_small]: small,
  })
  return (
    <button className={btnClass} onClick={clickHandler} style={style}>
      {children}
    </button>
  )
}
