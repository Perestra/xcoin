import styles from './CreateAccount.module.scss'

import { Form, Formik } from 'formik'
import { Input } from '../../components/Input/Input'
import { Select } from '../../components/Select/Select'
import { Button } from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { initialValues, CreateAccountSchema } from '../../yupValidations/CreateAccountValidation'
import { useAxios } from '../../hooks/useAxios'
import { AwsomeAPI } from '../../api/EconomiaAwsomeAPI'
import { useMemo } from 'react'
import { CreateAccountType } from '../..//types/CreateAccountType'
import { createAccount } from '@/accounts/createUserAccount'
import { useAccountContext } from '@/hooks/useAccountContext'

export const CreateAccount: React.FC = () => {

  const { accounts, setAccounts } = useAccountContext()
  const navigate = useNavigate()

  const { data, loading } = useAxios<Record<string, string>>(AwsomeAPI, 'get', '/available/uniq')
  const currencyList = useMemo( () => Object.entries(data??{}).map( ([key, value]) => ({label: value, value: key}) ), [data] )

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
                        validationSchema={CreateAccountSchema(accounts)}
                        onSubmit={data => createAccount(data, accounts, setAccounts, navigate)}
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
                            <Button 
                                text='Criar conta' 
                                color='green' 
                                type='submit'
                                onClick={() => window.scrollTo(0,0)}
                            />
                        </Form>
                    </Formik>
                }
                <div className={styles.main__extras}>
                    <span>Já tem uma conta? <Link to="/signin" onClick={() => window.scrollTo(0,0)}>Clique aqui!</Link></span>
                </div>
            </aside>
        </section>
    </main>
  )
}
