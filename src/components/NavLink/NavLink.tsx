import styles from './NavLink.module.scss'
import links from '../../json/pages.json'

import { LinkPage } from '../LinkPage/LinkPage'

type Link = {
    id: number;
    name: string;
    url: string;
}

type Props = {
    className?: string;
}

export const NavLink: React.FC<Props> = ({className}) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
        <ul className={styles.nav__ul}>
          { links.Header.map( (page: Link) => (<LinkPage key={page.id} to={page.url} name={page.name} />) ) }
        </ul>
      </nav>
  )
}
