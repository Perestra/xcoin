import { Link } from 'react-router-dom';
import styles from './Button.module.scss'

type Props = {
    icon?: React.ElementType;
    text?: string;
    path?: string;
    color: string;
    type: "button" | "submit";
}

export const Button: React.FC<Props> = ({ icon: Icon, text, path, color, type }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} type={type}>
      {Icon && <Icon className={styles.button__icon} />}
      {!path && <span>{text}</span>}
      {path && <Link to={path}>{text}</Link>}
    </button>
  )
}
