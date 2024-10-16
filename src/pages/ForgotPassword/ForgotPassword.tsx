import styles from './ForgotPassword.module.scss'
import logo from '../../assets/svg/white_logo.svg'

import { Button } from '../../components/Button/Button'
import { Form, Formik } from 'formik'
import { Input } from '../../components/Input/Input'
import { useAccountContext } from '@/hooks/useAccountContext'
import { ForgotPasswordSchema, initialValues } from '@/utils/ForgotPasswordValidation'
import { ForgotPasswordType } from '@/types/ForgotPasswordType'
import { accountPassword } from '@/accounts/accountPassword'
import { useState } from 'react'

export const ForgotPassword: React.FC = () => {

  const { accounts } = useAccountContext()

  const [password, setPassword] = useState<string | undefined>('')

  return (
    <main className={styles.main}>
        {/* <img className={styles.main__logo} src={logo} alt="Logo da XCoin branca com o X e o C maiúsculo." /> */}
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
                    </Form>
                </Formik>
                {password && <div className={styles.main__password}>
                    <label>A sua senha é:</label>
                    <div className={styles.main__span}>
                        <span>{password}</span>
                    </div>
                    <Button text='Ira para o Login' color='blue' type='submit' path='/signin'/>
                </div>}
            </aside>
        </section>
    </main>
  )
}