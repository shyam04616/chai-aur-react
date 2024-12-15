import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Layout