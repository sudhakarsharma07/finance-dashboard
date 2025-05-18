import React from 'react';
import Header from '../components/Header';
import FinancialCards from '../components/FinancialCards';
import ExpenseIncomeChart from '../components/ExpenseIncomeChart';
import CategoryPieChart from '../components/CategoryPieChart';
import TransactionsTable from '../components/TransactionsTable';
import CalendarTracker from '../components/CalendarTracker';
import NotificationsTips from '../components/NotificationsTips';
import BudgetAssistant from '../components/BudgetAssistant';
import { user, financialData, categorySpending } from '../data/mockData';
import HomeNav from '../components/HomeNav'; 


const Dashboard = ({ darkMode, toggleDarkMode }) => {
  const savingsPercent = Math.round((user.currentSavings / user.savingsGoal) * 100);

  return (
    <div>
     <HomeNav />
      <Header
        user={user}
        savingsPercent={savingsPercent}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />    
      <FinancialCards financialData={financialData} />
      <TransactionsTable />
      <BudgetAssistant />
    </div>
  );
};

export default Dashboard;
