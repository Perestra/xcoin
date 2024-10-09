import { object, ref, string } from "yup"

export type CreateAccountType = {
    fullName: string;
    username: string;
    email: string;
    password: string;
}

const initialValues = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const CreateAccountSchema = object({
    fullName:
        string()
        .required("É necessário inserir seu nome completo."),
    username:
        string()
        .required("É necessário inserir seu usuário.")
        .max(16, "É necessário ter, no máximo, 16 caracteres."),
    email: 
        string()
        .required("É necessário inserir um e-mail.")
        .email("É necessário digitiar um e-mail válido."),
    password: 
        string()
        .required("É necessário inserir uma senha.")
        .min(5, "É necessário ter, no mínimo, 5 caracteres."),
    confirmPassword: 
        string()
        .required("É necessário inserir uma senha.")
        .min(5, "É necessário ter, no mínimo, 5 caracteres.")
        .oneOf([ref("password")], "As senhas devem ser iguais.")
})

export { initialValues, CreateAccountSchema }