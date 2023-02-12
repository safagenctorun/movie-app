import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import "./MovieDetail.scss"
import MovieBanner from '../../Components/MovieBanner/MovieBanner'
import { MOVIE_URL, API_KEY, BASE_URL } from '../../config/Urls'
import TopBilledCast from '../../Components/TopBilledCast/TopBilledCast'
import MovieReviews from '../../Components/MovieReviews/MovieReviews'
import MovieMedia from '../../Components/MovieMedia/MovieMedia'
import MovieRecommendations from '../../Components/MovieRecommendations/MovieRecommendations'
import { message } from 'antd'
import { AccountDetailOutput, MovieCreditsOutput, MovieDetailOutput, MovieImagesOutput, MovieRecommendationsOutput, MovieReviewsOutput, MovieVideosOutput } from '../../Models'
import { useParams } from 'react-router-dom'



const MovieDetail = () => {

    const [selectedMovieId, setSelectedMovieId] = useState<string | undefined >("")
    const [movieDetail, setMovieDetail] = useState<MovieDetailOutput | null>(null)
    const [movieCredits, setMovieCredits] = useState<MovieCreditsOutput | null>(null)
    const [movieReviews, setMovieReviews] = useState<MovieReviewsOutput | null>(null)
    const [movieVideos, setMovieVideos] = useState<MovieVideosOutput | null>(null)
    const [movieImages, setMovieImages] = useState<MovieImagesOutput | null>(null)
    const [movieRecommendations, setMovieRecommendations] = useState<MovieRecommendationsOutput | null>(null)
    const [movieRate, setMovieRate] = useState<number>(0)
    const [accountDetail, setAccountDetail] = useState<AccountDetailOutput | null>(null)
    const [movieDefaultRate, setmovieDefaultRate] = useState<number>(0)
    const [isFavorite, setisFavorite] = useState<boolean>(false)

    let params = useParams()
    useEffect(() => {

        setSelectedMovieId(params.movieid)
        
    }, [selectedMovieId])

    const axiosProcesses = useCallback(async () => {
        try {
            if (selectedMovieId !== "") {

                let movieDetailResponse = await axios.get(MOVIE_URL + selectedMovieId + "?" + API_KEY)
                let movieCreditsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/credits?" + API_KEY)
                let movieReviewsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/reviews?" + API_KEY)
                let movieVideosResponse = await axios.get(MOVIE_URL + selectedMovieId + "/videos?" + API_KEY)
                let movieImagesResponse = await axios.get(MOVIE_URL + selectedMovieId + "/images?" + API_KEY)
                let movieRecommendationsResponse = await axios.get(MOVIE_URL + selectedMovieId + "/recommendations?" + API_KEY)

                setMovieDetail(movieDetailResponse.data);
                setMovieCredits(movieCreditsResponse.data)
                setMovieReviews(movieReviewsResponse.data)
                setMovieVideos(movieVideosResponse.data)
                setMovieImages(movieImagesResponse.data)
                setMovieRecommendations(movieRecommendationsResponse.data)

            }
        } catch (error: any) {
            console.error(error.message)
        }
    }, [selectedMovieId])

    useEffect(() => {
        axiosProcesses();
    }, [axiosProcesses])

    useEffect(() => {
        if (localStorage.getItem("session_id"))
            axios.get(BASE_URL + "/account?" + API_KEY + `&session_id=${localStorage.getItem("session_id")}`)
                .then(res => {
                    setAccountDetail(res.data)
                })

        let path = MOVIE_URL + selectedMovieId + "/rating?" + API_KEY
        if (localStorage.getItem("session_id"))
            path += "&session_id=" + localStorage.getItem("session_id")

        if (movieRate) {
            axios.post(path, {
                value: movieRate
            }).then(res => {
                if (res.status === 200 || res.status === 201)
                    message.success("Rating was completed successfully")
            }).catch(res => {
                if (res.status !== 200 || res.status !== 201)
                    message.error("Rating wasn't completed successfully")
            })
        }
    }, [movieRate, selectedMovieId])

    useEffect(() => {
        let path = BASE_URL + `/account/${accountDetail?.id}/rated/movies?` + API_KEY
        if (localStorage.getItem("session_id"))
            path += `&session_id=${localStorage.getItem("session_id")}`

        accountDetail &&
            axios
                .get(path)
                .then(res => {
                    res.data.results.map((mov: any) =>
                        mov.id.toString() === selectedMovieId &&
                        setmovieDefaultRate(mov.rating / 2))  //seçilen film daha önceden oyladığımız filmler arasında var mı bakıyor  varsa default rate olarak atıyor böylece sayfa açılınca direkt hesabın sahibinin oylama bilgileri gelmiş oluyor 
                    // 2 ye bölmemin sebebi 5 adet yıldız üzerinden oylama yapıyorum ama api 10 üzerinden değer yolluyor 
                })
    }, [accountDetail, selectedMovieId])

    useEffect(() => {

        let path = BASE_URL + `/account/${accountDetail?.id}/favorite/movies?` + API_KEY
        if (localStorage.getItem("session_id"))
            path += `&session_id=${localStorage.getItem("session_id")}`

        accountDetail &&
            axios
                .get(path)
                .then(res => {
                    res.data.results.map((mov: any) =>
                        mov.id.toString() === selectedMovieId &&
                        setisFavorite(true))
                })
    }, [accountDetail])


    const markAsFavorite = () => {

        let path = BASE_URL + `/account/${accountDetail?.id}/favorite?` + API_KEY
        if (localStorage.getItem("session_id")) {
            path += `&session_id=${localStorage.getItem("session_id")}`
            setisFavorite(!isFavorite)
        }

        axios.post(path, {
            "media_type": "movie",
            "media_id": selectedMovieId,
            "favorite": !isFavorite
        }).then(res => {
            if (res.status === 200 || res.status === 201)
                message.success(res.data.status_message)

        }).catch(res => {
            if (res.status !== 200 || res.status !== 201)
                message.error("Something went wrong")
        })
    }


    return (
        <div className='movie-detail'>

            {
                movieDetail &&
                <MovieBanner
                    movieDetail={movieDetail}
                    movieCredits={movieCredits}
                    setMovieRate={setMovieRate}
                    movieDefaultRate={movieDefaultRate}
                    markAsFavorite={markAsFavorite}
                    isFavorite={isFavorite}
                />
            }
            <div className="movie-detail-except-banner">

                {
                    movieDetail &&
                    <TopBilledCast
                        movieCredits={movieCredits}
                    />
                }

                {
                    selectedMovieId&&
                    movieReviews &&
                    <MovieReviews
                        movieReviews={movieReviews}
                        selectedMovieId={selectedMovieId}
                    />
                }
                {
                    selectedMovieId&&
                    movieVideos &&
                    movieImages &&
                    <MovieMedia
                        movieVideos={movieVideos}
                        movieImages={movieImages}
                        selectedMovieId={selectedMovieId}
                    />
                }
                {
                    movieRecommendations &&
                    <MovieRecommendations
                        movieRecommendations={movieRecommendations}
                    />
                }

            </div>
        </div>
    )
}

export default MovieDetail