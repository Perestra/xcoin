import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/AuthContextType";
import { useContext } from "react";
import { useAccountContext } from "./useAccountContext";


export const useAuthAccountContext = (): AuthContextType => {

    const context = useContext(AuthContext)
    if(!context) {throw new Error("useAuthAccountContext deve ser usado dentro do AuthProvider")}

    const { authAccount, setAuthAccount } = context
    const { accounts } = useAccountContext()
    
    const userLogged = accounts.filter(account => account.id === authAccount.accounts[0].id )[0]

    return { authAccount, setAuthAccount, userLogged  }
}