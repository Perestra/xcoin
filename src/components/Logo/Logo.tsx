import styles from './Logo.module.scss'
import  LogoColored from '../../assets/svg/colored_logo.svg'

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
        <a className={styles.logo__link} href='*'>
            <img className={styles.logo__img} src={LogoColored} alt="Logo da XCoin com o X em verde e o Coin em Branco" />
        </a>
    </div>
  )
}
