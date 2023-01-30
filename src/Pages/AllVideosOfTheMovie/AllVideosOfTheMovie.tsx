import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MOVIE_URL, API_KEY } from '../../config/Urls'
import "./AllVideosOfTheMovie.scss"
import BackToDetail from '../../Components/BackToDetail/BackToDetail'
import AllVideos from '../../Components/AllMedia/AllVideos/AllVideos'
import { MovieDetailOutput, MovieVideosOutput } from '../../Models'

const AllVideosOfTheMovie = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<MovieDetailOutput| null>(null)
    const [movieVideos, setMovieVideos] = useState<MovieVideosOutput| null>(null)

    useEffect(() => {

        setSelectedMovieId(window.location.pathname.split("/")[2])

    }, [selectedMovieId])

    async function axiosProcesses() {
        if (selectedMovieId !== "") {
            let movieDetailResponse = await axios.get(MOVIE_URL + selectedMovieId + "?" + API_KEY)
            let movieVideosResponse = await axios.get(MOVIE_URL + selectedMovieId + "/videos?" + API_KEY)
            setMovieDetail(movieDetailResponse.data);
            setMovieVideos(movieVideosResponse.data)
            console.log(movieVideosResponse.data)
        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])

    return (
        <div className='all-videos-back-to-detail'>
            {
                movieDetail &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            {
                movieVideos &&
                <div className='all-videos'>
                    <AllVideos movieVideos={movieVideos} />
                </div>
            }

        </div>
    )
}

export default AllVideosOfTheMovie