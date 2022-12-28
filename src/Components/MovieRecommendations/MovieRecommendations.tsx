import React from 'react'
import "./MovieRecommendations.scss"
import { IMG_URL } from '../../config/Urls'

const MovieRecommendations = ({ movieRecommendations }: any) => {
    return (
        <div className='movie-recommendations'>
            <h1>Recommendations </h1>
            <div className="recommendations">
                {movieRecommendations.results.map((movie: any, index:number) => (
                    // index < 9 && 
                    <div  key={movie.id} className="recommendation">
                        <img src={`${IMG_URL}/t/p/w250_and_h141_face${movie.backdrop_path}`} alt={movie.title} />
                         <p className='movie-name'> {movie.title} </p> 
                         {/* <p className='movie-name'> {`${movie.vote_average*10}%`}</p>  */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieRecommendations