// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Amount from './components/Amount';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';
import Error from './components/Error';

function App() {

  //Defining state
  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showAmount, setShowAmount ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false);
  const [ errorDiff, setErrorDiff ] = useState(false);

  useEffect(() => {
    if(createExpense) {
      if(expense.expenseAmount <= remaining ) {
      // Add new budget
      setExpenses([
        ...expenses,
        expense
      ]);
      // Substract from current budget
        const budgetRemaining = remaining - expense.expenseAmount;
        setRemaining(budgetRemaining); 
        // Reset to false
      setCreateExpense(false);
      } else {
        setErrorDiff(true);
        // setCreateExpense(true);
      }
    }
  }, [expense, createExpense, expenses, remaining])

  return (
    <div className="container">
      <header>
        <h1>Budget Tracker</h1>
        <div className="content-principal content">
          { showAmount 
            ?
            <Amount
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowAmount={setShowAmount}
            /> 
            :
            <div className="row">
              <div className="one-half column">
                <Form 
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                  setErrorDiff={setErrorDiff}
                />
              </div>
              <div className="one-half column">
                <List 
                  expenses={expenses}
                />
                <BudgetControl 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
              <div className="column error-diff">
              { errorDiff &&
                <Error
                  message="You can not spend more than you have left !!!"
                />
              }
              </div>
            </div>
          }
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
