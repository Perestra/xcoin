import { useEffect, useMemo, useState } from "react"
import { useGetAPIData } from "./useGetAPIData"
import { AwsomeAPI } from "@/api/EconomiaAwsomeAPI"
import { getCurrencyCode } from "@/utils/getCurrencyCode"
import { useAuthAccountContext } from "./useAuthAccountContext"

export const useCurrencyList = () => {

  const { authAccount } = useAuthAccountContext()

  const currencyData = useGetAPIData(AwsomeAPI, '/available/uniq')
  const combinationsData = useGetAPIData(AwsomeAPI, '/available')

  const currencyList = useMemo( () => 
    Object.entries(currencyData.data??{}).map( ([key, value]) => ({label: value, value: key}) 
    ), [currencyData.data] )
  
  const currencyCombinations = useMemo( () => 
    Object.entries(combinationsData.data??{}).filter(([key]) => 
        key.includes(`-${getCurrencyCode(authAccount?.accounts?.[0]?.currency, 0)}`) 
    ), [combinationsData.data]) 
  
  const getCurrencyCombination = useMemo( () => (
    [...new Set(currencyCombinations.map( value => {
        const key = value[0].split('-')[0]
        return currencyList.find( item => item.value == key )
      }))] 
  ), [currencyCombinations, currencyList] )
  
  const [graphCurrency, setGraphCurrency] = useState<string>('')

  useEffect(() => {
    if(getCurrencyCombination?.[0]) {
      const firstCurrency = `${getCurrencyCombination?.[0]?.value} - ${getCurrencyCombination?.[0]?.label}`
      setGraphCurrency(firstCurrency)
    }
  }, [getCurrencyCombination])

  return {
    currencyData,
    currencyList,
    getCurrencyCombination,
    graphCurrency, 
    setGraphCurrency
  }
}


