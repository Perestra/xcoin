import styles from './Profile.module.scss' 

import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button'
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useAccountContext } from '@/hooks/useAccountContext';
import { removeUserAccount } from '@/accounts/removeUserAccount';
import { ModalConfirmation } from '@/components/ModalConfirmation/ModalConfirmation';

export const Profile = () => {

  const { userLogged, setAuthAccount } = useAuthAccountContext()
  const { accounts, setAccounts } = useAccountContext()

  const dialog = document.querySelector("dialog");

  const deleteAccount = () => {
    removeUserAccount(accounts, setAccounts, setAuthAccount, userLogged?.id)
    dialog?.close()
    // window.document.body.classList.toggle('scroll-lock')
  }

  const closeModal = () => {
    dialog?.close()
    // window.document.body.classList.toggle('scroll-lock')
  }

  const openModal = () => {
    dialog?.showModal()
    // window.document.body.classList.toggle('scroll-lock')
  }

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
                                <div className={styles.content__data}>
                                    <input  type='text' value={userLogged?.fullName} id='fullName' autoComplete='true' disabled />
                                </div>
                            </div>
                            <div key={2} className={styles.content__input}>
                                <label htmlFor="username">Usuário</label>
                                <div className={styles.content__data}>
                                    <input  type='text' value={userLogged?.username} id='username' autoComplete='true' disabled />
                                </div>
                            </div>
                            <div key={3} className={styles.content__input}>
                                <label htmlFor="email">E-mail</label>
                                <div className={styles.content__data}> 
                                    <input  type='email' value={userLogged?.email} id='email' autoComplete='true' disabled />
                                </div>
                            </div>
                            <div key={4} className={styles.content__input}>
                                <label htmlFor="password">Senha</label>
                                <div className={styles.content__data}>
                                    <input  type='password' value={userLogged?.password} id='password' autoComplete='true' disabled />
                                    <Button 
                                        color='blue' 
                                        type='button' 
                                        icon={MdOutlineModeEditOutline}
                                        onClick={() => window.scrollTo(0,0)}
                                    />
                                </div>
                            </div>
                            <div key={5} className={styles.content__input}>
                                <label htmlFor="currency">Moeda principal</label>
                                <div className={styles.content__data}>
                                    <input  type='text' value={userLogged?.currency} id='currency' autoComplete='true' disabled />
                                    <Button 
                                        color='blue' 
                                        type='button' 
                                        icon={MdOutlineModeEditOutline}
                                        onClick={() => window.scrollTo(0,0)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <Button 
                        color='red' 
                        type='button' 
                        icon={HiOutlineTrash} 
                        text='Excluir conta' 
                        onClick={() => openModal()}
                    />
                </div>
            </section>
            <ModalConfirmation 
                action='excluir sua conta' 
                confirmOnClick={() => deleteAccount()} 
                cancelOnClick={() => closeModal()}
                closeModal={closeModal}
            />
        </main>
    </div>
  )
}
