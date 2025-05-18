import React, { useState } from 'react';
import ExpenseIncomeChart from '../components/ExpenseIncomeChart';
import CategoryPieChart from '../components/CategoryPieChart';
import { financialData, categorySpending } from '../data/mockData';
import './Charts.css'; // For custom styling

const Charts = () => {
  const [view, setView] = useState('monthly');

  return (
    <div className="charts-container">
      <h3 className="mb-4">Expense vs Income & Category-wise Spending</h3>
      <div className="charts-grid">
        <div className="chart-item">
          <ExpenseIncomeChart financialData={financialData} view={view} />
        </div>
        <div className="chart-item">
          <CategoryPieChart categorySpending={categorySpending} />
        </div>
         
      </div>
    </div>
  );
};

export default Charts;
