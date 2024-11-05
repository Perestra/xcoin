import { Button } from '@/components/Button/Button'
import styles from './Exchange.module.scss'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { UserIntroduction } from '@/components/UserIntroduction/UserIntroduction'
import { ExchangeSchema, initialValues } from '@/yupValidations/ExchangeValidation'
import { Form, Formik } from 'formik'
import { TbArrowsExchange } from "react-icons/tb";
import { Select } from '@/components/Select/Select'
import { useCurrencyList } from '@/hooks/useCurrencyList'
import { useCurrencyExchange } from '@/hooks/useCurrencyExchange'
import { timestampConversor } from '@/utils/timestampConversor'

export const Exchange = () => {

  const { currencyData, currencyList } = useCurrencyList() 
  const { exchangeValues, setExchangeValues, exchangeData, exchangeCalc } = useCurrencyExchange();

  const submitHandler = (value: { from: string; to: string; amount: string }) => {
    setExchangeValues(value); 
  };

  return (
    <div className={styles.content}>
      <Header 
        classLogin='hidde' 
        bgColor='blue'
        to='/variacao'
      />
      <main className={styles.content__main}>
        <section className={styles.content__section}>
          <UserIntroduction />
          <div className={styles.content__conversor}>
            <h1>Conversor de moedas</h1>
            { !currencyData.loading && 
            <Formik
              initialValues={initialValues}
              validationSchema={ExchangeSchema}
              onSubmit={submitHandler}
            >
              <Form className={styles.content__form}>
                <div className={styles.content__inputs}>
                  <Input key={1} type='text' placeholder='Quantia' name='amount' />
                  <Select key={2} 
                    options={currencyList} 
                    placeholder='De' 
                    name='from' 
                  />
                  <Button color='green' type='button' icon={TbArrowsExchange} />
                  <Select key={3} 
                    options={currencyList} 
                    placeholder='Para' 
                    name='to' 
                  />
                </div>
                <Button
                  color='green' 
                  type='submit'
                  text='Converter'
                />
              </Form>
            </Formik>}
            <div className={styles.content__result}>
              {exchangeData.data && <h3>{exchangeValues.amount} {exchangeData.data[0].codein} =</h3>}
              {exchangeData.data && <h2>{exchangeCalc(exchangeValues.amount)} {exchangeData.data[0].code}</h2>}
            </div>
            {exchangeData.data && <span>Última atualização em {timestampConversor(exchangeData.data[0].timestamp)}</span>}
          </div>
        </section>
      </main>
    </div>
  )
}