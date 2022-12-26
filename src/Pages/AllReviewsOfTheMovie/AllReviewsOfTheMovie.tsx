import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllReviewsOfTheMovie.scss"
import MoreReviews from '../../Components/MoreReviews/MoreReviews'
import MakeReviews from '../../Components/MakeReviews/MakeReviews'
import { MOVIE_URL, API_KEY, CERTIFICATIONS_URL } from '../../config/Urls'

const AllReviewsOfTheMovie = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieReviews, setMovieReviews] = useState<any>([])

    useEffect(() => {

        setSelectedMovieId(window.location.pathname.split("/")[2])

    }, [selectedMovieId])

    async function axiosProcesses() {
        if (selectedMovieId !== "") {
            let movieReviewsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/reviews?" + API_KEY)
            setMovieReviews(movieReviewsResponse.data)
        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])


    return (
        <div className='all-reviews'>
            <MakeReviews/>
            {
                Object.keys(movieReviews).length > 0 &&
                <MoreReviews
                    movieReviews={movieReviews}
                    />
            }

        </div>
    )
}

export default AllReviewsOfTheMovie