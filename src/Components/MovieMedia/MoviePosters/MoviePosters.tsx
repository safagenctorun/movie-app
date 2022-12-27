import React from 'react'
import "./MoviePosters.scss"
import { IMG_SIZE_500, IMG_URL } from '../../../config/Urls';

const MoviePosters = ({ movieImages }: any) => {
    console.log(movieImages);
    
    return (
        <div className='movie-backdrops'>
            <div className="movie-content">
                <div className="movie-content-img">

                    {movieImages.posters.map((img: any, index: number) => (
                        img.iso_639_1 === "en" &&
                        <img
                            key={index}
                            className='image'
                            src={IMG_URL + IMG_SIZE_500 + img.file_path}
                            alt=""
                        />

                    ))}
                </div>

            </div>

        </div>
    )
}

export default MoviePosters