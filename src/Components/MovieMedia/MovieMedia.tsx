import React, { useState } from 'react'
import "./MovieMedia.scss"
import { Link } from 'react-router-dom'
import MovieVideos from './MovieVideos/MovieVideos'
import MovieBackdrops from './MovieBackdrops/MovieBackdrops'
import MoviePosters from './MoviePosters/MoviePosters'

const MovieMedia = ({ movieVideos, movieImages, selectedMovieId }: any) => {
    const [selectedType, setSelectedType] = useState("videos")

    const typeSelectHandler = (e: any) => {
        setSelectedType(e.target.className);

    }
    return (
        <div className='movie-media'>
            <div className="titles">
                <h1>Media </h1>
                <div className="center-of-titles">

                    <h3 onClick={typeSelectHandler} style={{ borderBottom: selectedType === "videos" ? "2px solid #000" : "" }} className="videos"> Videos {movieVideos.results.length}</h3>
                    <h3 onClick={typeSelectHandler} style={{ borderBottom: selectedType === "backdrops" ? "2px solid #000" : "" }} className="backdrops"> Backdrops {movieImages.backdrops.length}</h3>
                    <h3 onClick={typeSelectHandler} style={{ borderBottom: selectedType === "posters" ? "2px solid #000" : "" }} className="posters"> Posters {movieImages.posters.length}</h3>
                </div>

                <Link
                    to={`/moviedetail/${selectedMovieId}/${selectedType}`}
                >
                    View All {selectedType.charAt(0).toUpperCase()}{selectedType.slice(1)}
                </Link> {/* baş harfi büyütme işlemi*/}

            </div>
            <div className="contents">

                {
                    selectedType === "videos" &&
                    Object.keys(movieVideos).length > 0 &&
                    <MovieVideos
                        movieVideos={movieVideos}
                    />
                }

                {
                    selectedType === "backdrops" &&
                    Object.keys(movieImages).length > 0 &&
                    <MovieBackdrops
                        movieImages={movieImages}
                    />
                }
                {
                    selectedType === "posters" &&
                    Object.keys(movieImages).length > 0 &&
                    <MoviePosters
                        movieImages={movieImages}
                    />
                }

            </div>
        </div>
    )
}

export default MovieMedia