import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/AuthContextType";
import { useContext } from "react";


export const useAuthAccountContext = (): AuthContextType => {

    const context = useContext(AuthContext)
    if(!context) {throw new Error("useAuthAccountContext deve ser usado dentro do AuthProvider")}

    const { authAccount, setAuthAccount } = context

    return { authAccount, setAuthAccount }
}