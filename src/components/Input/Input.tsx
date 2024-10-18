import styles from './Input.module.scss'

import { Field, useField } from 'formik'
import { IoAlertCircleOutline } from "react-icons/io5";

type Props = { 
  name: string;
  type: string;
  placeholder: string;
}

export const Input: React.FC<Props> = ({name, type, placeholder}) => {

  const [field, meta] = useField(name)
  
  return (
    <div className={`${styles.input} ${meta.touched && meta.error? styles.error: ""}`}>
      <Field 
        className={styles.input__area}
        type={type}
        placeholder={placeholder}
        autoComplete="true"
        {...field}
      />  
      {meta.touched && meta.error? <IoAlertCircleOutline className={styles.input__icon}/>: null}
      {meta.touched && meta.error? <span>{meta.error}</span>: null}
    </div>
  )
}
