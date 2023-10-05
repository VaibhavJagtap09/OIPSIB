import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';

function App() {
  return (
    <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
          <Route path='/policy' element={<Policy/>} exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
