import React from 'react'
import "./PopularMovies.scss"
import { IMG_URL } from '../../config/Urls'

const PopularMovies = ({moviesData}:any) => {
  return (
    <div className='popular-movies'>
            {moviesData.map((movie:any) => (
                <div key={movie.id} className="movie">
                    <img src={IMG_URL + movie.poster_path} alt={movie.title} />
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <span style={{color :movie.vote_average > 8 ? "lightgreen" : movie.vote_average > 5 ? "orange" : "red"}}>{movie.vote_average} </span>
                    </div>
                    <div className="overview">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p> 
                    </div>
                </div>
            ))} 
    </div>
  )
}

export default PopularMovies