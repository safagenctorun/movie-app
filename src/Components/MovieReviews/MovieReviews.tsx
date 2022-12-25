import React, { useEffect, useState } from 'react'
import "./MovieReviews.scss"
import moment from "moment";
import { Divider } from 'antd';

const MovieReviews = ({ movieReviews }: any) => {
    const [randomReviews, setRandomReviews] = useState<number>()
    const safa = () => {
        // console.log(randomReviews !== undefined && movieReviews.results[randomReviews].author_details.avatar_path.substring(1));
        console.log(randomReviews !== undefined && movieReviews.results[randomReviews]);
        

    }

    useEffect(() => {

        setRandomReviews(Math.floor(Math.random() * movieReviews.results.length))  //toplam yorumlar içinden 1 tanesini seçiyor

    }, [])



    return (
        <div className='movie-reviews'>
            <button onClick={safa}>sa</button>
            <h1>Reviews</h1>
            <div className="user-infos">
                {/* <img src={randomReviews !== undefined && movieReviews.results[randomReviews].author_details.avatar_path.substring(1)} alt="safa" /> */}
                <div className="text">
                    <div className="upper-text">
                        <h4>a reviews by {randomReviews !== undefined && movieReviews.results[randomReviews].author}</h4>
                        <span> {randomReviews !== undefined && movieReviews.results[randomReviews].author_details.rating}</span>
                    </div>
                    <p>
                        Written by
                        {randomReviews !== undefined && movieReviews.results[randomReviews].author}
                        on
                        {moment(randomReviews !== undefined ? movieReviews.results[randomReviews].created_at : new Date()).format("DD/MM/YYYY")}
                    </p>
                </div>
            </div>
            <div className="content">
                <p> {randomReviews !== undefined && movieReviews.results[randomReviews].content}</p>
            </div>
            <Divider/>
            <a href=""></a>
        </div>
    )
}

export default MovieReviews