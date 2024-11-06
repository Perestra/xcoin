import styles from './UserIntroduction.module.scss'

import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { getCurrencyCode } from '@/utils/getCurrencyCode'

export const UserIntroduction = () => {

    const { authAccount } = useAuthAccountContext()
    
    const getName = (name: string) => {
      const nameSplited = name.split(' ')
      return `${nameSplited[0]} ${nameSplited[1]}`
    }

  return (
    <div className={styles.info}>
        <h2>Olá, <strong>{getName(authAccount.accounts[0].fullName)}</strong></h2>
        <h3>Sua moeda principal é <strong>{getCurrencyCode(authAccount.accounts[0].currency, 0)}</strong></h3>  
    </div>
  )
}
