import styles from './SignIn.module.scss'
import background from '../../assets/png/account.png'
import logo from '../../assets/svg/white_logo.svg'

import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'

export const SignIn = () => {
  return (
    <main className={styles.main}>
        <div className={styles.main__images}>
            <img className={styles.main__logo} src={logo} alt="Logo da XCoin branca com o X e o C maiúsculo." />
            <img className={styles.main__background} src={background} alt="Background com fundo verde" />
        </div>
        <section className={styles.main__section}>
            <aside className={styles.main__aside}>
                <div className={styles.main__title}>
                    <h1>Acesse sua conta da XCoin!</h1>
                    <span>Coloque as informações solicitadas abaixo</span>
                </div>
                <Formik 
                    initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
                    onSubmit={values => console.log(values)}
                >
                    <Form className={styles.main__form}>
                        <Field 
                            className={styles.main__input}
                            name='email'
                            type='email'
                            placeholder='Digite sua conta de e-mail'
                        />
                        <Field 
                            className={styles.main__input}
                            name='password'
                            type='password'
                            placeholder='Digite sua senha'
                        />
                        <Button
                            color='green'
                            text='Entrar'
                        />
                    </Form>
                </Formik>
                <div className={styles.main__extras}>
                    <div className={styles.main__forgot}>
                        <span>Esqueceu sua senha? <Link to="/forgotpassword">Clique aqui!</Link></span>
                    </div>
                    <div className={styles.main__create}>
                        <span>Não possui uma conta?</span>
                        <Button 
                            color='blue'
                            text='Registre-se'
                        />
                    </div>
                </div>
            </aside>
        </section>
    </main>
  )
}
