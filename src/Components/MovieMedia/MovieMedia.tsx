import React, { useState } from 'react'
import "./MovieMedia.scss"
import { Link } from 'react-router-dom'
import MovieVideos from '../MovieVideos/MovieVideos'

const MovieMedia = ({ movieVideos, movieImages }: any) => {
    const [selectedType, setSelectedType] = useState("videos")


    const text = 'ahmet**gençoğlu';

    const splittedTextArray = text.split('**');

    


    const typeSelectHandler = (e: any) => {
        setSelectedType(e.target.className);

    }
    return (
        <div className='movie-media'>
            <div className="titles">
                <h1>Media </h1>

                <h3 onClick={typeSelectHandler} style={{ borderBottom: selectedType === "videos" ? "2px solid #000" : "" }} className="videos"> Videos {movieVideos.results.length}</h3>
                <h3 onClick={typeSelectHandler} style={{ borderBottom: selectedType === "backdrops" ? "2px solid #000" : "" }} className="backdrops"> Backdrops {movieImages.backdrops.length}</h3>
                <h3 onClick={typeSelectHandler} style={{ borderBottom: selectedType === "posters" ? "2px solid #000" : "" }} className="posters"> Posters {movieImages.posters.length}</h3>

                <Link to={""}>View All {selectedType.charAt(0).toUpperCase()}{selectedType.slice(1)} </Link> {/* baş harfi büyütme işlemi*/}
            </div>
            <div className="contents">
            {splittedTextArray[0]}
            {splittedTextArray[1]}
{/*     
                {
                    selectedType === "videos" &&
                    Object.keys(movieVideos).length > 0 &&
                    <MovieVideos
                        movieVideos={movieVideos}
                    />
                } */}
                
            </div>
        </div>
    )
}

export default MovieMedia