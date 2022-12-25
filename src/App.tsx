import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MovieDetail from "./Pages/MovieDetail";
import Navbar from "./Pages/Navbar";
import LoginPage from "./Pages/LoginPage";
import AllReviewsOfTheMovie from "./Pages/AllReviewsOfTheMovie";
import Approved from "./Pages/Approved";



const App = () => {

    return (
        <div className="App">
            {
                !window.location.pathname.includes("login") && <Navbar /> 
            }
            <Routes>
                <Route path={`/login/*`} element={<LoginPage />} />
                <Route path={``} element={<MainPage />} />
                <Route path={'/moviedetail/:id'} element={<MovieDetail />} />
                <Route path={'/moviedetail/:id/reviews'} element={<AllReviewsOfTheMovie />} />
                
                <Route path={'/approved'} element={<Approved />} />
                
            </Routes>

        </div>
    );
}

export default App;
