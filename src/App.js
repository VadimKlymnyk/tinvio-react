import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import './styles.scss'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <MainSection/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
