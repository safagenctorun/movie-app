import React from 'react'
import "./MovieBanner.scss"
const MovieBanner = () => {
    return (
        <div className='movie-banner'>
            <div className="movie-poster">
                <img src="https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg" alt="Black Adam" />
            </div>
            <div className="movie-info">
                <div className="title">
                    <h1>Black Adam (2022)   </h1>
                    
                </div>
                <div className="type">

                    10+
                    10/21/2022 (TR)
                    Action, Fantasy, Science Fiction
                    2h 5m
                </div>
                <div className="rating">
                    user score
                </div>
                <div className="tagline">
                    The world needed a hero. It got Black Adam.
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.</p>
                </div>
                <div className="credit">
                    
                </div>
            </div>
        </div>
    )
}

export default MovieBanner