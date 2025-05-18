import React, { useState } from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'

export default function FinancialCards({ financialData }) {
  const [view, setView] = useState('monthly')

  const getValue = (key) => {
    if (view === 'monthly') return financialData[key].monthly
    if (view === 'quarterly') return financialData[key].quarterly
    if (view === 'yearly') return financialData[key].yearly
  }

  return (
    <div>
      <ButtonGroup aria-label="View Toggle" className="mb-3">
        <Button
          variant={view === 'monthly' ? 'primary' : 'outline-primary'}
          onClick={() => setView('monthly')}
        >
          Monthly
        </Button>
        <Button
          variant={view === 'quarterly' ? 'primary' : 'outline-primary'}
          onClick={() => setView('quarterly')}
        >
          Quarterly
        </Button>
        <Button
          variant={view === 'yearly' ? 'primary' : 'outline-primary'}
          onClick={() => setView('yearly')}
        >
          Year-to-date
        </Button>
      </ButtonGroup>

      <div className="d-flex flex-wrap gap-3">
        <Card style={{ minWidth: '12rem' }} className="flex-fill">
          <Card.Body>
            <Card.Title>Total Account Balance</Card.Title>
            <Card.Text className="fs-4">${financialData.balance.toLocaleString()}</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ minWidth: '12rem' }} className="flex-fill border-success border-2">
          <Card.Body>
            <Card.Title>Income</Card.Title>
            <Card.Text className="fs-4 text-success">${getValue('incomeHistory').toLocaleString()}</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ minWidth: '12rem' }} className="flex-fill border-danger border-2">
          <Card.Body>
            <Card.Title>Expenses</Card.Title>
            <Card.Text className="fs-4 text-danger">${getValue('expenseHistory').toLocaleString()}</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ minWidth: '12rem' }} className="flex-fill border-info border-2">
          <Card.Body>
            <Card.Title>Savings Ratio</Card.Title>
            <Card.Text className="fs-4">{(getValue('incomeHistory') !== 0 ? ((getValue('incomeHistory') - getValue('expenseHistory')) / getValue('incomeHistory')) * 100 : 0).toFixed(1)}%</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
