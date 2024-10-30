import { object, string } from "yup"

const initialValues = {
    amount: '',
    from: '',
    to: ''
}

const ExchangeSchema = 
object({
    amount:
        string()
        .required("É necessário digitar uma quantia")
        .min(1, "Você deve digitar um valor maior que 1"),
    from: 
        string()
        .required("É necessário digitar um valor inicial")
        .min(1, "Você deve digitar um valor maior que 1"),
    to: 
        string()
        .required("É necessário digitar um valor final")
        .min(1, "Você deve digitar um valor maior que 1")
})

export { initialValues, ExchangeSchema }