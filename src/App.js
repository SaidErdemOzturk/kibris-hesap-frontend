import './App.css';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MenuPage from './pages/MenuPage';
import { useSelector } from 'react-redux';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';

function App() {
  //const { user } = useSelector(state => state.user) || { user: {} }; // user'ı boş obje olarak default yapıyoruz
  const user =useSelector((state)=> state.user.user)
  useEffect(() => {

  }, [user])
  

  return (

<PrimeReactProvider>
    <div className="App">
      <ToastContainer position="bottom-right" />
      {
        user && user.token ? ( // user ve token var mı kontrol ediyoruz
          <MenuPage />
        ) : (
          <div>
            <Dashboard/>
            </div>
        )
      }
    </div>
        </PrimeReactProvider>
  );
}

export default App;
