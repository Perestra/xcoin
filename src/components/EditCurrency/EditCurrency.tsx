import { Form, Formik } from 'formik'
import styles from './EditCurrency.module.scss'
import { Select } from '../Select/Select'
import { openModal } from '@/utils/modalAction'
import { Button } from '../Button/Button'
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { useAccountContext } from '@/hooks/useAccountContext'
import { useCurrencyList } from '@/hooks/useCurrencyList'
import { EditCurrencyType } from '@/types/EditCurrencyType'
import { EditCurrencySchema, initialValues } from '@/yupValidations/EditCurrencyValidation'
import { Dispatch, SetStateAction } from 'react'
import { editCurrency, isUserCurrency } from '@/accounts/editCurrency'

type Props = {
    setLayout: Dispatch<SetStateAction<string>>
}

export const EditCurrency: React.FC<Props> = ({ setLayout }) => {

  const { userLogged, setAuthAccount } = useAuthAccountContext()
  const { accounts, setAccounts } = useAccountContext()
  const { currencyList } = useCurrencyList()

  const changeCurrency = (data: EditCurrencyType, formikHelpers: any,  ) => {
    if(!userLogged) return
    if(isUserCurrency(userLogged, data, formikHelpers)) return
    editCurrency(userLogged, data, accounts, setAccounts, setAuthAccount)
}

  return (
    <section className={styles.section}>
        <h1>Alterar sua moeda</h1>
        <span>**Você será deslogado caso altere sua moeda principal</span>
        <div className={styles.section__container}>
            <div className={styles.section__credential}>
                <div className={styles.section__logo}><span>{userLogged?.fullName.charAt(0)}</span></div>
                <div className={styles.section__user}>
                    <span className={styles.section__name}>{userLogged?.username}</span>
                    <span className={styles.section__email}>{userLogged?.email}</span>    
                </div>
            </div>
            <Formik<EditCurrencyType>
                initialValues={initialValues}
                validationSchema={EditCurrencySchema}
                onSubmit={(data, formikHelpers) => changeCurrency(data, formikHelpers) }
            >
                <Form className={styles.section__form}>
                    <div className={styles.section__data}>
                        <input type='text' value={userLogged?.currency} id='from' autoComplete='true' disabled />
                    </div>
                    <Select
                        key={1}
                        name='to'
                        placeholder='Selecione a sua nova moeda principal'
                        options={currencyList}
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
                <span>Não quer alterar sua moeda?</span>
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
