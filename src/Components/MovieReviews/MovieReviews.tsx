import React, { useEffect, useState } from 'react'
import "./MovieReviews.scss"
import moment from "moment";
import { Divider } from 'antd';

const MovieReviews = ({ movieReviews, selectedMovieId }: any) => {
    const [randomReviews, setRandomReviews] = useState<number>()

       
        console.log(randomReviews !== undefined && movieReviews.results[randomReviews]);




    useEffect(() => {

        setRandomReviews(Math.floor(Math.random() * movieReviews.results.length))  //toplam yorumlar içinden 1 tanesini seçiyor

    }, [])

    const goToAllReviews = () => {
        window.location.replace(`/moviedetail/${selectedMovieId}/reviews`)
    }

    return (

        <div className='movie-reviews'>
            {randomReviews !== undefined &&
                <div className="reviews">
                    <h1 >Reviews</h1>
                    <div className="user-infos">
                        {/* <img src={randomReviews !== undefined && movieReviews.results[randomReviews].author_details.avatar_path.substring(1)} alt="safa" /> */}
                        <div className="text">
                            <div className="upper-text">
                                <h4>a reviews by {movieReviews.results[randomReviews].author}</h4>
                                <span> {movieReviews.results[randomReviews].author_details.rating}</span>
                            </div>
                            <p>
                                Written by
                                {movieReviews.results[randomReviews].author}
                                on
                                {moment(movieReviews.results[randomReviews].created_at).format("DD/MM/YYYY")}
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <p> {movieReviews.results[randomReviews].content}</p>
                    </div>
                    <Divider />
                    <span className='page-changer' onClick={goToAllReviews}> More Reviews</span>
                </div>
            }

        </div>
    )
}

export default MovieReviews