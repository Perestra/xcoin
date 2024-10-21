import { AccountsType } from "@/types/AccountsType"
import { AuthAccountType } from "@/types/AuthAccountType"


const isUserAuth = (accounts: AccountsType[], accountAuth: AuthAccountType) => {
    if(accountAuth.accounts){
        return accounts.some( account => account.id === accountAuth.accounts[0].id )
    }
    return false
}

export { isUserAuth }