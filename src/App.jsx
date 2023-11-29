import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import SpeiseKarte from "./pages/SpeiseKarte";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Galerie from "./pages/Galerie";
import Nav from "./components/Nav";

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/speisen" element = {<SpeiseKarte />}/>
          <Route path="/kontakt" element = {<Kontakt />}/>
          <Route path="/öffnungszeiten" element = {<Oeffnungszeiten />}/>
          <Route path="/galerie" element = {<Galerie />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
