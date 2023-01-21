import React, { useState, useMemo, useEffect } from 'react'
import axios from "axios";
import "./MovieFilter.scss";
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import { API_KEY, GENRES_URL, MOVIE_URL, DISCOVER_URL } from '../../config/Urls';
import Filter from '../../Components/Filters/Filters';
import Sort from '../../Components/Sort/Sort';
import { Button } from 'antd';

const MovieFilter = () => {
    const [moviesData, setMoviesData] = useState<any[]>([]);
    const [sortData, setSortData] = useState("")
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [loadMoreNumber, setLoadMoreNumber] = useState<number>(1)
    const [voteCountValue, setVoteCountValue] = useState("");
    const [runtimeValue, setRuntimeValue] = useState([])
    const [includeAdult, setIncludeAdult] = useState(true)

    useMemo(() => {
        axios.get(MOVIE_URL + "top_rated?" + API_KEY).then((res) => {
            setMoviesData(res.data.results);
        });
        axios.get(GENRES_URL).then((res) => {
            setGenres(res.data.genres);

        });

    }, []);



    
    const confirmHandler = () => {
        let path = (DISCOVER_URL + "?" + API_KEY + "&with_genres=" + selectedGenres.join(",").trim() + "&sort_by=" + sortData
        + "&page=" + loadMoreNumber + "&vote_count.gte=" + voteCountValue 
        + "&include_adult=" + includeAdult)
        
        if (runtimeValue[0]) {
            path += `&with_runtime.gte=${runtimeValue[0]}`
        }
        
        if (runtimeValue[1]) {
            path += `&with_runtime.lte=${runtimeValue[1]}`
        }
        
        axios.get
            (path)
            .then(res => {
                // let updatedArray:any = []
                // res.data.results.forEach((el:any) => {
                //     updatedArray.push(...updatedArray,{ ...el, key: el.id });
                // })
                // console.log(updatedArray);

                // setMoviesData(updatedArray);
                setMoviesData(res.data.results);
            })

            // axios.get
            // (DISCOVER_URL + "?" + API_KEY + "&vote_count.gte=" + voteCountValue)
            // .then(res => {
            //     console.log(res);
                
            // })
    }
    


    return (
        <div className='movie-filter'>
            <div className="filter-section">
                <Sort setSortData={setSortData} />

                <Filter
                    genres={genres}
                    setSelectedGenres={setSelectedGenres}
                    selectedGenres={selectedGenres}
                    setVoteCountValue={setVoteCountValue}
                    setRuntimeValue={setRuntimeValue}
                    setIncludeAdult={setIncludeAdult}
                />
                <Button onClick={confirmHandler}> Confirm </Button>
            </div>

            {
                Object.keys(moviesData).length > 0 &&
                <PopularMovies
                    moviesData={moviesData}
                    dataType={"Top Rated"}
                    setLoadMoreNumber={setLoadMoreNumber}
                    loadMoreNumber={loadMoreNumber}
                />
            }

        </div>
    )
}

export default MovieFilter