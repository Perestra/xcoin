import style from './LineGraph.module.scss'

import { Line } from 'react-chartjs-2'
import { ChartData, Point } from 'chart.js';
import { FavButton } from '../FavButton/FavButton';

type Props = { 
  title: string;
  options: {}
  data: ChartData<"line", (number | Point | null)[], unknown>
}

export const LineGraph: React.FC<Props> = ({ title, options, data }) => {
  return (
    <section className={style.section}>
      <div className={style.section__header}>
        <h1>{title}</h1>
        <FavButton />
      </div>
      <Line options={options} data={data} className={style.section__line} />
    </section>
  )
}
