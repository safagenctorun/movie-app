import React from 'react'
import "./MovieBackdrops.scss"
import { IMG_SIZE_500, IMG_URL } from '../../../config/Urls';


const MovieBackdrops = ({ movieImages }: any) => {
    // let vote_array:any = [];

    // movieImages.backdrops.forEach( (el: any ) =>{
    //     vote_array.push(el.vote_average)
    // } )

    // vote_array.sort(function(a:any, b:any){return b - a})
    // console.log(vote_array);
    
    return (
        <div className='movie-backdrops'>
            <div className="movie-content">
                <div className="movie-content-img">

                    {movieImages.backdrops.map((img: any, index:number) => (
                        
                        index < 9 &&
                        <img
                            // onClick={e => activateOverlay(img.key)}
                            key={index} className='image'
                            src={IMG_URL + IMG_SIZE_500 + img.file_path }
                            alt=""
                        
                        />


                    ))}
                </div>

            </div>

        </div>
    )
}

export default MovieBackdrops