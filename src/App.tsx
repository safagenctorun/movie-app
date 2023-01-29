import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import Navbar from "./Pages/Navbar";
import LoginPage from "./Pages/LoginPage";
import Approved from "./Pages/Approved";
import AllReviewsOfTheMovie from "./Pages/AllReviewsOfTheMovie/AllReviewsOfTheMovie";
import AllVideosOfTheMovie from "./Pages/AllVideosOfTheMovie/AllVideosOfTheMovie";
import AllBackdropsOfTheMovie from "./Pages/AllBackdropsOfTheMovie/AllBackdropsOfTheMovie";
import AllPostersOfThePage from "./Pages/AllPostersOfThePage/AllPostersOfThePage";
import MovieFilter from "./Pages/MovieFilter/MovieFilter";




const App = () => {

    return (
        <div className="App">
            {
                !window.location.pathname.includes("login") &&
                <Navbar />
            }
            <Routes>
                <Route path={`/login`} element={<LoginPage />} />
                <Route path={``} element={<MainPage />} />
                <Route path={'/moviedetail/:id'} element={<MovieDetail />} />
                <Route path={'/moviedetail/:id/reviews'} element={<AllReviewsOfTheMovie />} />
                <Route path={'/moviedetail/:id/videos'} element={<AllVideosOfTheMovie />} />
                <Route path={'/moviedetail/:id/backdrops'} element={<AllBackdropsOfTheMovie />} />
                <Route path={'/moviedetail/:id/posters'} element={<AllPostersOfThePage />} />
                <Route path={'/moviefilter'} element={<MovieFilter />} />

                <Route path={'/approved'} element={<Approved />} />

                {/* <Route path={'*'} element={<div>Not Found</div>} /> */}

            </Routes>

        </div>
    );
}

export default App;
