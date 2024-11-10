import { useAuthAccountContext } from '@/hooks/useAuthAccountContext';
import styles from './User.module.scss' 

import { IoIosArrowDown } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { Button } from '../Button/Button';
import { useState } from 'react';

type Props = {
  className?: string;
}

export const User: React.FC<Props> = ({className}) => {

  const { authAccount, setAuthAccount } = useAuthAccountContext()
  const [openDropbox, setOpenDropbox] = useState<boolean>(false)
  
  return (
    <div className={`${styles.user} ${className}`}>
      {authAccount?.token && (
        <>
          <div className={styles.user__credential}>
            <div className={styles.user__logo}><span>{authAccount.accounts[0].fullName.charAt(0)}</span></div>
            <span className={styles.user__name}>{authAccount.accounts[0].username}</span>
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
              <div className={styles.user__logo}><span>{authAccount.accounts[0].fullName.charAt(0)}</span></div>
              <span className={styles.user__dropboxUsername}>{authAccount.accounts[0].username}</span>
              <span className={styles.user__dropboxEmail}>{authAccount.accounts[0].email}</span>
            </div>
            <div className={styles.user__dropboxContent}>
              <Button 
                key={1}
                color='blue'
                type='button'
                icon={VscSettings}
                text='Configurações'
                path='/profile'
              />
              <Button 
                key={2}
                color='blue'
                type='button'
                icon={IoExitOutline}
                text='Sair'
                path='/'
                onClick={() => setAuthAccount({})}
              />
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
