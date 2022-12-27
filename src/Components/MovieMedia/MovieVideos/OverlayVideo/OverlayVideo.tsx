import React, { useContext } from 'react'
import "./OverlayVideo.scss"
import { Context } from "../../../../context/GlobalContext";

const OverlayVideo = ({ isOverlayOpen, setIsOverlayOpen, movieVideos, videoUrl }: any) => {

    const { setisVideoOpen } = useContext(Context)

    const deActivateOverlay = () => {
        setIsOverlayOpen(false)
        setisVideoOpen(false)
    }
    return (
        <div style={{ display: isOverlayOpen === true ? "flex" : "none" }} onClick={deActivateOverlay} className="overlay-video">
            <iframe className='video'
                width="1280"
                height="720"
                src={`https://www.youtube.com/embed/${videoUrl}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"

            ></iframe>
        </div>
    )
}

export default OverlayVideo