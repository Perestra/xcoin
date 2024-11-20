import { AccountsType } from "@/types/AccountsType"
import { AuthAccountType } from "@/types/AuthAccountType"
import { EditPasswordType } from "@/types/EditPasswordType"
import { Dispatch, SetStateAction } from "react"

const isUserPassword = ( userLogged: AccountsType, data: EditPasswordType, { setErrors }: any ) => {
    const isUserPassword = userLogged?.password === data.from
    
    if(!isUserPassword) {
        setErrors({
            from: "Digite sua senha atual corretamente."
        })
    } else {
        return isUserPassword
    }
}

const editPassword = (
        userLogged: AccountsType, 
        data: EditPasswordType, 
        accounts: AccountsType[], 
        setAccounts: Dispatch<SetStateAction<AccountsType[] | undefined>>, 
        setAuthAccount: Dispatch<SetStateAction<AuthAccountType | any>>,   
    ) => {
    const index = accounts.findIndex( account => account.id === userLogged?.id)

    const updatedAccounts = [...accounts]
    updatedAccounts[index] = {
        ...updatedAccounts[index],
        password: data.to
    }
    setAccounts(updatedAccounts)
    setAuthAccount(null)
}


export { isUserPassword, editPassword }