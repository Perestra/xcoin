import style from './LineGraph.module.scss'

import { Line } from 'react-chartjs-2'
import { ChartData, Point } from 'chart.js';
import { FavButton } from '../FavButton/FavButton';
import { useFavoriteCurrency } from '@/hooks/useFavoriteCurrency';

type Props = { 
  title: string;
  options: {}
  data: ChartData<"line", (number | Point | null)[], unknown>;
  code: string;
}

export const LineGraph: React.FC<Props> = ({ title, options, data, code }) => {

  const { isCodeInList, addFavoriteCurrency, remFavoriteCurrency } = useFavoriteCurrency(code)

  return (
    <section className={style.section}>
      <div className={style.section__header}>
        <h1>{title}</h1>
        <FavButton 
          onClick={!isCodeInList? () => addFavoriteCurrency(code): () => remFavoriteCurrency(code)}
          code={code}
        />
      </div>
      <Line options={options} data={data} className={style.section__line} />
      <span>** A variação é em relação a sua moeda principal</span>
    </section>
  )
}
