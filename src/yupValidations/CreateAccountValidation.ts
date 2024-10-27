import { object, ref, string } from "yup"
import { isValidInputData } from "@/accounts/formValidation"
import { AccountsType } from "@/types/AccountsType"

const initialValues = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    currency:''
}

const CreateAccountSchema = (accounts: AccountsType[]) => 
object({
    fullName:
        string()
        .required("É necessário inserir seu nome completo."),
    username:
        string()
        .required("É necessário inserir seu usuário.")
        .max(16, "É necessário ter, no máximo, 16 caracteres.")
        .test('validUsername', "Já existe uma conta com esse usuário.", value => !isValidInputData(value, 'username', accounts)),
    email: 
        string()
        .required("É necessário inserir um e-mail.")
        .email("É necessário digitiar um e-mail válido.")
        .test('validEmail', "Já existe uma conta com esse e-mail.", value => !isValidInputData(value, 'email', accounts)),
    password: 
        string()
        .required("É necessário inserir uma senha.")
        .min(5, "É necessário ter, no mínimo, 5 caracteres."),
    confirmPassword: 
        string()
        .required("É necessário confirmar sua senha.")
        .min(5, "É necessário ter, no mínimo, 5 caracteres.")
        .oneOf([ref("password")], "As senhas devem ser iguais."),
    currency: 
        string()
        .required("É necessário selecionar sua moeda principal.")
})

export { initialValues, CreateAccountSchema }