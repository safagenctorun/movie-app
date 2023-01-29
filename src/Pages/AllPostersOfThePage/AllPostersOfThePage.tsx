import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllPostersOfThePage.scss"
import { MOVIE_URL, API_KEY, CONFIGURATION_URL } from '../../config/Urls'
import BackToDetail from '../../Components/BackToDetail/BackToDetail'
import AllPosters from '../../Components/AllMedia/AllPosters/AllPosters'
import { LanguageOutput, MovieDetailOutput, MovieImagesOutput } from '../../Models'

const AllPostersOfThePage = () => {
    const [selectedMovieId, setSelectedMovieId] = useState<string>("")
    const [movieDetail, setMovieDetail] = useState<MovieDetailOutput| null>(null)
    const [movieImages, setMovieImages] = useState<MovieImagesOutput| null>(null)
    const [language, setLanguage] = useState<LanguageOutput[]>([])


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
        }
    }

    useEffect(() => {
        axiosProcesses();
    }, [selectedMovieId])
    return (
        <div className='all-posters-back-to-detail'>
            {
                movieDetail &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            <div className="all-posters">
                {
                    movieImages &&
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