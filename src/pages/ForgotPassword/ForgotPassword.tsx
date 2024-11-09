import styles from './ForgotPassword.module.scss'

import { Button } from '../../components/Button/Button'
import { Form, Formik } from 'formik'
import { Input } from '../../components/Input/Input'
import { useAccountContext } from '@/hooks/useAccountContext'
import { ForgotPasswordSchema, initialValues } from '@/yupValidations/ForgotPasswordValidation'
import { ForgotPasswordType } from '@/types/ForgotPasswordType'
import { accountPassword } from '@/accounts/accountPassword'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ForgotPassword: React.FC = () => {

  const { accounts } = useAccountContext()

  const [password, setPassword] = useState<string | undefined>('')

  return (
    <main className={styles.main}>
        <section className={styles.main__section}>
            <aside className={styles.main__aside}>
                <div className={styles.main__title}>
                    <h1>Recupere a senha da sua conta da XCoin!</h1>
                    <span>Coloque as informações solicitadas abaixo</span>
                </div>
                <Formik<ForgotPasswordType>
                    initialValues={initialValues}
                    validationSchema={ForgotPasswordSchema(accounts)}
                    onSubmit={data => accountPassword(data, accounts, setPassword)}
                >
                    <Form className={styles.main__form}>
                        <Input 
                            key={1}
                            name='email'
                            type='email'
                            placeholder='Digite sua conta de e-mail'
                        />    
                        <Button text='Continuar' color='green' type='submit'/>
                        <div className={styles.main__remember}>
                            <span>Lembrou sua senha? <Link to="/signin">Clique aqui!</Link></span>
                        </div>
                    </Form>
                </Formik>
                {password && <div className={styles.main__password}>
                    <label>A sua senha é:</label>
                    <div className={styles.main__span}>
                        <span>{password}</span>
                    </div>
                </div>}
            </aside>
        </section>
    </main>
  )
}