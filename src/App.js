// import logo from './logo.svg';
import React, { useState } from 'react';
import Amount from './components/Amount';
import Form from './components/Form';

function App() {

  //Defining the state
  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showAmount, setShowAmount ] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Budget Tracker</h1>
        <div className="principal-content content">
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
                <Form />
              </div>
              <div className="one-half column">
                2
              </div>
            </div>
          }
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
