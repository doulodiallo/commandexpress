import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';





 ReactDOM.render(
  <React.StrictMode>
  <Header/>
 
  <Router>
  <Routes>
  <Route path='/' element={<Home/>}/>
  
  </Routes>

 
  </Router>
  <Footer/>
  </React.StrictMode>,document.getElementById('root')
);


