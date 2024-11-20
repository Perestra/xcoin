import { removeUserAccount } from "@/accounts/removeUserAccount"
import { AccountsType } from "@/types/AccountsType";
import { AuthAccountType } from "@/types/AuthAccountType";
import { Dispatch, SetStateAction } from "react";

const dialog = document.querySelector("dialog");

const closeModal = () => {
    dialog?.close()
    // window.document.body.classList.toggle('scroll-lock')
}

const openModal = () => {
    dialog?.showModal()
    // window.document.body.classList.toggle('scroll-lock')
}

const deleteAccount = (
        accounts: AccountsType[], 
        setAccounts: Dispatch<SetStateAction<AccountsType[] | undefined>>, 
        setAuthAccount: Dispatch<SetStateAction<AuthAccountType | any>>, 
        id: string | undefined
    ) => {
    removeUserAccount(accounts, setAccounts, setAuthAccount, id)
    closeModal()
}

export { closeModal, openModal, deleteAccount }