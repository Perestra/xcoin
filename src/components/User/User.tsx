import { useAuthAccountContext } from '@/hooks/useAuthAccountContext';
import styles from './User.module.scss' 

import { IoIosArrowDown } from "react-icons/io";

type Props = {
  className?: string;
}

export const User: React.FC<Props> = ({className}) => {

  const { authAccount } = useAuthAccountContext()
  
  return (
    <div className={`${styles.user} ${className}`}>
      { authAccount.token && <div className={styles.user__logo}><span>{authAccount.accounts[0].fullName.charAt(0)}</span></div>}
      { authAccount.token && <span className={styles.user__name}>{authAccount.accounts[0].username}</span>}
      { authAccount.token && <IoIosArrowDown className={styles.user__icon}/>}
    </div>
  )
}
