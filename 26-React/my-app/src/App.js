import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Products, Contact , Error404} from "./pages";
import React from "react";


function App() {   
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </div>
    );
}


export default App;
