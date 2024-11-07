import styles from './SignIn.module.scss'

import { Button } from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { initialValues, signinSchema } from '../../yupValidations/SigninValidation'
import { Input } from '../../components/Input/Input'
import { SigninType } from '@/types/SignInType'
import { useAccountContext } from '@/hooks/useAccountContext'
import { isValidUser } from '@/accounts/signInUser'
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'

export const SignIn: React.FC = () => {

  const { accounts } = useAccountContext()
  const { setAuthAccount } = useAuthAccountContext()
  const navigate = useNavigate()

  return (
    <main className={styles.main}>
        <section className={styles.main__section}>
            <aside className={styles.main__aside}>
                <div className={styles.main__title}>
                    <h1>Acesse sua conta da XCoin!</h1>
                    <span>Coloque as informações solicitadas abaixo</span>
                </div>
                <Formik<SigninType>
                    initialValues={initialValues}
                    validationSchema={signinSchema}
                    onSubmit={(data, formikHelpers) => isValidUser(data, formikHelpers, accounts, setAuthAccount, navigate)}
                >
                    <Form className={styles.main__form}>
                        <Input 
                            key={1}
                            name='email'
                            type='email'
                            placeholder='Digite sua conta de e-mail'
                        />    
                        <Input 
                            key={2}
                            name='password'
                            type='password'
                            placeholder='Digite sua senha'
                        />
                        <Button text='Entrar' color='green' type='submit'/>
                    </Form>
                </Formik>
                <div className={styles.main__extras}>
                    <div className={styles.main__forgot}>
                        <span>Esqueceu sua senha? <Link to="/forgotpassword">Clique aqui!</Link></span>
                    </div>
                    <div className={styles.main__create}>
                        <span>Não possui uma conta?</span>
                        <Button color='blue' text='Registre-se' type='button' path='/createaccount'/>
                    </div>
                </div>
            </aside>
        </section>
    </main>
  )
}