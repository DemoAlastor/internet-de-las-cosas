import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./Components/Navbar"
import Login from "./Pages/Login";
import Inicio from './Pages/Inicio'
import Registro from './Pages/Registro'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
