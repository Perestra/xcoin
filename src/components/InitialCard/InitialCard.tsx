import styles from './InitialCard.module.scss'

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const InitialCard: React.FC<Props> = ({ src, alt, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={src} alt={alt} />
      <div className={styles.card__description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
