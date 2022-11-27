import './App.css';
import Header from './pages/Header';
import { Route, Routes } from 'react-router';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {


  return (
    
    <>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Portfolio" element={<Portfolio/>} /> 
          <Route path="/Contact" element={<Contact/>} />  
        </Routes>
    </>
  );
}

export default App;
