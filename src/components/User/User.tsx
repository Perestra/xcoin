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
      <div className={styles.user__logo}><span>{authAccount?.accounts[0].fullName.charAt(0)}</span></div>
      <span className={styles.user__name}>{authAccount?.accounts[0].username}</span>
      <IoIosArrowDown className={styles.user__icon}/>
    </div>
  )
}
