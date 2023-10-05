import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
