import React, { useState } from 'react'
import "./AllBackdrops.scss"
import { IMG_SIZE_500, IMG_URL } from '../../../config/Urls';



const AllBackdrops = ({ movieImages, language }: any) => {
    const [selectedLanguage, setSelectedLanguage] = useState("No Language")

    let languageDict :any= {};
    language.forEach((lang: any) => {

        languageDict[lang.iso_639_1] =  lang.english_name
        
    })
    languageDict["null"] = "No Language"  // resimlerin dili olmadığında null geldiği için en sona ekliyoruz 


    let languageArray: any = []
    movieImages.backdrops.forEach((el: any) => {

        el.iso_639_1 !== null ?
            languageArray.push(el.iso_639_1)
            :
            languageArray.push("null")
    })

    let languageArrayWithoutDuplicates = Array.from(new Set(languageArray)); //Duplicates kaldırıyor

    return (
        <div className='backdrops'>
            <div className="backdrop-choices">
                {languageArrayWithoutDuplicates.map((lang: any, index: number) => (
                    <p key={index} style={{ borderBottom: selectedLanguage === languageDict[lang] ? "2px solid #000" : "" }} onClick={e => setSelectedLanguage(e.currentTarget.innerText)}>{languageDict[lang]} </p>
                ))}

            </div>


            <div className="backdrops-images">
                {movieImages.backdrops.map((img: any, index: number) => (

                    languageDict[img.iso_639_1] === selectedLanguage &&

                    <div className="backdrops-image" key={index}>
                        <a
                            href={IMG_URL + "/original/" + img.file_path}
                            target="_blank"
                            rel="noreferrer">
                            <img
                                key={img.key} className='image'
                                src={IMG_URL + IMG_SIZE_500 + img.file_path}
                                alt=""
                            />
                        </a>

                        <div className='img-size'>
                            <a href={IMG_URL + "/original/" + img.file_path} target="_blank" rel="noreferrer"> {img.width}x{img.height}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllBackdrops