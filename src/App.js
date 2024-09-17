import './App.css';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import MenuPage from './pages/MenuPage';
import CariTanitim from './layouts/CariTanitim';


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"/>
      <MenuPage/>
    </div>
  );
}
export default App;

//<LoginPage/>