import { useAccountContext } from '@/hooks/useAccountContext';
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext';

export const useFavoriteCurrency = (code: string) => {

    const { accounts, setAccounts } = useAccountContext()
    const { authAccount } = useAuthAccountContext()

    const userLogged = accounts.filter(account => account.id === authAccount.accounts[0].id )
    const isCodeInList = userLogged[0].favorites.find( fav => fav.code === code )

    const addFavoriteCurrency = (currencyCode: string) => {
        const favorite = {code: currencyCode}
        userLogged[0].favorites = [...userLogged[0].favorites, favorite]
        setAccounts([...accounts])  
    }

    const remFavoriteCurrency = (currencyCode: string) => {
        const remFavorite = userLogged[0].favorites.filter( currency => currency.code !== currencyCode )
        userLogged[0].favorites = [...remFavorite]
        setAccounts([...accounts])
    }

    return { isCodeInList, addFavoriteCurrency, remFavoriteCurrency }

}

