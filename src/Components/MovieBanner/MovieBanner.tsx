import React from 'react'
import "./MovieBanner.scss"
import { IMG_URL, IMG_SIZE_500, IMG_SIZE_1920 } from '../../config/Urls'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Rate, Dropdown, Space } from 'antd';
import moment from "moment";

const MovieBanner = ({ movieDetail, movieCredits }: any) => {


    const rateHandler = (rate: number) => {
        if (rate  === 0 )        
        console.log(rate + 0.5);
        else
        console.log(rate * 2);


    }

    const items: MenuProps['items'] = [
        {
            label: <Rate   allowHalf onChange={rateHandler}  />, //büyük bir hata geliyor
            key: '1',
        }

    ];


    const backgroundStyle = IMG_URL + IMG_SIZE_1920 + movieDetail.backdrop_path
    return (
        <div className='movie-banner' >
            <div style={{ backgroundImage: `url(${backgroundStyle})` }} className="movie-background">

                <div className="background-blackout">
                    <div className="about-movie">
                        <div className="movie-poster">
                            <img src={IMG_URL + IMG_SIZE_500 + movieDetail.poster_path} alt={movieDetail.title} />
                        </div>
                        <div className="movie-info">
                            <div className="title">
                                <h1>{movieDetail.title}   </h1>
                            </div>

                            <div className="type">
                                {/* <p>10+</p> */}  {/* apiden bu bilgiyi alamıyorum */}

                                <p>  {moment(movieDetail.release_date).format("DD/MM/YYYY")}</p>
                                {movieDetail.genres.map((el: any) => (
                                    <p key={el.id}> {el.name}</p>
                                ))}

                                <p>    2h 5m</p> {/* apiden bu bilgiyi alamıyorum */}


                            </div>
                            <div className="rating">
                                <span style={{ color: movieDetail.vote_average > 8 ? "lightgreen" : movieDetail.vote_average > 5 ? "orange" : "red" }}> {Math.round(movieDetail.vote_average * 10)}</span>
                                <p>User Score</p>
                                <Dropdown menu={{ items }} trigger={['click']} >
                                        <Space >
                                            Rate It
                                            <DownOutlined />
                                        </Space>
                                </Dropdown>
                               

                            </div>
                            <div className="tagline">
                                <p>{movieDetail.tagline}</p>
                            </div>
                            <div className="overview">
                                <h3>Overview</h3>
                                <p>{movieDetail.overview}</p>
                            </div>
                            <div className="credit">

                                {movieCredits.crew.map((credit: any) => (

                                    credit.job === "Director" &&
                                    <div key={credit.id} className='crew-member' >

                                        <h4 >{credit.name} </h4>
                                        <p >{credit.job} </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieBanner