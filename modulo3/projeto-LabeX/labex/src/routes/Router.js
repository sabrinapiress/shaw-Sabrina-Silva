import AdiminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";


export const Router = ()=> {
    
    return(
        <BrowserRouter>
        <Routes>
          <Route index element= {<HomePage/>}/>
          <Route path="listTrips" element={<ListTripsPage/>}/>
          <Route path="applicationFormPage" element={<ApplicationFormPage/>}/>
          <Route path="loginPage" element={<LoginPage/>}/>
          <Route path="adiminHomePage" element={<AdiminHomePage/>}/>
          <Route path="tripDetailsPage" element={<TripDetailsPage/>}/>
          <Route path="createTripPage" element={<CreateTripPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}