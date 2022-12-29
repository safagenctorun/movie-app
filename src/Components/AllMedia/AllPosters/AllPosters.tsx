import React, { useState } from 'react'
import "./AllPosters.scss"
import { IMG_SIZE_500, IMG_URL } from '../../../config/Urls';

const AllPosters = ({ movieImages, language }: any) => {
    const [selectedLanguage, setSelectedLanguage] = useState("No Language")

    // const [languageDict, setLanguageDict] = useState<any>({})

    // language.forEach((lang:any) => {
    //     setLanguageDict({...languageDict, [lang.iso_639_1]: lang.english_name}) 
    // })

    const dictionary: any = {

        en: "English",
        no: "Norwegian",
        pt: "Portuguese",
        te: "Telugu",
        it: "Italian",
        fr: "French",
        zh: "Chinese",
        null: "No Language"
    };

    let languageArray: any = []
    movieImages.backdrops.forEach((el: any) => {

        el.iso_639_1 !== null ?
            languageArray.push(el.iso_639_1)
            :
            languageArray.push("null")
    })

    let languageArrayWithoutDuplicates = Array.from(new Set(languageArray)); //Duplicates kaldırıyor

    return (
        <div className='posters'>
            <div className="posters-choices">
                {languageArrayWithoutDuplicates.map((lang: any, index: number) => (
                    <p key={index} style={{ borderBottom: selectedLanguage === dictionary[lang] ? "2px solid #000" : "" }} onClick={e => setSelectedLanguage(e.currentTarget.innerText)}>{lang === "ptr" ? "No Language" : dictionary[lang]} </p>
                ))}

            </div>


            <div className="posters-images">
                {movieImages.backdrops.map((img: any, index: number) => (

                    dictionary[img.iso_639_1] === selectedLanguage &&

                    <div className="posters-image" key={index}>
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

export default AllPosters