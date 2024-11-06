import style from './FavCard.module.scss'

import { useFavoriteCurrency } from '@/hooks/useFavoriteCurrency'
import { FavButton } from '../FavButton/FavButton'

type Props = {
    coin: string;
    code: string;
    exchange: string;
}

export const FavCard: React.FC<Props> = ({ coin, code, exchange }) => {

  const { isCodeInList, addFavoriteCurrency, remFavoriteCurrency } = useFavoriteCurrency(code)

  return (
    <div className={style.card}>
        <div className={style.card__currency}>
            <div className={style.card__data}>
                <h3>{coin}</h3>
                <span>1.00 {code}</span>
            </div>
            <FavButton 
                onClick={!isCodeInList? () => addFavoriteCurrency(code): () => remFavoriteCurrency(code)}
                code={code}
            />
        </div>
        <div className={style.card__exchange}>
            <h2>{exchange}</h2>
        </div>
    </div>
  )
}
