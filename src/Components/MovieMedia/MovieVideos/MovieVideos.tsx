import React, { useState, useContext } from 'react'
import "./MovieVideos.scss"
import { Context } from "../../../context/GlobalContext";
import OverlayVideo from './OverlayVideo/OverlayVideo';
import { MovieVideosOutput, VideosInfoOutput } from '../../../Models';


interface Props {
    movieVideos: MovieVideosOutput
}

const MovieVideos = ({ movieVideos }: Props) => {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [videoUrl, setvideoUrl] = useState("")
    const { setisVideoOpen } = useContext(Context)

    const activateOverlay = (url: string) => {
        setIsOverlayOpen(true)
        setisVideoOpen(true)
        setvideoUrl(url);


    }

    return (
        <div className='movie-videos'>
            <div className="movie-content">
                <div className="movie-content-img">

                    {movieVideos.results.map((img: VideosInfoOutput) => (
                        img.type === "Trailer" &&

                        <img
                            onClick={e => activateOverlay(img.key)}
                            key={img.key} className='image'
                            src={`https://i.ytimg.com/vi/${img.key}/hqdefault.jpg`}
                            alt={img.name}
                        />
                    ))}
                </div>
                {isOverlayOpen === true &&
                
                <OverlayVideo
                    isOverlayOpen={isOverlayOpen}
                    setIsOverlayOpen={setIsOverlayOpen}
                    videoUrl={videoUrl}
                />
                }

            </div>

        </div>
    )
}

export default MovieVideos