import { useField } from 'formik';
import styles from './Select.module.scss'

type Option = {
  value: string;
  label: string;
}

type Props = {
  options: Option[];
  name: string;
  placeholder: string;
}

export const Select: React.FC<Props> = ({ name, options, placeholder }) => {

  const [field, meta] = useField(name)

  return (
    <div className={`${styles.select} ${meta.touched && meta.error? styles.error: ""}`}>
      <select 
        className={styles.select__container} 
        {...field}
      >
        <option key='placeholder' aria-placeholder={placeholder} value="">{placeholder}</option>
        { options.map( (option, index) => (
            <option 
              key={index} 
              className={styles.select__option} 
              value={`${option.value} - ${option.label}`}
            >
              {option.value} - {option.label}
            </option>
        ) ) }
      </select>
      { meta.touched && meta.error? <span>{meta.error}</span>: null}
    </div>
  )
}
