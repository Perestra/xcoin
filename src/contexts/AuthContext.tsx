import useLocalStorage from "use-local-storage";

import { AuthAccountType } from "@/types/AuthAccountType";
import { AuthContextType } from "@/types/AuthContextType";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

type Props = {
    children: React.ReactNode
} 

export const AuthProvider: React.FC<Props> = ({ children }) => {

    const [ authAccount, setAuthAccount ] = useLocalStorage<AuthAccountType>("Token", {} as AuthAccountType)

    return (
        <AuthContext.Provider value={{ authAccount, setAuthAccount }}>
            { children }
        </AuthContext.Provider>
    )
}