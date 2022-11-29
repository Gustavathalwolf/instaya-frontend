import './App.css';
import Login from './components/auth/login';
import OrdersHome from './components/orders/orders-home';
import Register from './components/register/register';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/navbar';
import OrdersRegister from './components/orders/orders-register';
import OrdersUpdate from './components/orders/orders-update';
import Index from './components/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/orders-home" element={<OrdersHome></OrdersHome>}></Route>
          <Route path="/orders-register" element={<OrdersRegister></OrdersRegister>}></Route>
          <Route path="/orders-update" element={<OrdersUpdate></OrdersUpdate>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
