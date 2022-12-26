import React from 'react'
import "./BackToDetail.scss"
import {  IMG_SIZE_500, IMG_URL } from '../../config/Urls'
import { Link } from 'react-router-dom';



const BackToDetail = ({ movieDetail, selectedMovieId }: any) => {

    return (

        <div className="back-to-detail">

            <img src={IMG_URL + IMG_SIZE_500 + movieDetail.poster_path} alt={movieDetail.title} />
            <div className="text">

                <h1>{movieDetail.title} {`(${movieDetail.release_date.split("-")[0]})`}</h1>
                <Link className='link' to={`/moviedetail/${selectedMovieId}`}>← Back to detail</Link>

            </div>
        </div>

    )
}

export default BackToDetail