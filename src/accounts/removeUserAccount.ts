import { AccountsType } from "@/types/AccountsType";
import { AuthAccountType } from "@/types/AuthAccountType";


const removeUserAccount = (
    accounts: AccountsType[], 
    setAccounts: React.Dispatch<React.SetStateAction<AccountsType[] | undefined>>, 
    setAuthAccount: React.Dispatch<React.SetStateAction<AuthAccountType | null>>, 
    loggedId: string | undefined
    ) => {

    const newAccounts = accounts.filter( (account: AccountsType) => account.id !== loggedId )
    setAccounts([...newAccounts])
    setAuthAccount(null)
    window.scrollTo(0,0)
}

export { removeUserAccount }