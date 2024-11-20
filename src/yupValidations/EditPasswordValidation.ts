import { object, ref, string } from "yup"


const initialValues = { 
    from: '',
    to: '',
    toConfirm: ''
}

const EditPasswordSchema = () => 
object({
    from:
    string() 
    .required("É necessário inserir sua senha atual.")
    .min(5, "É necessário ter, no mínimo, 5 caracteres."),
    to:
    string()
    .required("É necessário inserir sua nova senha.")
    .min(5, "É necessário ter, no mínimo, 5 caracteres.")
    .notOneOf([ref("from")], "A nova senha deve ser diferente da atual."),
    toConfirm:
    string()
    .required("É necessário confirmar sua nova senha.")
    .min(5, "É necessário ter, no mínimo, 5 caracteres.")
    .oneOf([ref("to")], "A confirmação deve ser igual a sua nova senha.")
})

export { initialValues, EditPasswordSchema }