import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AllBackdropsOfTheMovie.scss"
import { MOVIE_URL, API_KEY, CONFIGURATION_URL } from '../../config/Urls'
import BackToDetail from '../../Components/BackToDetail/BackToDetail'
import AllBackdrops from '../../Components/AllMedia/AllBackdrops/AllBackdrops'
import { LanguageOutput, MovieDetailOutput, MovieImagesOutput } from '../../Models'

const AllBackdropsOfTheMovie = () => {
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
        <div className='all-backdrops-back-to-detail'>
            {
                movieDetail &&
                <BackToDetail
                    movieDetail={movieDetail}
                    selectedMovieId={selectedMovieId}
                />
            }
            <div className="all-backdrops">
                {
                    movieImages  &&
                    Object.keys(language).length > 0 &&
                    <div className='all-images'>
                        <AllBackdrops
                            movieImages={movieImages}
                            language = {language}
                        />

                    </div>
                }
            </div>
        </div>
    )
}

export default AllBackdropsOfTheMovie