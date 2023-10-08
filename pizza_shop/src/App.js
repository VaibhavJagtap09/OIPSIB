import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import CustomPizza from './components/CustomPizza'

function App() {
  return (
    <BrowserRouter>
        <TopBar />
        <NavBar/>
        <Routes>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
          <Route path='/policy' element={<Policy/>} exact/>
          <Route path='/' element={<HomeScreen/>} exact/>
          <Route path='/CustomPizza' element={<CustomPizza/>} exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
