# Finance Dashboard

A responsive and interactive personal finance dashboard to visualize user financial data using charts, reusable components, and state management.

## 🚀 Features
- **Header & Profile Section**
  - Personalized greeting with user name and avatar.
  - Monthly savings goal status bar.

- **Financial Overview Cards**
  - Total Account Balance
  - Monthly Income
  - Monthly Expenses
  - Savings Ratio
  - Toggle view for Monthly, Quarterly, Yearly.

- **Charts**
  - Expense vs Income Chart (Line/Area chart)
  - Category-Wise Spending Pie Chart
  - Clickable segments to drill down into subcategories

- **Recent Transactions Table**
  - Show latest transactions with filter and search options.
  - Color-coded for easy distinction.

- **Calendar-based Tracker** *(Optional Bonus)*
  - Monthly calendar showing daily spending.
  - Clickable day to view transactions.

- **Notifications & Tips**
  - Smart alerts (e.g., "Overspending on food").
  - Budget tips & insights.

- **Budgeting Assistant** *(Optional Bonus)*
  - Monthly budget by category.
  - Visual indicator of budget usage.

- **Other Features**
  - Responsive mobile-first layout.
  - Light/Dark mode toggle.
  - Sidebar navigation with routing.
  - Clean, minimal, and professional design.

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite
- **Styling:** Bootstrap
- **Routing:** React Router
- **Data Handling:** Mock data (JSON / Axios)
- **Animations:** Framer Motion (optional)

---

## 📦 Installation
Clone the repository:
```bash
git clone https://github.com/sudhakarsharma07/finance-dashboard.git
cd finance-dashboard


## 📂Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── FinancialCards.jsx
│   ├── Charts.jsx
│   ├── TransactionsTable.jsx
│   ├── CalendarTracker.jsx
│   └── Notifications.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Accounts.jsx
│   ├── ChartsPage.jsx
│   ├── CalendarPage.jsx
│   └── Settings.jsx
│
├── App.jsx
├── index.css
└── main.jsx


##  Install the dependencies:
npm install

## Run the development server:
npm run dev





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
