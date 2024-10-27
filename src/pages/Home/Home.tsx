import styles from './Home.module.scss'

import { Header } from '@/components/Header/Header'
import { Select } from '@/components/Select/Select'
import { useAxios } from '@/hooks/useAxios'
import { AwsomeAPI } from '@/api/EconomiaAwsomeAPI'
import { useMemo } from 'react'
import { Form, Formik } from 'formik'
import { HomeSchema, initialValues } from '@/yupValidations/HomeValidation'
import { UserIntroduction } from '@/components/UserIntroduction/UserIntroduction'
import { Button } from '@/components/Button/Button'
import { LuSearch } from "react-icons/lu";
import { LineGraph } from '@/components/LineGraph/LineGraph'
import { lineChartData, lineChartOptions } from '@/utils/LineChart'
import { useGetAPIData } from '@/hooks/useGetAPIData'
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { getCurrencyCode } from '@/utils/getCurrencyCode'

export const Home: React.FC = () => {

  const { authAccount } = useAuthAccountContext()
  const { graphCurrency, setGraphCurrency } = useGetAPIData(AwsomeAPI)

  const currencyData = useGetAPIData(AwsomeAPI, '/available/uniq')
  const currencyList = useMemo( () => Object.entries(currencyData.data??{}).map( ([key, value]) => ({label: value, value: key}) ), [currencyData.data] )

  const graphData = useGetAPIData(AwsomeAPI, `daily/${getCurrencyCode(graphCurrency)}-${getCurrencyCode(authAccount.accounts[0].currency)}/15`)

  console.log(graphData.data)
  
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
              onSubmit={value => setGraphCurrency(getCurrencyCode(value.currency))}
            >
              <Form className={styles.content__form}>
                <Select 
                  name='currency'
                  options={currencyList}
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
        <LineGraph title='Variação - Dólar Americano' options={lineChartOptions} data={lineChartData} />
      </main>
    </div>
  )
}
