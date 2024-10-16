import { AccountsType } from "@/types/AccountsType"

const isValidInputData = (data: string, name: keyof AccountsType, accounts: AccountsType[]) => {
    return accounts.some( (account: AccountsType) => data === account[name] )
}

export { isValidInputData }