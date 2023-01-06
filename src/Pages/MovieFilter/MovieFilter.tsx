import React,{useState, useMemo} from 'react'
import axios from "axios";
import "./MovieFilter.scss";
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import { API_KEY, MOVIE_URL } from '../../config/Urls';

const MovieFilter = () => {
    const [moviesData, setMoviesData] = useState<any[]>([]);

    useMemo(() => {
        axios.get(MOVIE_URL + "popular?" + API_KEY).then((res) => {
            setMoviesData(res.data.results);
            console.log(res.data.results);
            
        });
    }, []);
    return (
        <div className='movie-filter'>
            {/* <PopularMovies/> */}
        </div>
    )
}

export default MovieFilter