import { Link } from 'react-router-dom';
import styles from './Logo.module.scss'

type Props = {
  to: string;
  src: string;
}

export const Logo: React.FC<Props> = ({ to, src }) => {
  return (
    <div className={styles.logo}>
      <Link className={styles.logo__link} to={to}>
        <img className={styles.logo__img} src={src} alt="Logo da XCoin com o X em verde e o Coin em Branco" />
      </Link>
    </div>
  )
}
