import React, { useState } from 'react';
import Error from './Error';
import { nanoid } from 'nanoid';

const Form = ({ setExpense, setCreateExpense }) => {

  const [ expenseName, setExpenseName ] = useState("");
  const [ expenseAmount, setExpenseAmount ] = useState("");
  const [ error, setError ] = useState(false);

  // User add an expense
  const addExpense = (event) => {
    event.preventDefault();

    // Validate
    if(expenseAmount <= 0 || isNaN(expenseAmount) || expenseName.trim() === "" ) {
      setError(true);
      return;
    }

    setError(false);

    // Made the expense
    const expense = {
      id: nanoid(),
      expenseName,
      expenseAmount
    }

    // send expense to App component
    setExpense(expense);
    setCreateExpense(true);

    // Reset form component 
    setExpenseName("");
    setExpenseAmount("");
  }

  return(
    <form action=""
      onSubmit={addExpense}
    >
      <h2>Insert your expenses here</h2>
      { error && 
        <Error 
          message="Both input fields are required or invalid Budget"
        />
      }
      
      <div className="field">
        <label htmlFor="">Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Groceries"
          value={expenseName}
          onChange={event => setExpenseName(event.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="">Expense amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="E.g. 300"
          value={expenseAmount}
          onChange={event => setExpenseAmount(parseInt(event.target.value,10))}
        />
      </div>
      <input 
        type="submit"
        className="button-primary full-width"
        value="Add expense"
      />
    </form>
  );
}

export default Form;