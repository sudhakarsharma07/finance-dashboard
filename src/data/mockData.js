export const user = {
  name: 'Sudhakar Sharma',
  avatarUrl: 'https://i.pravatar.cc/150?img=3',
  savingsGoal: 5000,
  currentSavings: 3200,
}

export const financialData = {
  balance: 15000,
  monthlyIncome: 4500,
  monthlyExpenses: 2800,
  savingsRatio: 0.4,
  incomeHistory: {
    monthly: 4500,
    quarterly: 13000,
    yearly: 52000,
  },
  expenseHistory: {
    monthly: 2800,
    quarterly: 8400,
    yearly: 33600,
  },
}

export const transactions = [
  { id: 1, date: '2025-05-16', description: 'Salary', type: 'Credit', category: 'Income', amount: 4500 },
  { id: 2, date: '2025-05-15', description: 'Grocery', type: 'Debit', category: 'Food', amount: 150 },
  { id: 3, date: '2025-05-14', description: 'Electricity Bill', type: 'Debit', category: 'Utilities', amount: 100 },
  { id: 4, date: '2025-05-13', description: 'Internet', type: 'Debit', category: 'Utilities', amount: 50 },
  { id: 5, date: '2025-05-12', description: 'Dining Out', type: 'Debit', category: 'Food', amount: 75 },
  { id: 6, date: '2025-05-10', description: 'Freelance', type: 'Credit', category: 'Income', amount: 600 },
  { id: 7, date: '2025-05-08', description: 'Movie', type: 'Debit', category: 'Entertainment', amount: 30 },
  { id: 8, date: '2025-05-06', description: 'Gym', type: 'Debit', category: 'Health', amount: 40 },
  { id: 9, date: '2025-05-05', description: 'Coffee', type: 'Debit', category: 'Food', amount: 15 },
  { id: 10, date: '2025-05-04', description: 'Book Sale', type: 'Credit', category: 'Income', amount: 20 },
]

export const categorySpending = [
  { category: 'Food', amount: 240, color: '#FF6384', subcategories: [{ name: 'Groceries', amount: 150 }, { name: 'Dining Out', amount: 90 }] },
  { category: 'Utilities', amount: 150, color: '#36A2EB', subcategories: [{ name: 'Electricity', amount: 100 }, { name: 'Internet', amount: 50 }] },
  { category: 'Entertainment', amount: 30, color: '#FFCE56', subcategories: [] },
  { category: 'Health', amount: 40, color: '#4BC0C0', subcategories: [] },
]
export const users = [
  { id: 1, name: 'Sudhakar Sharma', email: 'sudhakar@example.com', password: 'secure123', balance: 15000 },
  { id: 2, name: 'Rohit Verma', email: 'rohit@example.com', password: 'pass456', balance: 8000 },
];