import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import { API_URL, IMG_URL, SERACH_URL } from "./config/Urls";
import { Input, Button } from "antd";
import MainPage from "./Pages/MainPage";



const App = () => {

  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}

export default App;
