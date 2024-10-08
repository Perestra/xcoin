import styles from './CurrencyType.module.scss'

type Props = {
    icon: React.ElementType;
    title: string;
    description: string;
}

export const CurrencyType: React.FC<Props> = ({ icon:Icon, title, description }) => {
  return (
    <div className={styles.currency}>
        <div className={styles.currency__type}>
            <Icon className={styles.currency__icon}/>
        </div>
        <div className={styles.currency__content}>
            <h1>{title}</h1>
            <p>{description}</p>    
        </div>
    </div>
  )
}
