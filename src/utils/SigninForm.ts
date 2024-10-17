import { object, string } from "yup"

const initialValues = { 
    email: '', 
    password: ''
}

const signinSchema =
object({
    email: 
        string()
        .email("É necessário digitiar um e-mail válido.")
        .required("É necessário inserir um e-mail."),
    password: 
        string()
        .required("É necessário inserir uma senha."),
})

export { initialValues, signinSchema }