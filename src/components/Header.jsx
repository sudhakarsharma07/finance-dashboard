import React from 'react'
import { ProgressBar, Button } from 'react-bootstrap'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Header({ user, savingsPercent, darkMode, toggleDarkMode }) {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center">
        <div>
          <h2>Good evening, {user.name.split(' ')[0]}</h2>
          {/* <p>Your monthly savings goal progress:</p>
          <ProgressBar now={savingsPercent} label={`${savingsPercent}%`} /> */}
        </div>
      </div>
      <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </Button>
    </header>
  )
}
