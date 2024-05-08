import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState("");

  useEffect(() => {
    const query = categoryQuery ? `?category=${categoryQuery}` : "";

    fetch(`http://localhost:3000/transactions${query}`)
      .then((resp) => resp.json())
      .then((data) => setTransactions(data));
  }, [categoryQuery]);

  function handleSearch(category) {
    setCategoryQuery(category);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
