import { useAxios } from "@/hooks/useAxios"
import { AxiosInstance } from "axios"

export const useGetAPIData = (instance: AxiosInstance, url: string) => {
    
    const { data, loading, error } = useAxios<Record<string, string>>(instance, 'get', url)

    return {data, loading, error}
}