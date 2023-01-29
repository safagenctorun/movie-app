import React from 'react'
import "./TopBilledCast.scss"
import { IMG_URL } from '../../config/Urls'
import { Cast_CrewOutput, MovieCreditsOutput } from '../../Models';

interface Props {
    movieCredits: MovieCreditsOutput | null;

}

const TopBilledCast = ({ movieCredits }: Props) => {
    return (
        <div className='top-billed-cast'>
            <h1>Top Billed Cast </h1>
            <div className="actors">
                {movieCredits?.cast.map((actor: Cast_CrewOutput, index:number) => (
                    index < 9 && 
                    <div  key={actor.id} className="actor">
                        <img src={`${IMG_URL}/t/p/w138_and_h175_face${actor.profile_path}`} alt={actor.original_name} />
                        <p className='original-name'> {actor.original_name} </p>
                        <p className='movie-name'> {actor.character}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default TopBilledCast