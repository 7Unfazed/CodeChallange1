import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: 0,
    date: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({ description: '', amount: 0, date: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="date"
        placeholder="Date"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Amount"
        name="amount" cccbyh
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;