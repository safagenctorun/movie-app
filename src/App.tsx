import React, { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import Navbar from "./Pages/Navbar";
import LoginPage from "./Pages/LoginPage";
import Approved from "./Pages/Approved";
import AllReviewsOfTheMovie from "./Pages/AllReviewsOfTheMovie/AllReviewsOfTheMovie";
import AllVideosOfTheMovie from "./Pages/AllVideosOfTheMovie/AllVideosOfTheMovie";




const App = () => {

    return (
        <div className="App">
            {
                !window.location.pathname.includes("login") &&
                <Navbar />
            }
            <Routes>
                <Route path={`/login/*`} element={<LoginPage />} />
                <Route path={``} element={<MainPage />} />
                <Route path={'/moviedetail/:id'} element={<MovieDetail />} />
                <Route path={'/moviedetail/:id/reviews'} element={<AllReviewsOfTheMovie />} />
                <Route path={'/moviedetail/:id/videos'} element={<AllVideosOfTheMovie />} />

                <Route path={'/approved'} element={<Approved />} />

            </Routes>

        </div>
    );
}

export default App;
