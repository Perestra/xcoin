import { AccountsType } from "@/types/AccountsType"
import { AuthAccountType } from "@/types/AuthAccountType"
import { EditCurrencyType } from "@/types/EditCurrencyType"
import { Dispatch, SetStateAction } from "react"

const isUserCurrency = ( userLogged: AccountsType, data: EditCurrencyType, { setErrors }: any ) => {
    const isUserCurrency = userLogged?.currency === data.to
    
    if(isUserCurrency) {
        setErrors({
            to: "Sua nova moeda deve ser diferente da atual."
        })
    } else {
        return isUserCurrency
    }
}

const editCurrency = (
        userLogged: AccountsType, 
        data: EditCurrencyType, 
        accounts: AccountsType[], 
        setAccounts: Dispatch<SetStateAction<AccountsType[] | undefined>>, 
        setAuthAccount: Dispatch<SetStateAction<AuthAccountType | any>>,   
    ) => {
    const isUserCurrency = userLogged?.currency !== data.to
    const index = accounts.findIndex( account => account.id === userLogged?.id )
    const updatedAccounts = [...accounts]
    if(isUserCurrency) {
        updatedAccounts[index] = {
            ...updatedAccounts[index],
            currency: data.to
        } 
        setAccounts(updatedAccounts)
        setAuthAccount(null)    
    }
}

export { isUserCurrency, editCurrency }