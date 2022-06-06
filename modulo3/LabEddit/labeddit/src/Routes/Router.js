import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import {FeedPage} from "../Pages/FeedPage/FeedPage"
import {RegistrationPage} from "../Pages/RegistrationPage/RegistrationPage"
import {PostsPage} from "../Pages/PostsPage/PostsPage"
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element= {<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/login/cadastro" element={<RegistrationPage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/feed/posts/:id" element={<PostsPage/>}/>
            <Route path="/*" element={<ErrorPage/>}/> 
        </Routes>
        </BrowserRouter>
    )
}