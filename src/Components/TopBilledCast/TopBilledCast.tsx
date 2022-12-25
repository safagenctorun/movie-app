import React from 'react'
import "./TopBilledCast.scss"
import { IMG_URL } from '../../config/Urls'

const TopBilledCast = ({ movieCredits }: any) => {
    return (
        <div className='top-billed-cast'>
            <h1>Top Billed Cast </h1>
            <div className="actors">
                {movieCredits.cast.map((actor: any, index:number) => (
                    index < 9 && 
                    <div  key={actor.id} className="actor">
                        <img src={`${IMG_URL}/t/p/w138_and_h175_face${actor.profile_path}`} alt={actor.original_name} />
                        <p className='original-name'> {actor.original_name} </p>
                        <p className='film-name'> {actor.character}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default TopBilledCast