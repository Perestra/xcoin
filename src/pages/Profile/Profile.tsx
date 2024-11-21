import styles from './Profile.module.scss' 

import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button'
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useAccountContext } from '@/hooks/useAccountContext';
import { ModalConfirmation } from '@/components/ModalConfirmation/ModalConfirmation';
import { closeModal, deleteAccount, openModal } from '@/utils/modalAction';
import { useState } from 'react';
import { EditPassword } from '@/components/EditPassword/EditPassword';
import { EditCurrency } from '@/components/EditCurrency/EditCurrency';

export const Profile: React.FC = () => {

  const { userLogged, setAuthAccount } = useAuthAccountContext()
  const { accounts, setAccounts } = useAccountContext()

  const [layout, setLayout] = useState<string>('main')

  return (
    <div className={styles.content}>
        <Header 
            classLogin='hidde' 
            bgColor='blue'
            to='/variacao'
        />
        <main className={styles.content__main}>
            { layout === 'main' && 
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
                                            onClick={() => setLayout('password')}
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
                                            onClick={() => setLayout('currency')}
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
                    <ModalConfirmation 
                        action='excluir sua conta' 
                        confirmOnClick={() => deleteAccount(accounts, setAccounts, setAuthAccount, userLogged?.id)} 
                        cancelOnClick={() => closeModal()}
                    />
                </section> 
            }
            { layout === 'password' && 
                <EditPassword setLayout={setLayout} />
            }
            { layout === 'currency' && 
                <EditCurrency setLayout={setLayout} />
            }
        </main>
    </div>
  )
}
