import styles from './Profile.module.scss' 

import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button'
import { HiOutlineTrash } from "react-icons/hi2";
import { useAccountContext } from '@/hooks/useAccountContext';
import { removeUserAccount } from '@/accounts/removeUserAccount';

export const Profile = () => {

  const { userLogged, setAuthAccount } = useAuthAccountContext()
  const { accounts, setAccounts } = useAccountContext()

  return (
    <div className={styles.content}>
        <Header 
            classLogin='hidde' 
            bgColor='blue'
            to='/variacao'
        />
        <main className={styles.content__main}>
            <section className={styles.content__section}>
                <h1>Configurações da conta</h1>
                <div className={styles.content__container}>
                    <div className={styles.content__credential}>
                        <div className={styles.content__logo}><span>{userLogged?.fullName.charAt(0)}</span></div>
                        <div className={styles.content__user}>
                            <span className={styles.content__name}>{userLogged?.username}</span>
                            <span className={styles.content__email}>{userLogged?.email}</span>    
                        </div>
                    </div>
                    <div className={styles.content__info}>
                        <form className={styles.content__form}>
                            <div key={1} className={styles.content__input}>
                                <label htmlFor="fullName">Nome completo</label>
                                <input  type='text' value={userLogged?.fullName} name='fullName' disabled />
                            </div>
                            <div key={2} className={styles.content__input}>
                                <label htmlFor="username">Usuário</label>
                                <input  type='text' value={userLogged?.username} name='username' disabled />
                            </div>
                            <div key={3} className={styles.content__input}>
                                <label htmlFor="email">E-mail</label>
                                <input  type='email' value={userLogged?.email} name='email' disabled />
                            </div>
                            <div key={4} className={styles.content__input}>
                                <label htmlFor="password">Senha</label>
                                <input  type='password' value={userLogged?.password} name='password' disabled />
                            </div>
                            <div key={5} className={styles.content__input}>
                                <label htmlFor="currency">Moeda principal</label>
                                <input  type='text' value={userLogged?.currency} name='currency' disabled />
                            </div>
                        </form>
                    </div>
                    <Button 
                        color='red' 
                        type='button' 
                        icon={HiOutlineTrash} 
                        text='Excluir conta' 
                        onClick={ () => removeUserAccount(accounts, setAccounts, setAuthAccount, userLogged?.id)}
                        path='/'
                    />
                </div>
            </section>
        </main>
    </div>
  )
}
