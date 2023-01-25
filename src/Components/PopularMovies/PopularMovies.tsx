import React from 'react'
import "./PopularMovies.scss"
import { IMG_URL, IMG_SIZE_500 } from '../../config/Urls'


const PopularMovies = ({ moviesData, dataType, setLoadMoreNumber, loadMoreNumber }:any) => {
    const increaseNumber = () => {
        setLoadMoreNumber(loadMoreNumber++)
    }

    return (
        <div className='popular-movies-with-text'>

            <h1 style={{display: dataType === "Popular" ? "flex" : "none"}}>{dataType} Movies</h1>
            <div className='popular-movies'>

                {moviesData.map((movie: any) => (
                    <div key={movie.id} className="movie">
                        <a href={`/moviedetail/${movie.id}`}><img src={IMG_URL + IMG_SIZE_500 + movie.poster_path} alt={movie.title} /></a>

                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <span style={{ color: movie.vote_average > 8 ? "lightgreen" : movie.vote_average > 5 ? "orange" : "red" }}>{movie.vote_average} </span>
                        </div>
                        <div className="overview">
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={increaseNumber}>Load More</button>
        </div>
    )
}

export default PopularMovies