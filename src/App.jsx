import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./components/About";
import CreateUser from "./components/CreateUser";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import ShowUser from "./components/ShowUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default function App (){
    return(
        <React.Fragment>
            
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<><Home/></>}/>
                <Route path="/about" element={<><About/></>}/>
                <Route path="/login" element={<><Login/></>}/>
                <Route path="/createuser" element={<><CreateUser/></>}/>
                <Route path="/showuser" element={<><ShowUser/></>}/>
            </Routes>
            </BrowserRouter>
            <Footer/>
        </React.Fragment>
    );
}