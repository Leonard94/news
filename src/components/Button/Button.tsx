import React from 'react'
import classnames from 'classnames'

import { ReactComponent as IconLoader } from '../../assets/icons/loader.svg'
import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode
  typeView: 'primary' | 'default' | 'text'
  isLoading?: boolean
  onClick?: () => void
  full?: boolean
  style?: React.CSSProperties
}

export const Button: React.FC<TProps> = (props) => {
  const { children, typeView, onClick, full, style, isLoading } = props

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
  })
  return (
    <button
      className={btnClass}
      onClick={clickHandler}
      style={style}
      disabled={isLoading}
    >
      {isLoading && <IconLoader className={styles.loader} />}
      {children}
    </button>
  )
}
