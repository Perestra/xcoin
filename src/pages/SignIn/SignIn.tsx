import styles from './SignIn.module.scss'
import background from '../../assets/png/account.png'
import logo from '../../assets/svg/white_logo.svg'
import SigninInput from '../../json/SigninInput.json'

import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { initialValues, signinSchema, SigninType } from '../../utils/SigninForm'
import { Input } from '../../components/Input/Input'
import { InputType } from '../../types/InputType'

export const SignIn: React.FC = () => {

  const form = SigninInput as { Input: InputType[] };

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
                <Formik<SigninType>
                    initialValues={initialValues}
                    validationSchema={signinSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({errors}) => (
                        <Form className={styles.main__form}>
                            {form.Input.map((input: InputType) => (
                                <Input 
                                    key={input.id}
                                    name={input.name}
                                    type={input.type} 
                                    placeholder={input.placeholder}
                                    error={errors[input.name]}
                                />    
                            ) )}
                        <Button text='Entrar' color='green' type='submit' path=''/>
                    </Form>
                    )}
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