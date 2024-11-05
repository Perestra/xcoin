import { AwsomeAPI } from "@/api/EconomiaAwsomeAPI";
import { useGetAPIData } from "./useGetAPIData";
import { getCurrencyCode } from "@/utils/getCurrencyCode";
import { useState } from "react";
import { useAuthAccountContext } from "./useAuthAccountContext";

type ExchangeCurrency = {
    from: string;
    to: string;
    amount: string;
}

export const useCurrencyExchange = () => {

    const { authAccount } = useAuthAccountContext()

    const [exchangeValues, setExchangeValues] = useState<ExchangeCurrency>({
        from: 'USD',
        to: getCurrencyCode(authAccount.accounts[0].currency, 0),
        amount: '1',
    });
    
    const exchangeData = useGetAPIData(AwsomeAPI, `/${getCurrencyCode(exchangeValues.from, 0)}-${getCurrencyCode(exchangeValues.to, 0)}`)

    const exchangeCalc = (amount: string) => {
        if (exchangeData.data) return (exchangeData.data[0].bid * parseFloat(amount.trim())).toFixed(2)
    }

    return { exchangeValues, setExchangeValues, exchangeData, exchangeCalc }

}
