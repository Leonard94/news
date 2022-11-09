import { Link, NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <Logo />
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to='/'
              exact
              className={styles.link}
              activeClassName={styles.active}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/not-found'
              exact
              className={styles.link}
              activeClassName={styles.active}
            >
              Лучшее
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
