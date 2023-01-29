import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.scss"
import { SERACH_URL, /*POPULAR_URL,*/ MOVIE_URL, API_KEY } from "../../config/Urls";
import SearchBar from '../../Components/SearchBar/SearchBar';
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import { MoviesOutput } from "../../Models";


const MainPage = () => {
    const [searchItem, setSearchItem] = useState<string>("");
    const [searchItemsData, setSearchItemsData] = useState<any[]>([]);
    const [moviesData, setMoviesData] = useState<MoviesOutput[]>([]);
    const [pageCount, setPageCount] = useState(1) // aynı fonk içinde olduğu için tıkladığında alsında bir önceki değeri basıyor
    // const [selectedMovieProperties, setSelectedMovieProperties] = useState<any[]>([])

    useEffect(() => {
        
        if (searchItem === "")
            setSearchItemsData([])
        else {
            axios.get(SERACH_URL + "&query=" + searchItem)
                .then((res) => {
                    setSearchItemsData(res.data.results)
                }) 
        }

    }, [searchItem])

    useEffect(() => {
        axios.get(MOVIE_URL + "popular?" + API_KEY +"&page=1").then((res) => { 
            setMoviesData(res.data.results); 
        });
    }, []);

    const confirmHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {

        let path = MOVIE_URL + "popular?" + API_KEY

        if((e.target as any).name === "load-more" ){
            setPageCount(pageCount + 1);
            path += `&page=${pageCount + 1}`
        }
        axios.get(path).then((res) => { 
            setMoviesData([...moviesData, ...res.data.results ]); 
        });
    }


    return (
        <div className="main-page">

            <SearchBar searchItemsData={searchItemsData} setSearchItem={setSearchItem}  />
            <PopularMovies moviesData={moviesData} dataType={"Popular"} confirmHandler={confirmHandler} />
        </div>
    )
}

export default MainPage