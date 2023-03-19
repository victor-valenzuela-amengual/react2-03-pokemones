import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokes from "./views/Pokes";
import Superheroes from "./views/Superheroes";
import { useState, useEffect } from "react";

function App() {    
  return (
    <div className="container">       
        <BrowserRouter>
          <header><NavBar /></header>
          
          <Routes>
            <Route path="/react2-03-pokemones" element={<Home />} />
            <Route path="/pokes/:name" element={<Pokes />} />            
            <Route path="/superheroes" element={<Superheroes />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
