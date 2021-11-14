import logo from './logo.svg';
import Budget from './components/Budget';


function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget Tracker</h1>
        <div className="principal-content content">
          <Budget/> 
        </div>
        
      </header>
    </div>
  );
}

export default App;
