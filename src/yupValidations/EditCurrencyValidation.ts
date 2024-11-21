import { object, string } from "yup"


const initialValues = {
    to: ''
}

const EditCurrencySchema = () => 
object({
    to: 
    string()
    .required("É necessário selecionar sua nova moeda principal."),
})

export { initialValues, EditCurrencySchema }