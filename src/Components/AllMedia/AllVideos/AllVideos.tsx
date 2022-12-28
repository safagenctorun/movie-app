import React, { useState, useContext } from 'react'
import "./AllVideos.scss"
import { Context } from "../../../context/GlobalContext";
import OverlayVideo from '../../MovieMedia/MovieVideos/OverlayVideo/OverlayVideo';
import { Divider } from 'antd';

const AllVideos = ({ movieVideos }: any) => {
    console.log(movieVideos.results);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [videoUrl, setvideoUrl] = useState("")
    const { setisVideoOpen } = useContext(Context)

    const activateOverlay = (url: string) => {
        setIsOverlayOpen(true)
        setisVideoOpen(true)
        setvideoUrl(url);


    }

    return (
        <div className='videos'>



            <div className="video-images">
                {movieVideos.results.map((img: any, index: number) => (

                    // img.type === "Trailer" &&

                    <div className="video-image">
                        <img
                            onClick={e => activateOverlay(img.key)}
                            key={img.key} className='image'
                            src={`https://i.ytimg.com/vi/${img.key}/hqdefault.jpg`}
                            alt={img.name}
                        />
                    </div>

                ))}
            </div>
            {isOverlayOpen === true &&

                <OverlayVideo
                    isOverlayOpen={isOverlayOpen}
                    setIsOverlayOpen={setIsOverlayOpen}
                    movieVideos={movieVideos}
                    videoUrl={videoUrl}
                />
            }
        </div>
    )
}

export default AllVideos