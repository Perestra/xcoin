import { AccountsType } from "@/types/AccountsType";
import { AuthAccountType } from "@/types/AuthAccountType";
import { v4 as uuid } from 'uuid';

const createUserAuth = (account: AccountsType, setAuthAccount: React.Dispatch<React.SetStateAction<AuthAccountType>>) => {
    let authAccount = {
        accounts: [{
            id: account.id,
            fullName: account.fullName,
            username: account.username,
            email: account.email,
            password: account.password,
            currency: account.currency
        }],
        token: uuid()
    }
    setAuthAccount(authAccount)
}

export { createUserAuth }