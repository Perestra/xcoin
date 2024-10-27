import styles from './UserIntroduction.module.scss'

import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { getCurrencyCode } from '@/utils/getCurrencyCode'

export const UserIntroduction = () => {

    const { authAccount } = useAuthAccountContext()

  return (
    <div className={styles.info}>
        <h2>Olá, <strong>{authAccount.accounts[0].fullName}!</strong></h2>
        <h3>Sua moeda principal é <strong>{getCurrencyCode(authAccount.accounts[0].currency)}</strong></h3>  
    </div>
  )
}
