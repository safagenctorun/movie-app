import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MovieDetail from "./Pages/MovieDetail";



const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path={``} element={<MainPage/>}/>   
        <Route path={'/moviedetail/:id*'} element={<MovieDetail/>}/>   
      </Routes>

    </div>
  );
}

export default App;
