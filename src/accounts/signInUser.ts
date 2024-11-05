import { createUserAuth } from "@/authentication/createUserAuth"
import { AccountsType } from "@/types/AccountsType"
import { AuthAccountType } from "@/types/AuthAccountType"
import { SigninType } from "@/types/SignInType"
import { NavigateFunction } from "react-router-dom"

const isValidUser = (data: SigninType, { setErrors }: any, accounts: AccountsType[], setAuthAccount: React.Dispatch<React.SetStateAction<AuthAccountType>>, navigate: NavigateFunction ) => {
    const isAccountValid = accounts.find( account => account.email === data.email && account.password === data.password )

    if(!isAccountValid) {
        setErrors({
            email: "O e-mail ou a senha está incorreto.",
            password: "O e-mail ou a senha está incorreto."
        }) 
    } else {
        createUserAuth(isAccountValid, setAuthAccount)
        navigate("/variacao")
    }
}

export { isValidUser }