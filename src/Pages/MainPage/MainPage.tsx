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
    const [pageCount, setPageCount] = useState(2) // aynı fonk içinde olduğu için tıkladığında alsında bir önceki değeri basıyor
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
        axios.get(MOVIE_URL + "popular?" + API_KEY).then((res) => { 
            setMoviesData(res.data.results); 
        });
    }, []);

    const confirmHandler = (e:any) => {

        let path = MOVIE_URL + "popular?" + API_KEY

        if(e.target.name === "load-more" ){
            setPageCount(pageCount + 1);
            path += `&page=${pageCount}`
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