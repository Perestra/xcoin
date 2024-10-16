import { AccountsType } from "./AccountsType";

export type AccountContextType = {
    accounts: AccountsType[];
    setAccounts: React.Dispatch<React.SetStateAction<AccountsType[] | undefined>>
}
