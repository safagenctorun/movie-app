import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MOVIE_URL, API_KEY } from '../../config/Urls'
import "./AllVideosOfTheMovie.scss"
import BackToDetail from '../../Components/BackToDetail/BackToDetail'

const AllVideosOfTheMovie = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<any>([])
    const [movieVideos, setMovieVideos] = useState<any>([])

    useEffect(() => {

        setSelectedMovieId(window.location.pathname.split("/")[2])

    }, [selectedMovieId])

    async function axiosProcesses() {
        if (selectedMovieId !== "") {
            let movieDetailResponse = await axios.get(MOVIE_URL + selectedMovieId + "?" + API_KEY)
            let movieVideosResponse = await axios.get(MOVIE_URL + selectedMovieId + "/reviews?" + API_KEY)
            setMovieDetail(movieDetailResponse.data);
            setMovieVideos(movieVideosResponse.data)
        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])

    return (
        <div className='all-videos-back-to-detail'>
            {
                Object.keys(movieDetail).length > 0 &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            <div className='all-videos'>
                
            </div>

        </div>
    )
}

export default AllVideosOfTheMovie