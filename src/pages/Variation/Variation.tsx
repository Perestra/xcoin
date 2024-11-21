import styles from './Variation.module.scss'

import { Header } from '@/components/Header/Header'
import { Select } from '@/components/Select/Select'
import { Form, Formik } from 'formik'
import { HomeSchema, initialValues } from '@/yupValidations/VariationValidation'
import { UserIntroduction } from '@/components/UserIntroduction/UserIntroduction'
import { Button } from '@/components/Button/Button'
import { LuSearch } from "react-icons/lu";
import { LineGraph } from '@/components/LineGraph/LineGraph'
import { lineChartData, lineChartOptions } from '@/utils/LineChart'
import { getCurrencyCode } from '@/utils/getCurrencyCode'
import { useCurrencyList } from '@/hooks/useCurrencyList'
import { useDailyCurrency } from '@/hooks/useDailyCurrency'

export const Variation: React.FC = () => {

  const { currencyData, getCurrencyCombination, graphCurrency, setGraphCurrency } = useCurrencyList()
  const { date, currency } = useDailyCurrency(graphCurrency || '')

  return (
    <div className={styles.content}>
      <Header 
        classLogin='hidde' 
        bgColor='blue'
        to='/variacao'
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
        { currency && 
          <LineGraph 
            title={`Variação - ${getCurrencyCode(graphCurrency, 1)}`} 
            options={lineChartOptions} 
            data={lineChartData(date, currency)}
            code={getCurrencyCode(graphCurrency, 0)}
          />
        }
      </main>
    </div>
  )
}
