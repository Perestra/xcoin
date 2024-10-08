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
}

export const Header: React.FC<Props> = ({classNav, classUser, classLogin}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo src={LogoColored}/>
        <NavLink className={classNav}/>
        <User className={classUser}/>
        <span className={`${styles.header__login} ${classLogin}`}><Link to="*" role='link' aria-label='Entre ou cadastre-se' >Entre ou cadastre-se</Link></span>  
      </div>
    </header>
  )
}
