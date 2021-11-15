// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Amount from './components/Amount';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  //Defining state
  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showAmount, setShowAmount ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false)

  useEffect(() => {
    if(createExpense) {
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
            </div>
          }
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
