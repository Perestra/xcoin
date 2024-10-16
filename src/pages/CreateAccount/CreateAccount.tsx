import styles from './CreateAccount.module.scss'
import logo from '../../assets/svg/white_logo.svg'

import { Form, Formik } from 'formik'
import { Input } from '../../components/Input/Input'
import { Select } from '../../components/Select/Select'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { initialValues, CreateAccountSchema, CreateAccountType } from '../../utils/CreateAccountForm'
import { useAxios } from '../../hooks/useAxios'
import { AwsomeAPI } from '../../api/EconomiaAwsomeAPI'
import { useMemo } from 'react'
import { useAccountContext } from '../../hooks/useAccountContext'

export const CreateAccount: React.FC = () => {

  const { data, loading } = useAxios<Record<string, string>>(AwsomeAPI, 'get', '/available/uniq')
  const currencyList = useMemo( () => Object.entries(data??{}).map( ([key, value]) => ({label: value, value: key}) ), [data] )

  const context = useAccountContext()

  return (
    <main className={styles.main}>
        <section className={styles.main__section}>
            <aside className={styles.main__aside}>
                <div className={styles.main__title}>
                    <h1>Crie sua conta da XCoin!</h1>
                    <span>Coloque as informações solicitadas abaixo</span>
                </div>
                { !loading &&
                    <Formik<CreateAccountType>
                        initialValues={initialValues}
                        validationSchema={CreateAccountSchema}
                        onSubmit={values => console.log(values)}
                    >
                        <Form className={styles.main__form}>
                            <Input 
                                key={1}
                                name='fullName'
                                type='text' 
                                placeholder='Digite seu nome completo'
                            />    
                            <Input 
                                key={2}
                                name='username'
                                type='text' 
                                placeholder='Digite seu usuário'
                            /> 
                            <Input 
                                key={3}
                                name='email'
                                type='email' 
                                placeholder='Digite sua conta de e-mail'
                            /> 
                            <Input 
                                key={4}
                                name='password'
                                type='password' 
                                placeholder='Digite sua senha'
                            /> 
                            <Input 
                                key={5}
                                name='confirmPassword'
                                type='password' 
                                placeholder='Digite novamente sua senha'
                            /> 
                            <Select  
                                key={6}
                                name='currency'
                                options={currencyList}
                                placeholder='Selecione a sua moeda principal'
                            />
                            <Button text='Entrar' color='green' type='submit' path=''/>
                        </Form>
                    </Formik>
                }
                <div className={styles.main__extras}>
                    <span>Já tem uma conta? <Link to="/signin">Clique aqui!</Link></span>
                </div>
            </aside>
        </section>
        {/* <img className={styles.main__logo} src={logo} alt="Logo da XCoin branca com o X e o C maiúsculo." /> */}
    </main>
  )
}
