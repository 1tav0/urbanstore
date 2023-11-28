import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Orders from './components/Orders';
import Basket from './components/Basket';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
