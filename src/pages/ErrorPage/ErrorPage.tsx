import styles from './ErrorPage.module.scss'

import { Header } from '@/components/Header/Header'
import { TbCoinBitcoin } from "react-icons/tb";
import { Button } from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <div className={ styles.content }>
      <Header 
        classLogin='hidde' 
        classNav='hidde'
        classUser='hidde'
        bgColor='blue'
        to='/variacao'
      />
      <main className={styles.content__main}>
        <section className={styles.content__section}>
          <div className={styles.content__intro}>
            <h3>Oops...</h3>
            <span>Parece que você conhece uma moeda nova</span>
          </div>
          <div className={styles.content__error}>
            <span>4</span>
            <TbCoinBitcoin className={styles.content__iconError}/>
            <span>4</span>
          </div>
          <div className={styles.content__navigate}>
            <span>Farei com que, da próxima vez, seja convertida! Mas enquanto isso...</span>
            <Button 
              color='green'
              type='button'
              text='Voltar para página anterior'
              onClick={ () => navigate(-1) }
            />
          </div>
        </section>
      </main>
    </div>
  )
}
