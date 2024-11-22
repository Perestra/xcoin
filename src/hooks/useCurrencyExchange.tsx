import { AwsomeAPI } from "@/api/EconomiaAwsomeAPI";
import { useGetAPIData } from "./useGetAPIData";
import { getCurrencyCode } from "@/utils/getCurrencyCode";
import { useEffect, useState } from "react";
import { useAuthAccountContext } from "./useAuthAccountContext";

type ExchangeCurrency = {
    from: string;
    to: string;
    amount: string;
}

export const useCurrencyExchange = (graphCurrency: string) => {

    const { authAccount } = useAuthAccountContext()

    const [exchangeValues, setExchangeValues] = useState<ExchangeCurrency>({
        from: getCurrencyCode(graphCurrency, 0),
        to: getCurrencyCode(authAccount.accounts[0].currency, 0),
        amount: '1',
    })

    const apiPath = exchangeValues.from? 
    `/${getCurrencyCode(exchangeValues.from, 0)}-${getCurrencyCode(exchangeValues.to, 0)}`: null

    const exchangeData = useGetAPIData(AwsomeAPI, apiPath || '')

    const exchangeCalc = (amount: string) => {
        if (exchangeData?.data?.[0]) return (exchangeData.data[0].bid * parseFloat(amount.trim())).toFixed(2)
    }

    useEffect(() => {
        if (graphCurrency && graphCurrency !== '') {
            setExchangeValues((prev) => ({
                ...prev,
                from: getCurrencyCode(graphCurrency, 0),
            }));
        }
    }, [graphCurrency])

    return { exchangeValues, setExchangeValues, exchangeData, exchangeCalc }
}
