import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import "./MovieDetail.scss"
import MovieBanner from '../../Components/MovieBanner/MovieBanner'
import { MOVIE_URL, API_KEY, CERTIFICATIONS_URL } from '../../config/Urls'
import TopBilledCast from '../../Components/TopBilledCast/TopBilledCast'
import MovieReviews from '../../Components/MovieReviews/MovieReviews'
import MovieMedia from '../../Components/MovieMedia/MovieMedia'
import MovieRecommendations from '../../Components/MovieRecommendations/MovieRecommendations'


const MovieDetail = () => {

    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<any>([])
    const [movieCredits, setMovieCredits] = useState<any>([])
    const [movieReviews, setMovieReviews] = useState<any>([])
    const [movieVideos, setMovieVideos] = useState<any>([])
    const [movieImages, setMovieImages] = useState<any>([])
    const [movieRecommendations, setMovieRecommendations] = useState<any>([])

    useEffect(() => {

        setSelectedMovieId(window.location.pathname.split("/")[2])

    }, [selectedMovieId])

    async function axiosProcesses() {
        if (selectedMovieId !== "") {

            let movieDetailResponse = await axios.get(MOVIE_URL + selectedMovieId + "?" + API_KEY)
            let movieCreditsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/credits?" + API_KEY)
            let movieReviewsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/reviews?" + API_KEY)
            let movieVideosResponse = await axios.get(MOVIE_URL + selectedMovieId + "/videos?" + API_KEY)
            let movieImagesResponse = await axios.get(MOVIE_URL + selectedMovieId + "/images?" + API_KEY)
            let movieRecommendationsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/recommendations?" + API_KEY)

            // let movieCertificationsResponse = await axios.get(CERTIFICATIONS_URL)

            setMovieDetail(movieDetailResponse.data);
            setMovieCredits(movieCreditsResponse.data)
            setMovieReviews(movieReviewsResponse.data)
            setMovieVideos(movieVideosResponse.data)
            setMovieImages(movieImagesResponse.data)
            setMovieRecommendations(movieRecommendationsResponse.data)
            console.log(movieImagesResponse.data)

        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])



    return (
        <div className='movie-detail'>

            {
                Object.keys(movieDetail).length > 0 &&
                <MovieBanner
                    movieDetail={movieDetail}
                    movieCredits={movieCredits}
                />
            }
            <div className="movie-detail-except-banner">

                {
                    Object.keys(movieDetail).length > 0 &&
                    <TopBilledCast
                        movieCredits={movieCredits}
                    />
                }

                {
                    Object.keys(movieReviews).length > 0 &&  
                    <MovieReviews
                        movieReviews={movieReviews}
                        selectedMovieId={selectedMovieId}
                    />
                }
                {
                    Object.keys(movieVideos).length > 0 &&
                    Object.keys(movieImages).length > 0 &&
                    <MovieMedia
                        movieVideos={movieVideos}
                        movieImages={movieImages}
                        selectedMovieId={selectedMovieId}
                    />
                }
                {
                    Object.keys(movieRecommendations).length > 0 &&
                    <MovieRecommendations
                        movieRecommendations={movieRecommendations}
                    />
                }

            </div>



        </div>
    )
}

export default MovieDetail