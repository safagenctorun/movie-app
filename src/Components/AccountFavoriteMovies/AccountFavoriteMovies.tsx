import React from 'react'
import "./AccountFavoriteMovies.scss"
import { MoviesOutput } from '../../Models'
import { IMG_SIZE_500, IMG_URL } from '../../config/Urls';

interface Props {
    favoriteMovies: MoviesOutput[];
}

const AccountFavoriteMovies = ({ favoriteMovies }: Props) => {
    return (
        <div className='favorite-movies'>
            <h1>Your Favorite Movies</h1>
            <div className="movies">
                {favoriteMovies.map((movie: any) => (
                    <div key={movie.id} className="movie">
                        <a href={`/moviedetail/${movie.id}`}><img src={IMG_URL + IMG_SIZE_500 + movie.poster_path} alt={movie.title} /></a>
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AccountFavoriteMovies