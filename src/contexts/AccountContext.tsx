import useLocalStorage from "use-local-storage";

import { createContext } from "react";
import { AccountsType } from "@/types/AccountsType";
import { AccountContextType } from "@/types/AccountContextType";

export const AccountContext = createContext<AccountContextType | undefined>(undefined)

type Props = {
    children: React.ReactNode
}

export const AccountProvider: React.FC<Props> = ({ children }) => {

    const [accounts, setAccounts] = useLocalStorage<AccountsType[]>('Accounts', [])

    return (
        <AccountContext.Provider value={{ accounts, setAccounts }}>
            {children}
        </AccountContext.Provider>
    )
}
