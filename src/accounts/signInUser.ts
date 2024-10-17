import { AccountsType } from "@/types/AccountsType"
import { SigninType } from "@/types/SignInType"

const isValidUser = (data: SigninType, { setErrors }: any, accounts: AccountsType[]) => {
    if(!accounts.some( account => account.email === data.email && account.password === data.password )) {
        setErrors({
            email: "O e-mail ou a senha está incorreto.",
            password: "O e-mail ou a senha está incorreto."
    })
    return
}}

export { isValidUser }