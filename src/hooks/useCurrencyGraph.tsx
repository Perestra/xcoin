import { timestampConversor } from "@/utils/timestampConversor"
import { useEffect, useMemo, useState } from "react"
import { useGetAPIData } from "./useGetAPIData"
import { AwsomeAPI } from "@/api/EconomiaAwsomeAPI"
import { getCurrencyCode } from "@/utils/getCurrencyCode"
import { useAuthAccountContext } from "./useAuthAccountContext"

type DateCurrency = {
    label: string;
    value: number;
}

export const useCurrencyGraph = (graphCurrency: string) => {

  const { authAccount } = useAuthAccountContext()

  const [dateCurrency, setDateCurrency] = useState<DateCurrency[]>([])
  
  const currencyData = useGetAPIData(AwsomeAPI, '/available/uniq')
  const combinationsData = useGetAPIData(AwsomeAPI, '/available')
  const graphData = useGetAPIData(AwsomeAPI, `daily/${getCurrencyCode(graphCurrency, 0)}-${getCurrencyCode(authAccount.accounts[0].currency, 0)}/15`)
  
  const currencyList = useMemo( () => 
    Object.entries(currencyData.data??{}).map( ([key, value]) => ({label: value, value: key}) 
    ), [currencyData.data] )
  
  const currencyCombinations = useMemo( () => 
    Object.entries(combinationsData.data??{}).filter(([key]) => 
        key.includes(`-${getCurrencyCode(authAccount.accounts[0].currency, 0)}`) 
    ), [combinationsData.data]) 
  
  const getCurrencyCombination = useMemo( () => (
    [...new Set(currencyCombinations.map( value => {
        const key = value[0].split('-')[0]
        return currencyList.find( item => item.value == key )
      }))] 
  ), [currencyCombinations, currencyList] )

  useEffect(() => {
    const labels = new Set<DateCurrency['label']>()
    const newDateCurrency: DateCurrency[] = []

    Object.entries(graphData.data ?? {}).forEach(([key, item]) => {
        const label = timestampConversor(item.timestamp)
        const value = item.bid

        if (!labels.has(label)) {
          labels.add(label)
          newDateCurrency.push({ label, value })
        }
      })

    setDateCurrency(newDateCurrency)
  }, [graphData.data])

  const date = dateCurrency.map( date => date.label ).reverse()
  const currency = dateCurrency.map( date => date.value ).reverse()

  return {
    graphData,
    currencyData,
    getCurrencyCombination,
    date,
    currency,
  }
}


