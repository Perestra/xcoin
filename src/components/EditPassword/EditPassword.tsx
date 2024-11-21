import styles from './EditPassword.module.scss'

import { Input } from '../Input/Input'
import { Form, Formik } from 'formik'
import { EditPasswordSchema, initialValues } from '@/yupValidations/EditPasswordValidation'
import { EditPasswordType } from '@/types/EditPasswordType'
import { Button } from '../Button/Button'
import { openModal } from '@/utils/modalAction'
import { Dispatch, SetStateAction } from 'react'
import { editPassword, isUserPassword } from '@/accounts/editPassword'
import { useAccountContext } from '@/hooks/useAccountContext'
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'

type Props = {
    setLayout: Dispatch<SetStateAction<string>>
}

export const EditPassword: React.FC<Props> = ({ setLayout }) => {
  
   const { userLogged, setAuthAccount } = useAuthAccountContext()
   const { accounts, setAccounts } = useAccountContext()

   const changePassword = (data: EditPasswordType, formikHelpers: any,  ) => {
       if(!userLogged) return
       if(isUserPassword(userLogged, data, formikHelpers)) {
        editPassword(userLogged, data, accounts, setAccounts, setAuthAccount)
       }
   }

  return (
    <section className={styles.section}>
        <h1>Alterar sua senha</h1>
        <span>**Você será deslogado caso altere sua senha</span>
        <div className={styles.section__container}>
            <div className={styles.section__credential}>
                <div className={styles.section__logo}><span>{userLogged?.fullName.charAt(0)}</span></div>
                <div className={styles.section__user}>
                    <span className={styles.section__name}>{userLogged?.username}</span>
                    <span className={styles.section__email}>{userLogged?.email}</span>    
                </div>
            </div>
            <Formik<EditPasswordType>
                initialValues={initialValues}
                validationSchema={EditPasswordSchema}
                onSubmit={(data, formikHelpers) => changePassword(data, formikHelpers) }
            >
                <Form className={styles.section__form}>
                    <Input 
                        key={1}
                        name='from'
                        type='password' 
                        placeholder='Digite sua senha atual'
                    />
                    <Input 
                        key={2}
                        name='to'
                        type='password' 
                        placeholder='Digite sua nova senha'
                    />
                    <Input 
                        key={3}
                        name='toConfirm'
                        type='password' 
                        placeholder='Digite sua nova senha novamente'
                    />
                    <Button 
                        color='green'
                        type='submit'
                        text='Alterar'
                        onClick={() => openModal()}
                    />
                </Form>
            </Formik>
            <div className={styles.section__extras}>
                <span>Não quer alterar sua senha?</span>
                <Button 
                    color='green'
                    type='button'
                    text='Clique aqui!'
                    onClick={() => setLayout('main')}
                />
            </div>
        </div>
    </section>
  )
}
