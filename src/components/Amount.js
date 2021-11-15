import React, { Fragment, useState } from 'react';
import Error from './Error';

const Amount = ({ setBudget, setRemaining, setShowAmount }) => {

  // Define state
  const [ amount, saveAmount ] = useState(0);
  const [ error, setError ] = useState(false);

  // function that reads budget
  const defineAmount = event => {
    saveAmount(parseInt(event.target.value,10));
  }

  // Submit to set the budget
  const setAmount = event => {
    event.preventDefault();

    // Budget input validation (positive number)
    if(amount <= 0 || isNaN(amount)) {
      setError(true);
      return;
    }

    // In case validation is true
    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setShowAmount(false)
  }

  return(
    <Fragment>
      <h2>Enter your budget amount</h2>
      { error && <Error message="Invalid Budget" /> }
      <form action=""
        onSubmit={setAmount}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Enter your budget: 500"
          onChange={defineAmount}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set Budget"  
        />
      </form>
    </Fragment>
  );
}

export default Amount;