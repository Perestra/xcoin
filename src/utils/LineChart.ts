import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Legend 
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
)

const lineChartData = (dates: string[], currencys: number[]) => ({
    labels: dates.map((date: string) => date),
    datasets: [{
        label: "Valor da moeda",
        data: currencys.map((currency: number) => currency),
        borderColor: "#8CC7AB",
        fill: false,
        tension: 0.1
    }]
})

const lineChartOptions = {
    type: "Line",
    data: lineChartData,
    responsive: true
} 

export { lineChartData, lineChartOptions }