import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ExpenseIncomeChart({ financialData, view = 'monthly' }) {
  // Mock data for demonstration (you can connect this to your real data)
  const labels = view === 'monthly'
    ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    : view === 'quarterly'
    ? ['Month 1', 'Month 2', 'Month 3']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: labels.map(() => Math.floor(Math.random() * 2000 + 2000)),
        borderColor: 'rgba(40, 167, 69, 1)', // green
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        tension: 0.3,
      },
      {
        label: 'Expense',
        data: labels.map(() => Math.floor(Math.random() * 1500 + 500)),
        borderColor: 'rgba(220, 53, 69, 1)', // red
        backgroundColor: 'rgba(220, 53, 69, 0.2)',
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#000' },
      },
      title: {
        display: true,
        text: 'Expense vs Income',
        color: '#000',
        font: { size: 18 },
      },
    },
    scales: {
      x: { ticks: { color: '#000' } },
      y: { ticks: { color: '#000' } },
    },
  }

  return <Line data={data} options={options} />
}
