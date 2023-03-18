import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./components/About";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CreateProduct from "./components/CreateProduct";
import ShowProduct from "./components/ShowProduct";

export default function App (){
    return(
        <React.Fragment>
            
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<><Home/></>}/>
                <Route path="/about" element={<><About/></>}/>
                <Route path="/login" element={<><Login/></>}/>
              
                <Route path="/createproduct" element={<><CreateProduct/></>} />
                <Route path="/showproduct" element={<><ShowProduct/></>} />
            </Routes>
            </BrowserRouter>
            <Footer/>
        </React.Fragment>
    );
}