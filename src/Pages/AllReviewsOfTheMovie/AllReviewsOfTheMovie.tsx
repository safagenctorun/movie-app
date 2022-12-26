import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllReviewsOfTheMovie.scss"
import MoreReviews from '../../Components/MoreReviews/MoreReviews'
import MakeReviews from '../../Components/MakeReviews/MakeReviews'
import { MOVIE_URL, API_KEY, CERTIFICATIONS_URL } from '../../config/Urls'
import BackToDetail from '../../Components/BackToDetail/BackToDetail'

const AllReviewsOfTheMovie = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<any>([])
    const [movieReviews, setMovieReviews] = useState<any>([])


    useEffect(() => {

        setSelectedMovieId(window.location.pathname.split("/")[2])

    }, [selectedMovieId])

    async function axiosProcesses() {
        if (selectedMovieId !== "") {
            let movieDetailResponse = await axios.get(MOVIE_URL + selectedMovieId + "?" + API_KEY)
            let movieReviewsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/reviews?" + API_KEY)
            setMovieDetail(movieDetailResponse.data);
            setMovieReviews(movieReviewsResponse.data)
        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])


    return (
        <div className='all-reviews-back-to-detail'>
            {
                Object.keys(movieDetail).length > 0 &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            <div className='all-reviews'>

                <MakeReviews />
                {
                    Object.keys(movieReviews).length > 0 &&
                    <MoreReviews
                        movieReviews={movieReviews}
                    />
                }
            </div>

        </div>
    )
}

export default AllReviewsOfTheMovie