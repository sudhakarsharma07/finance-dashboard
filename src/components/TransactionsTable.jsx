import React from 'react';
import { Table } from 'react-bootstrap';
import { transactions } from '../data/mockData';

export default function TransactionsTable() {
  return (
    <div className="mt-4">
      <h4>Recent Transactions</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td className={transaction.type === 'Credit' ? 'text-success' : 'text-danger'}>
                {transaction.type === 'Credit' ? '+' : '-'}${transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
