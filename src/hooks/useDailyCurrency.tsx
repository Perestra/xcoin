import { useEffect, useState } from "react";
import { useAuthAccountContext } from "./useAuthAccountContext";
import { useGetAPIData } from "./useGetAPIData";
import { AwsomeAPI } from "@/api/EconomiaAwsomeAPI";
import { getCurrencyCode } from "@/utils/getCurrencyCode";
import { timestampConversor } from "@/utils/timestampConversor";

type DateCurrency = {
  label: string;
  value: number;
}

export const useDailyCurrency = (graphCurrency: string) => {
  
  const { authAccount } = useAuthAccountContext()
  const [dateCurrency, setDateCurrency] = useState<DateCurrency[]>([])

  const dailyData = useGetAPIData(AwsomeAPI, `daily/${getCurrencyCode(graphCurrency, 0)}-${getCurrencyCode(authAccount.accounts[0].currency, 0)}/15`)

  useEffect(() => {
    const labels = new Set<DateCurrency['label']>()
    const newDateCurrency: DateCurrency[] = []

    Object.entries(dailyData.data ?? {}).forEach(([, currency]) => {
      const label = timestampConversor(currency.timestamp)
      const value = currency.bid

      if (!labels.has(label)) {
        labels.add(label)
        newDateCurrency.push({ label, value })
      }
      })

    setDateCurrency(newDateCurrency)
  }, [dailyData.data])

  const date = dateCurrency.map( date => date.label ).reverse()
  const currency = dateCurrency.map( date => date.value ).reverse()

  return {
    dailyData,
    date,
    currency,
  }

}
