import { useAuthAccountContext } from '@/hooks/useAuthAccountContext';
import styles from './User.module.scss' 

import { IoIosArrowDown } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { Button } from '../Button/Button';
import { useState } from 'react';

type Props = {
  className?: string;
  toggleMenu: () => void;
}

export const User: React.FC<Props> = ({className, toggleMenu}) => {

  const { authAccount, setAuthAccount, userLogged } = useAuthAccountContext()
  const [openDropbox, setOpenDropbox] = useState<boolean>(false)

  const logOut = () => {
    if(toggleMenu) {
      toggleMenu()
      setAuthAccount(null)
    }
  }
  
  return (
    <div className={`${styles.user} ${className}`}>
      {authAccount?.token && (
        <>
          <div className={styles.user__credential}>
            <div className={styles.user__logo}><span>{userLogged?.fullName.charAt(0)}</span></div>
            <span className={styles.user__name}>{userLogged?.username}</span>
            <Button 
              color='green'
              type='button'
              icon={IoIosArrowDown}
              action={openDropbox? 'rotate': ''}
              onClick={() => setOpenDropbox(!openDropbox)}
            />
          </div>
          <aside className={`${styles.user__dropbox} ${openDropbox? styles.opened: ''}`}>
            <div className={styles.user__dropboxUser}>
              <div className={styles.user__logo}><span>{userLogged?.fullName.charAt(0)}</span></div>
              <span className={styles.user__dropboxUsername}>{userLogged?.username}</span>
              <span className={styles.user__dropboxEmail}>{userLogged?.email}</span>
            </div>
            <div className={styles.user__dropboxContent}>
              <Button 
                key={1}
                color='blue'
                type='button'
                icon={VscSettings}
                text='Configurações'
                path='/profile'
                onClick={ toggleMenu? () => toggleMenu(): undefined}
              />
              <Button 
                key={2}
                color='blue'
                type='button'
                icon={IoExitOutline}
                text='Sair'
                path='/'
                onClick={() => logOut()}
              />
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
