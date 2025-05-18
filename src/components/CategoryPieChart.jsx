import React, { useState } from 'react'
import Charts from './Charts'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function CategoryPieChart({ categorySpending }) {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Data for main categories pie chart

const mainPieData = {
  labels: categorySpending.map((cat) => cat.category), // Change from cat.name to cat.category
  datasets: [
    {
      data: categorySpending.map((cat) => cat.amount),
      backgroundColor: categorySpending.map((cat) => cat.color), // Use stored colors
      hoverOffset: 10,
    },
  ],
};


  // Data for subcategories pie chart when a category is selected
  const subPieData = selectedCategory
    ? {
        labels: selectedCategory.subcategories.map((sub) => sub.name),
        datasets: [
          {
            data: selectedCategory.subcategories.map((sub) => sub.amount),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
            ],
            hoverOffset: 10,
          },
        ],
      }
    : null

  // Handle pie slice click
  const onPieClick = (event, elements) => {
    if (elements.length === 0) {
      setSelectedCategory(null)
      return
    }

    const index = elements[0].index
    if (!selectedCategory) {
      setSelectedCategory(categorySpending[index])
    } else {
      setSelectedCategory(null)
    }
  }

  return (
    <div>
      <h3>Category-wise Spending</h3>
      {selectedCategory ? (
        <div>
          <button onClick={() => setSelectedCategory(null)}>Back</button>
          <Pie data={subPieData} />
        </div>
      ) : (
        <Pie
          data={mainPieData}
          onClick={onPieClick}
          options={{ plugins: { legend: { position: 'bottom' } } }}
        />
      )}
    </div>
  )
}
