import { object, string } from "yup"

export type SigninType = {
    email: string;
    password: string;
}

const initialValues = { 
    email: '', 
    password: ''
}

const signinSchema = object({
    email: 
        string()
        .email("É necessário digitiar um e-mail válido.")
        .required("É necessário inserir um e-mail."),
    password: 
        string()
        .min(5, "É necessário ter, no mínimo, 5 caracteres.")
        .required("É necessário inserir uma senha.")
})

export { initialValues, signinSchema }