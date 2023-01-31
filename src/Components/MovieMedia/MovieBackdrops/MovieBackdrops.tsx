import React from 'react'
import "./MovieBackdrops.scss"
import { IMG_SIZE_500, IMG_URL } from '../../../config/Urls';
import { ImagesTypeOutput, MovieImagesOutput } from '../../../Models';


interface Props {
    movieImages: MovieImagesOutput
}

const MovieBackdrops = ({ movieImages }: Props) => {

    return (
        <div className='movie-backdrops'>
            <div className="movie-content">
                <div className="movie-content-img">

                    {movieImages.backdrops.map((img: ImagesTypeOutput, index: number) => (
                        index < 9 &&
                        <a
                            href={IMG_URL + "/original/" + img.file_path}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                key={index} className='image'
                                src={IMG_URL + IMG_SIZE_500 + img.file_path}
                                alt=""
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieBackdrops