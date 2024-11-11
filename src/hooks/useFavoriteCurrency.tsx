import { useAccountContext } from '@/hooks/useAccountContext';
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext';

export const useFavoriteCurrency = (code: string) => {

    const { accounts, setAccounts } = useAccountContext()
    const { userLogged } = useAuthAccountContext()

    const isCodeInList = userLogged.favorites.find( fav => fav.code === code )

    const addFavoriteCurrency = (currencyCode: string) => {
        const favorite = {code: currencyCode}
        userLogged.favorites = [...userLogged.favorites, favorite]
        setAccounts([...accounts])  
    }

    const remFavoriteCurrency = (currencyCode: string) => {
        const remFavorite = userLogged.favorites.filter( currency => currency.code !== currencyCode )
        userLogged.favorites = [...remFavorite]
        setAccounts([...accounts])
    }

    return { isCodeInList, addFavoriteCurrency, remFavoriteCurrency }

}

