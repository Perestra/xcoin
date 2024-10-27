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

const lineChartData = {
    labels: [
        "11/10/2024",
        "12/10/2024",
        "13/10/2024",
        "14/10/2024",
        "15/10/2024",
        "16/10/2024",
        "17/10/2024",
        "18/10/2024",
        "19/10/2024",
        "20/10/2024",
        "21/10/2024",
        "22/10/2024",
        "23/10/2024",
        "24/10/2024",
        "25/10/2024",
    ],
    datasets: [{
        label: "Valor da moeda",
        data: [5.65, 5.62, 5.67, 5.61, 5.65, 5.64, 5.59, 5.60, 5.63, 5.65, 5.68, 5.67, 5.63, 5.62, 5.60],
        borderColor: "#8CC7AB"
    }],
}

const lineChartOptions = {
    type: "Line",
    data: lineChartData,
    responsive: true
} 

export { lineChartData, lineChartOptions }