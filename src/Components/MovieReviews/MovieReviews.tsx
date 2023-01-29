import React, { useEffect, useState } from 'react'
import "./MovieReviews.scss"
import moment from "moment";
import { Divider } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { MovieReviewsOutput } from '../../Models';

interface Props {
    movieReviews: MovieReviewsOutput
    selectedMovieId: string
}

const MovieReviews = ({ movieReviews, selectedMovieId }: Props) => {
    const [randomReviews, setRandomReviews] = useState<number>()

    useEffect(() => {
        setRandomReviews(Math.floor(Math.random() * movieReviews.results.length))  //toplam yorumlar içinden 1 tanesini seçiyor
    }, [])

    return (

        <div className='movie-reviews'>
            <h1 >Reviews</h1>
            {randomReviews !== undefined &&
                Object.keys(movieReviews.results).length > 0 ? //eğer hiç yorum yoksa devreye giriyor
                <div className="review">

                    <div className="user-infos">
                        <img src={`https://www.gravatar.com/avatar${movieReviews.results[randomReviews].author_details.avatar_path}?s=64`} alt={movieReviews.results[randomReviews].author} />

                        <div className="text">
                            <div className="upper-text">
                                <h4>a reviews by {movieReviews.results[randomReviews].author}</h4>
                                <div className="span">

                                    <span> <StarOutlined />  {movieReviews.results[randomReviews].author_details.rating}</span>
                                </div>
                            </div>
                            <div className="written-by">

                                <p>Written by</p>
                                <p className='by'>{movieReviews.results[randomReviews].author}</p>
                                <p>on</p>
                                <p>{moment(movieReviews.results[randomReviews].created_at).format("DD/MM/YYYY")}</p>
                            </div>



                        </div>
                    </div>
                    <div className="content">
                        <p> {movieReviews.results[randomReviews].content}</p>
                    </div>
                    <Divider />
                    <Link className='page-changer' to={`/moviedetail/${selectedMovieId}/reviews`}>Read All Reviews</Link>
                </div>
                :
                <div className='review'>We don't have any reviews</div>
            }

        </div>
    )
}

export default MovieReviews