import styles from './Variation.module.scss'

import { Header } from '@/components/Header/Header'
import { Select } from '@/components/Select/Select'
import { Form, Formik } from 'formik'
import { HomeSchema, initialValues } from '@/yupValidations/HomeValidation'
import { UserIntroduction } from '@/components/UserIntroduction/UserIntroduction'
import { Button } from '@/components/Button/Button'
import { LuSearch } from "react-icons/lu";
import { LineGraph } from '@/components/LineGraph/LineGraph'
import { lineChartData, lineChartOptions } from '@/utils/LineChart'
import { getCurrencyCode } from '@/utils/getCurrencyCode'
import { useState } from 'react'
import { useCurrencyGraph } from '@/hooks/useCurrencyGraph'

export const Variation: React.FC = () => {

  const [graphCurrency, setGraphCurrency] = useState<string>('USD - Dólar Americano')
  const { graphData, currencyData, getCurrencyCombination, date, currency } = useCurrencyGraph(graphCurrency)

  return (
    <div className={styles.content}>
      <Header 
        classLogin='hidde' 
        bgColor='blue'
        to='/home'
      />
      <main className={styles.content__main}>
        <section className={styles.content__currency}>
          <UserIntroduction />
          {!currencyData.loading && <div className={styles.content__select}>
            <Formik
              initialValues={initialValues}
              validationSchema={HomeSchema}
              onSubmit={value => setGraphCurrency(value.currency)}
            >
              <Form className={styles.content__form}>
                <Select 
                  name='currency'
                  options={getCurrencyCombination.filter((option): option is { label: string; value: string } => option !== undefined)}
                  placeholder='Selecione uma moeda'
                /> 
                <Button 
                  color='green'
                  type='submit'
                  icon={LuSearch}
                />
              </Form>
            </Formik>
          </div>}
        </section>
        { !graphData.loading && <LineGraph title={`Variação - ${getCurrencyCode(graphCurrency, 1)}`} options={lineChartOptions} data={lineChartData(date, currency)} />}
      </main>
    </div>
  )
}
