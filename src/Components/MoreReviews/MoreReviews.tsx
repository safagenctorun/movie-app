import React from 'react'
import moment from "moment";
import "./MoreReviews.scss"

const MoreReviews = ({ movieReviews }: any) => {
    console.log(movieReviews.results);
    return (
        <div className='more-reviews'>
            <div className='more-reviews-margin'>

            <h1>Reviews</h1>
            {movieReviews.results.map((review: any) => (

                <div key={review.id} className="review">

                    <div className="user-infos">
                        {/* <img src={review.author_details.avatar_path.substring(1)} alt="safa" /> */}
                        <div className="text">
                            <div className="upper-text">
                                <h4>a reviews by {review.author}</h4>
                                <span> {review.author_details.rating}</span>
                            </div>
                            <p>
                                Written by
                                {review.author}
                                on
                                {moment(review.created_at).format("DD/MM/YYYY")}
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <p> {review.content}</p>
                    </div>
                </div>
            )

            )}
            </div>




        </div>
    )
}

export default MoreReviews