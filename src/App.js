import './App.css';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MenuPage from './pages/MenuPage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';        

function App() {
  const { user } = useSelector(state => state.user) || { user: {} }; // user'ı boş obje olarak default yapıyoruz
  console.log(user)
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      {
        user && user.token ? ( // user ve token var mı kontrol ediyoruz
          <MenuPage />
        ) : (
          <div>
      <LoginPage />

            </div>
        )
      }
    </div>
  );
}

export default App;
