import React, { useState, useContext } from 'react'
import "./MovieVideos.scss"
import { Context } from "../../context/GlobalContext";
import OverlayVideo from '../OverlayVideo/OverlayVideo';


const MovieVideos = ({ movieVideos }: any) => {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [videoUrl, setvideoUrl] = useState("")
    const { setisVideoOpen } = useContext(Context)

    const activateOverlay = (url: string) => {
        setIsOverlayOpen(true)
        setisVideoOpen(true)
        setvideoUrl(url);


    }

    console.log(movieVideos);

    return (
        <div className='movie-contents'>
            {/* <button onClick={activateOverlay}>video</button> */}
            <div className="movie-content">
                <div className="movie-content-img">

                    {movieVideos.results.map((img: any) => (
                        img.type === "Trailer" &&

                        <img
                            onClick={e => activateOverlay(img.key)}
                            key={img.key} className='image'
                            src={`https://i.ytimg.com/vi/${img.key}/hqdefault.jpg`}
                            alt={img.name}
                        />


                    ))}
                </div>
                <OverlayVideo
                    isOverlayOpen={isOverlayOpen}
                    setIsOverlayOpen={setIsOverlayOpen}
                    movieVideos={movieVideos}
                    videoUrl={videoUrl}
                />

            </div>

        </div>
    )
}

export default MovieVideos