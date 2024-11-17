import styles from './UserIntroduction.module.scss'

import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { getCurrencyCode } from '@/utils/getCurrencyCode'

export const UserIntroduction: React.FC = () => {

    const { userLogged } = useAuthAccountContext()
    
    const getName = (name: string) => {
      const nameSplited = name.split(' ')
      if(nameSplited[1]){
        return `${nameSplited[0]} ${nameSplited[1]}`
      }
      return `${nameSplited[0]}`
    }

  return (
    <div className={styles.info}>
        {userLogged && <h2>Olá, <strong>{getName(userLogged.fullName)}</strong></h2>}
        {userLogged && <h3>Sua moeda principal é <strong>{getCurrencyCode(userLogged.currency, 0)}</strong></h3>}
    </div>
  )
}
