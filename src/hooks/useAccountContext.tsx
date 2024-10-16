import { AccountContext } from "@/contexts/AccountContext"
import { AccountContextType } from "@/types/AccountContextType"
import { useContext } from "react"


export const useAccountContext = (): AccountContextType => {

    const context = useContext(AccountContext)
    if(!context) {throw new Error("useAccountContext deve ser usado dentro do AccountProvider")}

    return context
}
