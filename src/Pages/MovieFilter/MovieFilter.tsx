import React, { useState, useMemo,useEffect } from 'react'
import axios from "axios";
import "./MovieFilter.scss";
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import { API_KEY, MOVIE_URL, SORT_URL } from '../../config/Urls';
import Filter from '../../Components/Filters/Filters';
import Sort from '../../Components/Sort/Sort';

const MovieFilter = () => {
    const [moviesData, setMoviesData] = useState<any[]>([]);
    const [sortData, setSortData] = useState("")
    const [loadMoreNumber, setLoadMoreNumber] = useState<number>(1)

    useMemo(() => {
        axios.get(MOVIE_URL + "top_rated?" + API_KEY ).then((res) => {
            setMoviesData(res.data.results);
        });

    }, []);

    useEffect(() => {
        Object.keys(sortData).length > 0 &&
        axios.get(SORT_URL + sortData +"&" +API_KEY + "&page=" + loadMoreNumber ).then(res=>{
            setMoviesData(res.data.results);
        
        })
    }, [sortData, loadMoreNumber])
    
    return (
        <div className='movie-filter'>
            <div className="filter-section">
                <Sort setSortData ={setSortData} />
                <Filter />
            </div>

            {
                Object.keys(moviesData).length > 0 &&
                <PopularMovies moviesData={moviesData} dataType={"Top Rated"}  setLoadMoreNumber={setLoadMoreNumber} loadMoreNumber={loadMoreNumber}/>
            }
        </div>
    )
}

export default MovieFilter