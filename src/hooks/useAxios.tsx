import { useEffect, useState } from "react"
import axios, { AxiosInstance, AxiosResponse } from "axios"

type UseAxiosResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
  }

export const useAxios = <T,>(axiosInstance: AxiosInstance, method: 'get' | 'post' | 'put' | 'delete', url: string): UseAxiosResult<T> => {
  
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        setLoading(true)
        setError(null)

        const controller = new AbortController()

        const fetchData = async () => {
            
            try {
                const res: AxiosResponse<T> = await axiosInstance[method](url, {
                        signal: controller.signal
                    });
                    setData(res.data)
            } catch (err) {
                if(axios.isAxiosError(err)) err.code === 'ERR_BAD_REQUEST'? setError('Não é possível realizar essa conversão'): null
                if(axios.isAxiosError(err)) err.code === 'ECONNABORTED'? setError('Aguarde um momento para realizar uma nova conversão'): null
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        return () => controller.abort()
    }, [axiosInstance, method, url] )

    return {data, loading, error}
}
