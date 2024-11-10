import styles from './Button.module.scss'

import { Link } from 'react-router-dom';

type Props = {
    icon?: React.ElementType;
    text?: string;
    path?: string;
    color: string;
    type: "button" | "submit";
    title?: string;
    action?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ icon: Icon, text, path, color, type, title, action, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} type={type} title={title} onClick={onClick}>
      {Icon && <Icon className={`${styles.button__icon} ${action? styles[action]: ''}`} />}
      {!path && text && <span>{text}</span>}
      {path && text && <Link to={path}>{text}</Link>}
    </button>
  )
}
