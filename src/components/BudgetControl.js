import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
import { titleRemaining } from '../helpers';

const BudgetControl = ({ budget, remaining}) => {
  return(
    <Fragment>
      <div className="alert alert-primary">
        Budget: $ {budget}
      </div>
      <div className={`alert ${checkBudget(budget,remaining)}`} title={titleRemaining(budget, remaining)}>
        Remaining: $ {remaining}
      </div>
    </Fragment>
  );
}

export default BudgetControl;