import { object, string } from "yup"

const initialValues = {
    currency: 'USD - Dólar Americano'
}

const HomeSchema = () => 
object({
    currency: 
        string()
        .required("É necessário selecionar uma moeda.")
})

export { initialValues, HomeSchema }