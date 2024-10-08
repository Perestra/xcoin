import styles from './Initial.module.scss'
import cards from '../../json/InitialCard.json'
import currency from '../../json/CurrencyType.json'
import line from '../../assets/png/app.png'

import {initialImages} from '../../utils/Images'
import {currencyType} from '../../utils/Icons'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { InitialCard } from '../../components/InitialCard/InitialCard'
import { CurrencyType } from '../../components/CurrencyType/CurrencyType'

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
                src={initialImages[card.image.url]}
                alt={card.image.alt}
                title={card.title}
                description={card.description}
              />
            ) )}  
          </div>
        </section>
        <section className={styles.initial__section}>
          <h1>Disponibilizamos os mais variados tipos de moeda</h1>
          <div className={styles.initial__currency}>
            {currency.Currency.map( type => (
              <CurrencyType 
                key={type.id}
                title={type.title}
                description={type.description}
                icon={currencyType[type.icon]}
              />
            ) )}
          </div>
        </section>
        <div className={styles.initial__line}>
          <h1>Venha revolucionar o mundo das finanças conosco!</h1>
          <Button 
            text='Abra sua conta!'
            color='green'
          />
        </div>
        <section className={styles.initial__app}>
            <div className={styles.initial__imgApp}>
              <img src={line} alt="Mulher branca e ruiva celular o celular preto com as duas mãos e na mão esquerda está segurando uma sacola vermelha e outra amarela." />
            </div>
            <div className={styles.initial__appDescription}>
              <h1>Aplicativo XCoin</h1>
              <p>Acompanhe seu saldo, extrato e recarregue seu cartão pré-pago internacional. Pelo App você também recebe notificações quando o Dólar, Euro e outras moedas estrangeiras estiverem em queda para aproveitar a melhor cotação para realizar suas recargas.</p>
            </div>
        </section>
      </main>
    </div>
  )
}
