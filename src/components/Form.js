import React, { useState } from 'react';
import Error from './Error';

const Form = () => {

  const [ expenseName, setExpenseName ] = useState("");
  const [ expenseAmount, setExpenseAmount ] = useState("");
  const [ error, setError ] = useState(false);

  // User add an expense
  const setExpense = (event) => {
    event.preventDefault();

    // Validate
    if(expenseAmount <= 0 || isNaN(expenseAmount) || expenseName.trim() === "" ) {
      setError(true);
      return;
    }

    setError(false);

    // Made the expense
    

    // send expense to App component


    // Reset form component 

  }

  return(
    <form action=""
      onSubmit={setExpense}
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