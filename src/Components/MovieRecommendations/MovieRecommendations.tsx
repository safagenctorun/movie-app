import React from 'react'
import "./MovieRecommendations.scss"
import { IMG_URL } from '../../config/Urls'

const MovieRecommendations = ({ movieRecommendations }: any) => {
    return (
        <div className='movie-recommendations'>
            <h1>Recommendations </h1>
            {
                Object.keys(movieRecommendations.results).length > 0 ? //eğer hiç yorum yoksa devreye giriyor
                <div className="recommendations">
                    {movieRecommendations.results.map((movie: any, index: number) => (
                        
                        <div key={movie.id} className="recommendation">
                            <a href={`/moviedetail/${movie.id}`}><img src={`${IMG_URL}/t/p/w500${movie.backdrop_path}`} alt={movie.title} /></a>
                            <div className="movie-detail">
                                <p className='movie-name'> {movie.title} </p>
                                <p style={{ color: movie.vote_average > 8 ? "lightgreen" : movie.vote_average > 5 ? "orange" : "red" }} className='movie-vote-average'> {`${Math.floor(movie.vote_average * 10)}%`}</p>

                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className='recommendations'> We don't have any recommendations</div>
            }
        </div>
    )
}

export default MovieRecommendations