import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AddCustomer } from "./components/AddCustomer/AddCustomer";
import { CustomerDetails } from './components/CustomerDetails/CustomerDetails';
import { CustomersList } from './components/CustomersList/CustomersList';
import { ReportsInsights } from './components/ReportsInsights/ReportsInsights';
import { Settings } from './components/Settings/Settings';
import { Chatbox } from './components/Chatbox/Chatbox';


function App() {
  return (
    <div>
      <Routes>
       
        <Route path="/AddCustomer" element={<AddCustomer />} />
        <Route path="/CustomerDetails" element={<CustomerDetails />} />
        <Route path="/CustomersList" element={<CustomersList />} />
        <Route path="/ReportsInsights" element={<ReportsInsights />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Chatbox" element={<Chatbox />} />
      </Routes>
    </div>
  );
}

export default App;

