import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.scss"
import { SERACH_URL, MOVIE_URL, API_KEY } from "../../config/Urls";
import SearchBar from '../../Components/SearchBar/SearchBar';
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import { MoviesOutput } from "../../Models";


const MainPage = () => {
    const [searchItem, setSearchItem] = useState<string>("");
    const [searchItemsData, setSearchItemsData] = useState<MoviesOutput[]>([]);
    const [moviesData, setMoviesData] = useState<MoviesOutput[]>([]);
    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            if (searchItem === "")
                setSearchItemsData([])
            else {
                axios.get(SERACH_URL + "&query=" + searchItem)
                    .then((res) => {
                        setSearchItemsData(res.data.results)
                        console.log(res.data.results)
                    })
            }
        }, 500);
        return () => {
            clearTimeout(timeoutId);
        };


    }, [searchItem])

    
    const confirmHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setPageCount((prevState) => prevState + 1)
    }
    
    useEffect(() => {
        axios.get( MOVIE_URL + "popular?" + API_KEY,{
            params: {page: pageCount}
        }).then((res) => {
            setMoviesData((prevState) =>  [...prevState, ...res.data.results]);
        });
    }, [pageCount]);

    return (
        <div className="main-page">

            <SearchBar searchItemsData={searchItemsData} setSearchItem={setSearchItem} searchItem={searchItem} />
            <PopularMovies moviesData={moviesData} dataType={"Popular"} confirmHandler={confirmHandler} />
        </div>
    )
}

export default MainPage