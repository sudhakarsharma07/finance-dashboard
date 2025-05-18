import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BudgetAssistant = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [budget, setBudget] = useState(null);

  const calculateBudget = () => {
    const net = income - expenses;
    setBudget(net);
  };

  return (
    <div className="mt-4">
      <h4>Budget Assistant</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Monthly Income</Form.Label>
          <Form.Control
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter your income"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Monthly Expenses</Form.Label>
          <Form.Control
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            placeholder="Enter your expenses"
          />
        </Form.Group>
        <Button variant="primary" onClick={calculateBudget}>
          Calculate Budget
        </Button>
        {budget !== null && (
          <p className="mt-3">
            Your remaining budget is:
            <span className={budget >= 0 ? 'text-success' : 'text-danger'}>
              ${budget}
            </span>
          </p>
        )}
      </Form>
    </div>
  );
};

export default BudgetAssistant; 
