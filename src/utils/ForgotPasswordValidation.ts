import { object, string } from "yup"
import { AccountsType } from "@/types/AccountsType"
import { isValidInputData } from "@/accounts/formValidation"

const initialValues = {
    email: ''
}

const ForgotPasswordSchema = (accounts: AccountsType[]) =>
object({
    email: 
        string()
        .required("É necessário inserir um e-mail.")
        .email("É necessário digitiar um e-mail válido.")
        .test("validEmail", "Não existe uma conta com essa e-mail", data => isValidInputData(data, 'email', accounts)),
}) 

export { initialValues, ForgotPasswordSchema }