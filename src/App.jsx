import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Charts from './components/charts'; 
import NotificationsTips from './components/NotificationsTips';
import CalendarPage from './components/CalendarPage';
import Accounts from './pages/Accounts';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <Router>
      <div className={`app-container d-flex ${darkMode ? 'dark-mode' : ''}`}>
        <Sidebar />
        <main className="main-content flex-grow-1 p-3">
          <Routes>
            <Route
              path="/"
              element={<Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
            />
            <Route path="/charts" element={<Charts />} /> 
            <Route path="/notifications" element={<NotificationsTips />} />
            <Route path="/calendar" element={<CalendarPage />} /> 
            <Route path='/accounts' element={<Accounts />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}
