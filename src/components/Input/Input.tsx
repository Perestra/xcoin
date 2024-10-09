import styles from './Input.module.scss'

import { Field } from 'formik'
import { IoAlertCircleOutline } from "react-icons/io5";

type Props = { 
    name: string;
    type: string;
    placeholder: string;
    error: string | undefined;
}

export const Input: React.FC<Props> = ({name, type, placeholder, error}) => {
  return (
    <div className={`${styles.input} ${typeof error === "string" && styles.error}`}>
        <Field 
            className={styles.input__area}
            name={name}
            type={type}
            placeholder={placeholder}
        />  
        {typeof error === "string" && <IoAlertCircleOutline className={styles.input__icon} />}
        <span>{error}</span>  
    </div>
  )
}
