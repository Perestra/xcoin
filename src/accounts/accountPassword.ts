import { AccountsType } from "@/types/AccountsType";
import { ForgotPasswordType } from "@/types/ForgotPasswordType";

const accountPassword = (data: ForgotPasswordType, accounts: AccountsType[], setPassword: React.Dispatch<React.SetStateAction<string | undefined>>) => {
    const userAccount = accounts.find( account => account.email === data.email)
    setPassword(userAccount?.password) 
}
export { accountPassword }