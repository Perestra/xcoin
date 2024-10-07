import styles from './User.module.scss' 

import { IoIosArrowDown } from "react-icons/io";

type Props = {
    className?: string;
}

export const User: React.FC<Props> = ({className}) => {
  return (
    <div className={`${styles.user} ${className}`}>
        <div className={styles.user__logo}><span>D</span></div>
        <span className={styles.user__name}>Nome do usuário</span>
        <IoIosArrowDown className={styles.user__icon}/>
    </div>
  )
}
