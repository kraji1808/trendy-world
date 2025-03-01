
import React from"react";
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Login from"./Login";
import Home from"./Home";

const pages = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/home"element={<Home/>}/>
        </Routes>
        </BrowserRouter>

  );
};

export default pages
