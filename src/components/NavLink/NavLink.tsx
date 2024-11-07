import styles from './NavLink.module.scss'
// import links from '../../json/Pages.json'

import { LinkPage } from '../LinkPage/LinkPage';

type Link = {
  id: number;
  name: string;
  url: string;
}

type Props = {
  className?: string;
}

const links = [
  {   
    "id":1,
    "name": "Variação",
    "url": "/variacao"
  },
  {   
    "id":2,
    "name": "Conversão",
    "url": "/conversao"
  },
  {   
    "id":3,
    "name": "Favoritos",
    "url": "/favoritos"
  }
]

export const NavLink: React.FC<Props> = ({className}) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.nav__ul}>
        { links.map( (page: Link) => (<LinkPage key={page.id} to={page.url} name={page.name} />) ) }
      </ul>
    </nav>
  )
}
