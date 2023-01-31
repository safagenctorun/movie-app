import React from 'react'
import "./AccountRatedMovies.scss"
import { MoviesOutput } from '../../Models';
import { IMG_SIZE_500, IMG_URL } from '../../config/Urls';

interface Props {
    ratedMovies: MoviesOutput[];
}


const AccountRatedMovies = ({ ratedMovies }: Props) => {
    return (
        <div className='rated-movies'>
            <h1>Your Rated Movies</h1>
            <div className="movies">
                {ratedMovies.map((movie: any) => (
                    <div key={movie.id} className="movie">
                        <a href={`/moviedetail/${movie.id}`}><img src={IMG_URL + IMG_SIZE_500 + movie.poster_path} alt={movie.title} /></a>
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <span style={{ color: movie.rating > 8 ? "lightgreen" : movie.rating > 5 ? "orange" : "red" }}>{movie.rating}/10</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AccountRatedMovies