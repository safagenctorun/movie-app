import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllReviewsOfTheMovie.scss"
import MoreReviews from '../../Components/MoreReviews/MoreReviews'
import MakeReviews from '../../Components/MakeReviews/MakeReviews'
import { MOVIE_URL, API_KEY } from '../../config/Urls'
import BackToDetail from '../../Components/BackToDetail/BackToDetail'
import { MovieDetailOutput, MovieReviewsOutput } from '../../Models'

const AllReviewsOfTheMovie = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<MovieDetailOutput| null>(null)
    const [movieReviews, setMovieReviews] = useState<MovieReviewsOutput| null>(null)

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
                movieDetail &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            <div className='all-reviews'>

                <MakeReviews />
                {
                    movieReviews &&
                    <MoreReviews
                        movieReviews={movieReviews}
                    />
                }
            </div>
        </div>
    )
}

export default AllReviewsOfTheMovie