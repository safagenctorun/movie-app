import React, { useState, useContext } from 'react'
import "./AllVideos.scss"
import { Context } from "../../../context/GlobalContext";
import OverlayVideo from '../../MovieMedia/MovieVideos/OverlayVideo/OverlayVideo';
import moment from "moment";

const AllVideos = ({ movieVideos }: any) => {

    const [selectedType, setSelectedType] = useState("Trailer")
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [videoUrl, setvideoUrl] = useState("")
    const { setisVideoOpen } = useContext(Context)

    const activateOverlay = (url: string) => {
        setIsOverlayOpen(true)
        setisVideoOpen(true)
        setvideoUrl(url);


    }
    console.log(movieVideos);
    
    // let typeArray:any =[]
    // movieVideos.results.forEach((el: any) => {          
    //     typeArray.push(el.type)
    // })
    
    // let typeArrayWithoutDuplicates  = Array.from(new Set(typeArray)); //Duplicates kaldırıyor

    
    return (
        <div className='videos'>
            <div className="video-choices">

                <p style={{ borderBottom: selectedType === "Trailer" ? "2px solid #000" : "" }} onClick={e=>setSelectedType(e.currentTarget.innerText)}>Trailer</p>
                <p style={{ borderBottom: selectedType === "Teaser" ? "2px solid #000" : "" }} onClick={e=>setSelectedType(e.currentTarget.innerText)}>Teaser</p>
                <p style={{ borderBottom: selectedType === "Featurette" ? "2px solid #000" : "" }} onClick={e=>setSelectedType(e.currentTarget.innerText)}>Featurette</p>
                <p style={{ borderBottom: selectedType === "Behind the Scenes" ? "2px solid #000" : "" }} onClick={e=>setSelectedType(e.currentTarget.innerText)}>Behind the Scenes</p>
                <p style={{ borderBottom: selectedType === "Clips" ? "2px solid #000" : "" }} onClick={e=>setSelectedType(e.currentTarget.innerText)}>Clips</p>
                <p style={{ borderBottom: selectedType === "Bloppers" ? "2px solid #000" : "" }} onClick={e=>setSelectedType(e.currentTarget.innerText)}>Bloppers</p>
                
            </div>


            <div className="video-images">
                {movieVideos.results.map((img: any, index: number) => (

                    img.type === selectedType &&

                    <div className="video-image" key={img.id}>
                        <img
                            onClick={e => activateOverlay(img.key)}
                            key={img.key} className='image'
                            src={`https://i.ytimg.com/vi/${img.key}/hqdefault.jpg`}
                            alt={img.name}
                        />
                        <h4>{img.name}</h4>
                        <div className='type-date'>

                            <p className='type'>{img.type}</p>
                            <p>{moment(img.published_at).format("DD MMM YYYY")}</p>
                        </div>
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