import React, { Fragment, useState } from 'react';
import Error from './Error';

const Budget = () => {

  // Define state
  const [ budget, saveBudget ] = useState(0);
  const [ error, setError ] = useState(false);

  // function that reads budget
  const defineBudget = event => {
    saveBudget(parseInt(event.target.value,10));
  }

  // Submit to set the budget
  const setBudget = event => {
    event.preventDefault();

    // Budget input validation (positive number)
    if(budget <= 0 || isNaN(budget)) {
      setError(true);
      return;
    }

    // In case validation is true
    setError(false);
  }

  return(
    <Fragment>
      <h2>Enter your budget</h2>
      { error && <Error message="Invalid Budget" /> }
      <form action=""
        onSubmit={setBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Enter your budget: 500"
          onChange={defineBudget}
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

export default Budget;