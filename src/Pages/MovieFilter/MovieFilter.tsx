import React, { useState, useMemo } from 'react'
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
    const [startReleaseDate, setStartReleaseDate] = useState([])
    const [endReleaseDate, setEndReleaseDate] = useState([])
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [voteCountValue, setVoteCountValue] = useState("");
    const [runtimeValue, setRuntimeValue] = useState([])
    const [includeAdult, setIncludeAdult] = useState(false)
    const [pageCount, setPageCount] = useState(2) // aynı fonk içinde olduğu için tıkladığında alsında bir önceki değeri basıyor

    useMemo(() => {
        axios.get(MOVIE_URL + "top_rated?" + API_KEY).then((res) => {
            setMoviesData(res.data.results);
        });
        axios.get(GENRES_URL).then((res) => {
            setGenres(res.data.genres);

        });

    }, []);


    const confirmHandler = (e: any) => {

        let path = (DISCOVER_URL + "?" + API_KEY
            + "&include_adult=" + includeAdult
        )

        if (startReleaseDate)
            path += `&release_date.gte=${startReleaseDate}`

        if (endReleaseDate)
            path += `&release_date.lte=${endReleaseDate}`

        if (endReleaseDate)
            path += `&vote_count.gte=${voteCountValue}`

        if (runtimeValue[0])
            path += `&with_runtime.gte=${runtimeValue[0]}`

        if (runtimeValue[1])
            path += `&with_runtime.lte=${runtimeValue[1]}`

        if (e.target.name === "load-more") {
            setPageCount(pageCount + 1);
            path += `&page=${pageCount}`
        }

        let params = {}

        if (sortData || selectedGenres) {
            params = { ...params, sort_by: sortData, with_genres: selectedGenres.join(",").trim() }
        }

        axios.get
            (path, { params })
            .then(res => {
                e.target.name !== "load-more"
                    ?
                    setMoviesData(res.data.results)
                    :
                    setMoviesData([...moviesData, ...res.data.results]);
                // confirm tuşu ile load more tuşu ortak şeyleri yaptığı için aynı fonksiyonu çalıştırıyor araya birkaç if koyarak hangisine basıldığını anlıyoruz ve ona göre farklı işlemler yaptırıyor 
            })

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
                    setStartReleaseDate={setStartReleaseDate}
                    setEndReleaseDate={setEndReleaseDate}
                />
                <Button onClick={confirmHandler}> Confirm </Button>
            </div>

            {
                Object.keys(moviesData).length > 0 ?
                    <PopularMovies
                        moviesData={moviesData}
                        dataType={"Top Rated"}
                        confirmHandler={confirmHandler}
                    />
                    : 
                    <div className='not-respond'>Films that you filtered weren't found</div>
            }

        </div>
    )
}

export default MovieFilter