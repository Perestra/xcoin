import { CreateAccountType } from "@/types/CreateAccountType"
import { AccountsType } from "@/types/AccountsType"
import { isValidInputData } from "./formValidation";
import { v4 as uuid } from 'uuid';
  
const createAccount = (data: CreateAccountType, accounts: AccountsType[], setAccounts: React.Dispatch<React.SetStateAction<AccountsType[]>>) => {
    
    let account: AccountsType = {
        id: uuid(),
        fullName: data.fullName,
        username: data.username.trim(),
        email: data.email.toLowerCase(),
        password: data.password,
        currency: data.currency
    }

    if (!isValidInputData(data.email, 'email', accounts) && !isValidInputData(data.username, 'username', accounts)) {
        setAccounts([account, ...accounts])  
    } 
}

export { createAccount }
