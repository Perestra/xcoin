import { useEffect, useState } from "react"
import axios, { AxiosInstance, AxiosResponse } from "axios"

type UseAxiosResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
  }

export const useAxios = <T,>(axiosInstance: AxiosInstance, method: 'get' | 'post' | 'put' | 'delete', url: string): UseAxiosResult<T> => {
  
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        const controller = new AbortController()

        const fetchData = async () => {
            try {
                const res: AxiosResponse<T> = await axiosInstance[method](url, {
                        signal: controller.signal
                    });
                    setData(res.data)
            } catch (err) {
                axios.isAxiosError(err)? setError(err.message): setError("An unexpected error occurred")
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        return () => {
            controller.abort()
        }
    }, [axiosInstance, method, url] )

    return {data, loading, error}
}
