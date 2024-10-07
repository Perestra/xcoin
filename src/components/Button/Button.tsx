import styles from './Button.module.scss'

type Props = {
    icon?: React.ElementType;
    text?: string;
    color: string;
}

export const Button: React.FC<Props> = ({ icon: Icon, text, color }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} type="button">
        {Icon && <Icon className={styles.button__icon} />}
        <span>{text}</span>
    </button>
  )
}
