import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./MainPage.scss"
import { SERACH_URL, /*POPULAR_URL,*/ MOVIE_URL, API_KEY } from "../../config/Urls";
import SearchBar from '../../Components/SearchBar/SearchBar';
import PopularMovies from "../../Components/PopularMovies/PopularMovies";

// export  interface PopularMoviesOutput {
//     adult: boolean;
// }


const MainPage = () => {
    const [searchItem, setSearchItem] = useState<any>("");
    const [searchItemsData, setSearchItemsData] = useState<any[]>([]);
    const [moviesData, setMoviesData] = useState<any[]>([]);
    const [loadMoreNumber, setLoadMoreNumber] = useState<number>(1)
    // const [selectedMovieProperties, setSelectedMovieProperties] = useState<any[]>([])

    useEffect(() => {
        
        if (searchItem === "")
            setSearchItemsData([])
        else {
            axios.get(SERACH_URL + "&query=" + searchItem)
                .then((res) => setSearchItemsData(res.data.results))
                
                
        }

    }, [searchItem])

    useEffect(() => {
        axios.get(MOVIE_URL + "popular?" + API_KEY + "&page=" + loadMoreNumber).then((res) => { // page yazan yer bitmedi geri dönecem
            setMoviesData(res.data.results);
            console.log(res.data.results);
            
        
        });
    }, [loadMoreNumber]);

    return (
        <div className="main-page">

            <SearchBar searchItemsData={searchItemsData} setSearchItem={setSearchItem}  />
            <PopularMovies moviesData={moviesData} dataType={"Popular"} setLoadMoreNumber={setLoadMoreNumber} loadMoreNumber={loadMoreNumber} />
        </div>
    )
}

export default MainPage