import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllPostersOfThePage.scss"
import { MOVIE_URL, API_KEY, CONFIGURATION_URL } from '../../config/Urls'
import BackToDetail from '../../Components/BackToDetail/BackToDetail'
import AllPosters from '../../Components/AllMedia/AllPosters/AllPosters'

const AllPostersOfThePage = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<any>([])
    const [movieImages, setMovieImages] = useState<any>([])
    const [language, setLanguage] = useState<any>([])


    useEffect(() => {

        setSelectedMovieId(window.location.pathname.split("/")[2])

    }, [selectedMovieId])

    async function axiosProcesses() {
        if (selectedMovieId !== "") {
            let movieDetailResponse = await axios.get(MOVIE_URL + selectedMovieId + "?" + API_KEY)
            let movieImagesResponse = await axios.get(MOVIE_URL + selectedMovieId + "/images?" + API_KEY)
            let languagesResponse = await axios.get(CONFIGURATION_URL + "/languages?" + API_KEY)

            setMovieDetail(movieDetailResponse.data);
            setMovieImages(movieImagesResponse.data)
            setLanguage(languagesResponse.data)
            console.log(languagesResponse.data)
        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])
    return (
        <div className='all-posters-back-to-detail'>
            {
                Object.keys(movieDetail).length > 0 &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            <div className="all-posters">
                {
                    Object.keys(movieImages).length > 0 &&
                    Object.keys(language).length > 0 &&
                    <div className='all-images'>
                        <AllPosters
                            movieImages={movieImages}
                            language={language}
                        />

                    </div>
                }
            </div>
        </div>
    )
}

export default AllPostersOfThePage