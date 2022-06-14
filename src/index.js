import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './components/Cadastro';
import Contador from './components/Contador';
import Estado from './components/Estado';
import Listas from './components/Listas';
import PrimeiroComponente from './components/PrimeiroComponente';
import Propriedades from './components/Propriedades';
import SegundoComponente from './components/SegundoComponente';
import TerceiroComponente from './components/TerceiroComponente';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>    
        <Route path='/login' element={<Login />}/>   
        <Route path='*' element={<Navigate to='/' />} /> 
        <Route path='/Cadastro' element={<Cadastro />}/> 
        <Route path='/Contador' element={<Contador />}/>
        <Route path='/Estado' element={<Estado/>}/>
        <Route path='/Listas' element={<Listas />}/>
        <Route path='/PrimeiroComponente' element={<PrimeiroComponente />}/>
        <Route path='/Propriedades' element={<Propriedades />}/>
        <Route path='/SegundoCOmponente' element={<SegundoComponente />}/>
        <Route path='/TerceiroComponente' element={<TerceiroComponente />}/>
        

                    
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


