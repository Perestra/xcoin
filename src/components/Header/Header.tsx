import styles from './Header.module.scss'
import  LogoColored from '../../assets/svg/colored_logo.svg'

import { Logo } from '../Logo/Logo';
import { NavLink } from '../NavLink/NavLink';
import { User } from '../User/User';
import { Link } from 'react-router-dom';

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from '../Button/Button';
import { useState } from 'react';

type Props = {
  classNav?: string;
  classUser?: string;
  classLogin?: string;
  bgColor?: string;
  to: string;
}

export const Header: React.FC<Props> = ({bgColor, classNav, classUser, classLogin, to }) => {

  const [ menuActive, setMenuActive ] = useState<boolean>(false)

  const toggleMenu = () => {
    window.scrollTo(0,0)
    setMenuActive(!menuActive)
    window.document.body.classList.toggle('scroll-lock')
  }

  return (
    <header className={`${styles.header} ${bgColor}`}>
      <div className={styles.header__container}>
        <Logo src={LogoColored} to={to}/>
        { to !== '/' && <Button icon={HiOutlineMenuAlt3} color='blue' type='button' onClick={() => toggleMenu()} /> }
          <div className={`${styles.header__nav} ${classNav} ${menuActive? styles.active: ''}`}>
            <NavLink className={classNav} onClick={() => toggleMenu()}/>
            <User className={classUser}/>  
          </div>
        <span className={`${styles.header__login} ${classLogin}`}><Link to="/signin" role='link' aria-label='Entre ou cadastre-se' >Entre ou cadastre-se</Link></span>  
      </div>
    </header>
  )
}
