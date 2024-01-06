import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerList.css';

import AppHeader from './Components/header';
import AppCustomers from './Components/customers';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppCustomers />
      </main>
    </div>
  );
}

export default App;
