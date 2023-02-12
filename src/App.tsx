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
import AccountDetail from "./Pages/AccountDetail/AccountDetail";


const App = () => {

    return (
        <div className="App">
            {
                !window.location.pathname.includes("login") &&
                <Navbar />
            }
            <Routes>
                <Route path={`/login`} element={<LoginPage />} />
                <Route path={`/`} element={<MainPage />} />
                <Route path={'/moviedetail/:movieid'} element={<MovieDetail />} />
                <Route path={'/moviedetail/:movieid/reviews'} element={<AllReviewsOfTheMovie />} />
                <Route path={'/moviedetail/:movieid/videos'} element={<AllVideosOfTheMovie />} />
                <Route path={'/moviedetail/:movieid/backdrops'} element={<AllBackdropsOfTheMovie />} />
                <Route path={'/moviedetail/:movieid/posters'} element={<AllPostersOfThePage />} />
{/* 
                <Route path={'/moviedetail/:movieid'} element={<MovieDetail />}> 
                    <Route index={true} element={<MovieDetail />} />
                    <Route path={'reviews'} element={<AllReviewsOfTheMovie />} />
                    <Route path={'videos'} element={<AllVideosOfTheMovie />} />
                    <Route path={'backdrops'} element={<AllBackdropsOfTheMovie />} />
                    <Route path={'posters'} element={<AllPostersOfThePage />} />
                
                </Route> */}

                <Route path={'/moviefilter'} element={<MovieFilter />}>
                    <Route path={':moviename'} /> 
                </Route>

                <Route path={'/accountdetail'} element={< AccountDetail/>} />  

                <Route path={'/approved'} element={<Approved />} />

                {/* <Route path={'*'} element={<div>Not Found</div>} /> */}

            </Routes>

        </div>
    );
}

export default App;
