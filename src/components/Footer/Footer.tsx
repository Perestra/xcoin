import styles from './Footer.module.scss'
import whiteLogo from '../../assets/svg/white_logo.svg'
import social from '../..//json/SocialMedia.json'

import { Logo } from '../Logo/Logo'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo src={whiteLogo} to='' />
      <div className={styles.footer__media}>
        {social.Media.map( link => (
          <Link key={link.id} to={link.url} target='_blank'>{link.name}</Link>
        ) )}    
      </div>
      <span>© XCoin. Desenvolvido por <strong>Danilo Perestrelo</strong></span>
    </footer>
  )
}
