import styles from './Header.module.scss'
import  LogoColored from '../../assets/svg/colored_logo.svg'

import { Logo } from '../Logo/Logo';
import { NavLink } from '../NavLink/NavLink';
import { User } from '../User/User';
import { Link } from 'react-router-dom';

type Props = {
  classNav?: string;
  classUser?: string;
  classLogin?: string;
  bgColor?: string;
  to: string;
}

export const Header: React.FC<Props> = ({bgColor, classNav, classUser, classLogin, to }) => {

  return (
    <header className={`${styles.header} ${bgColor}`}>
      <div className={styles.header__container}>
        <Logo src={LogoColored} to={to}/>
        <NavLink className={classNav}/>
        <User className={classUser}/>
        <span className={`${styles.header__login} ${classLogin}`}><Link to="/signin" role='link' aria-label='Entre ou cadastre-se' >Entre ou cadastre-se</Link></span>  
      </div>
    </header>
  )
}
