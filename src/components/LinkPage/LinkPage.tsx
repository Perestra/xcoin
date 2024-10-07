import styles from './LinkPage.module.scss'

import { NavLink } from 'react-router-dom'

type Props = {
  to: string;
  name: string;
}

const styleActive = {
  color: 'var(--Green)',
  fontWeight: '700'
}

export const LinkPage: React.FC<Props> = ({ to, name }) => {
  return (
    <li className={ styles.list }>
      <NavLink className={styles.list__link} to={to} style={({ isActive }) => isActive ? styleActive : undefined}>
        { name }
      </NavLink>
    </li>
  )
}

