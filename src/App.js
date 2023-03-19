import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokes from "./views/Pokes";

function Main() {    
  
  //border border-3 border-primar
  return (
    <div className="containery">       
        <BrowserRouter>
          <header><NavBar /></header>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokes/:name" element={<Pokes />} />            
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default Main;
