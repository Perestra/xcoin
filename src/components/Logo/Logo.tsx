import styles from './Logo.module.scss'

type Props = {
  src: string;
}

export const Logo: React.FC<Props> = ({ src }) => {
  return (
    <div className={styles.logo}>
      <a className={styles.logo__link} href='*'>
        <img className={styles.logo__img} src={src} alt="Logo da XCoin com o X em verde e o Coin em Branco" />
      </a>
    </div>
  )
}
