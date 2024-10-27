import { useAxios } from "@/hooks/useAxios"
import { AxiosInstance } from "axios"
import { useState } from "react"

export const useGetAPIData = (instance: AxiosInstance, url?: string | null | undefined) => {
    
    const { data, loading, error } = useAxios<Record<string, string>>(instance, 'get', url)

    const [graphCurrency, setGraphCurrency] = useState<string>('USD - Dólar Americano')

    return { 
        data, loading, error,
        graphCurrency, setGraphCurrency
    }
}