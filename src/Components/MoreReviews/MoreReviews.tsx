import React from 'react'
import moment from "moment";
import "./MoreReviews.scss"
import { StarOutlined } from '@ant-design/icons';

const MoreReviews = ({ movieReviews }: any) => {
    console.log(movieReviews !== undefined && movieReviews.results[4].author_details.avatar_path);
    return (
        <div className='more-reviews'>
            <h1>Reviews</h1>
            {movieReviews.results.map((review: any) => (

                <div key={review.id} className="review">

                    <div className="user-infos">
                        <img src={`https://www.gravatar.com/avatar${review.author_details.avatar_path}?s=64`} alt={review.author} />
                        <div className="text">
                            <div className="upper-text">
                                <h4>a reviews by {review.author}</h4>
                                <div className="span">

                                    <span> <StarOutlined /> {review.author_details.rating}</span>
                                </div>

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
    )
}

export default MoreReviews