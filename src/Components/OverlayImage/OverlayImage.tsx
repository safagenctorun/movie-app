import React, { useContext } from 'react'
import "./OverlayImage.scss"
import { Context } from "../../context/GlobalContext";
import { IMG_URL } from '../../config/Urls';

const OverlayImage = ({ isOverlayOpen, setIsOverlayOpen, imageUrl }: any) => {

    const { setisVideoOpen } = useContext(Context)

    const deActivateOverlay = () => {
        setIsOverlayOpen(false)
        setisVideoOpen(false)
    }

    return (

        <div style={{ display: isOverlayOpen === true ? "flex" : "none" }} onClick={deActivateOverlay} className="overlay-image">
            <img src={IMG_URL + "/original/" + imageUrl} alt="" />
        </div>
    )
}

export default OverlayImage