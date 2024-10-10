import styles from './CreateAccount.module.scss'
import background from '../../assets/png/account.png'
import logo from '../../assets/svg/white_logo.svg'
import CreateAccountInput from '../../json/CreateAccountInput.json'

import { Form, Formik } from 'formik'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { InputType } from '../../types/InputType'
import { initialValues, CreateAccountSchema, CreateAccountType } from '../../utils/CreateAccountForm'

import { useAxios } from '../../hooks/useAxios'
import { AwsomeAPI } from '../../api/EconomiaAwsomeAPI'
import { SelectInput } from '@/components/SelectInput/SelectInput'
import { useMemo } from 'react'

export const CreateAccount = () => {

  const form = CreateAccountInput as {Input: InputType[]}

  const { data, loading } = useAxios<Record<string, string>>(AwsomeAPI, 'get', '/available/uniq')
  const list = useMemo( () => Object.entries(data??{}).map( ([key, value]) => ({label: value, value: key}) ), [data] )

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
                                ))}
                                    <SelectInput data={list} />
                                    <Button text='Entrar' color='green' type='submit' path=''/>
                            </Form>
                        )}
                    </Formik>
                }
                <div className={styles.main__extras}>
                    <div className={styles.main__forgot}>
                        <span>Já tem uma conta? <Link to="/signin">Clique aqui!</Link></span>
                    </div>
                </div>
            </aside>
        </section>
        <div className={styles.main__images}>
            <img className={styles.main__logo} src={logo} alt="Logo da XCoin branca com o X e o C maiúsculo." />
            <img className={styles.main__background} src={background} alt="Background com fundo verde" />
        </div>
    </main>
  )
}
