import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { SERACH_URL, POPULAR_URL } from "../config/Urls";
import SearchBar from '../Components/SearchBar/SearchBar';
import PopularMovies from "../Components/PopularMovies/PopularMovies";


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
        axios.get(POPULAR_URL).then((res) => {
            console.log(res.data.results);
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