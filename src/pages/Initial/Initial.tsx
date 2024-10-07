import styles from './Initial.module.scss'
import cards from '../../json/InitialCard.json'
import images from '../../utils/Images'

import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { InitialCard } from '../../components/InitialCard/InitialCard'


export const Initial: React.FC = () => {
  return (
    <div className={styles.initial}>
      <div className={styles.initial__background}>
        <Header classUser='hidde' classNav='hidde' />
        <div className={styles.initial__content}>
          <h1>Conectando o mundo, moeda por moeda</h1>
          <Button text='Abra sua conta!' color='green'/>
        </div>
      </div>
      <main className={styles.initial__main}>
        <section className={styles.initial__section}> 
          <h1>Envio e Recebimento de Dinheiro para o Exterior</h1>
          <div className={styles.initial__cards}>
            {cards.Initial.map( card => (
              <InitialCard 
                key={card.id}  
                src={images[card.image.url]}
                alt={card.image.alt}
                title={card.title}
                description={card.description}
              />
            ) )}  
          </div>
        </section>
        <section className={styles.initial__section}>
          <h1>Disponibilizamos os mais variados tipos de moeda</h1>
        </section>
      </main>
    </div>
  )
}
