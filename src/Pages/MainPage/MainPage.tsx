import React, { useState, useEffect, useRef } from "react";
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

    const timeoutId = useRef<NodeJS.Timeout | null>(null);
    
    

    useEffect(() => {
        
        clearTimeout(timeoutId.current!);
        timeoutId.current = setTimeout(()=>{
            console.log(timeoutId.current);
            
            if (searchItem === "")
                setSearchItemsData([])
            else {
                axios.get(SERACH_URL + "&query=" + searchItem)
                    .then((res) => {
                        setSearchItemsData(res.data.results)
                        
                    }) 
            }
        }, 500)

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

            <SearchBar searchItemsData={searchItemsData} setSearchItem={setSearchItem}  searchItem={searchItem} />
            <PopularMovies moviesData={moviesData} dataType={"Popular"} confirmHandler={confirmHandler} />
        </div>
    )
}

export default MainPage