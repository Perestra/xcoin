import styles from './NavLink.module.scss'
import links from '@/json/Pages.json'

import { LinkPage } from '../LinkPage/LinkPage';

type Props = {
    className?: string;
}

export const NavLink: React.FC<Props> = ({className}) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
        <ul className={styles.nav__ul}>
          { links.Header.map( page => (<LinkPage key={page.id} to={page.url} name={page.name} />) ) }
        </ul>
      </nav>
  )
}
