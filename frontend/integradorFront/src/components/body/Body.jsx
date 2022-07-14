// eslint-disable-next-line
import React,{ useState } from "react";
import Login from "./Login";
import Register from './Register';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Reserve from "./Reserve";
import Success from "components/reserve/Success";
import CreateProduct from "./CreateProduct";
import SuccessAdmin from "./SuccessAdmin";

const Body = () => {

    return (
        <div className='main_container'>
            <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/register' element={<Register/>}/> 
            <Route path={"/products/id/:id"} element={<Product/>}/>
            <Route path={"/products/id/:id/reserve"} element={<Reserve/>}/>
            <Route path={"/products/id/:id/reserve/success"} element={<Success/>}/>
            <Route path={"/admin"} element={<CreateProduct/>}/>
            <Route path={"/admin/success"} element={<SuccessAdmin/>}/>
            </Routes>
        </div>
    )
}

export default Body;
