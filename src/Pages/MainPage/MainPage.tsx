import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./MainPage.scss"
import { SERACH_URL, /*POPULAR_URL,*/ MOVIE_URL, API_KEY } from "../../config/Urls";
import SearchBar from '../../Components/SearchBar/SearchBar';
import PopularMovies from "../../Components/PopularMovies/PopularMovies";


const MainPage = () => {
    const [searchItem, setSearchItem] = useState<any>("");
    const [searchItemsData, setSearchItemsData] = useState<any[]>([]);
    const [moviesData, setMoviesData] = useState<any[]>([]);
    // const [selectedMovieProperties, setSelectedMovieProperties] = useState<any[]>([])

    useEffect(() => {
        
        if (searchItem === "")
            setSearchItemsData([])
        else {
            axios.get(SERACH_URL + "&query=" + searchItem)
                .then((res) => setSearchItemsData(res.data.results))
        }

    }, [searchItem])

    useMemo(() => {
        axios.get(MOVIE_URL + "popular?" + API_KEY).then((res) => {
            setMoviesData(res.data.results);
            
        });
    }, []);

    return (
        <div className="main-page">

            <SearchBar searchItemsData={searchItemsData} setSearchItem={setSearchItem}  />
            <PopularMovies moviesData={moviesData} />
        </div>
    )
}

export default MainPage