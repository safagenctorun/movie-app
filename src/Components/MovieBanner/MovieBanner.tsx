import React from 'react'
import "./MovieBanner.scss"
import { IMG_URL, IMG_SIZE_500, IMG_SIZE_1920 } from '../../config/Urls'
import { DownOutlined, FacebookFilled, HeartOutlined, TwitterCircleFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Rate, Dropdown, Space } from 'antd';
import moment from "moment";
import { CreditsOutput, Genre, MovieCreditsOutput, MovieDetailOutput } from '../../Models';

interface Props {
    movieDetail: MovieDetailOutput;
    movieCredits: MovieCreditsOutput | null;
    setMovieRate: React.Dispatch<React.SetStateAction<number>>
    movieDefaultRate: number;
    markAsFavorite: () => void
    isFavorite: boolean
}

const MovieBanner = ({ movieDetail, movieCredits, setMovieRate, movieDefaultRate, markAsFavorite, isFavorite}: Props) => {

    const shareOnFacebook = (name: string) => {

        const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u='
        const twitterUrl = `https://twitter.com/intent/tweet?text=`
        const navUrl = name === "facebook" ? facebookUrl : twitterUrl + window.location.href;
        window.open(navUrl, '_blank');
    }

    const rateHandler = (rate: number) => {
        if (rate === 0)
            setMovieRate(rate + 0.5);
        else
            setMovieRate(rate * 2);
    }

    const items: MenuProps['items'] = [
        {
            label: <Rate allowHalf onChange={rateHandler} defaultValue={movieDefaultRate} />, 
            key: '1',
        }

    ];


    const backgroundStyle = IMG_URL + IMG_SIZE_1920 + movieDetail?.backdrop_path
    return (
        <div className='movie-banner' >
            <div style={{ backgroundImage: `url(${backgroundStyle})` }} className="movie-background">

                <div className="background-blackout">
                    <div className="about-movie">
                        <div className="movie-poster">
                            <img src={IMG_URL + IMG_SIZE_500 + movieDetail?.poster_path} alt={movieDetail.title} />
                        </div>
                        <div className="movie-info">
                            <div className="title">
                                <h1>{movieDetail.title} {`(${movieDetail.release_date.split("-")[0]})`}  </h1>
                            </div>

                            <div className="type">

                                <p>  {moment(movieDetail.release_date).format("DD/MM/YYYY")}</p>
                                {movieDetail.genres.map((el: Genre) => (
                                    <p key={el.id}> {el.name}</p>
                                ))}

                                <p>    2h 5m</p> {/* apiden bu bilgiyi alamıyorum */}


                            </div>
                            <div className="rating">
                                <p>User Score</p>
                                <span style={{ color: movieDetail.vote_average > 8 ? "lightgreen" : movieDetail.vote_average > 5 ? "orange" : "red" }}> {Math.round(movieDetail.vote_average * 10)}</span>
                                <Dropdown menu={{ items }} trigger={['click']} >
                                    <Space style={{marginLeft: "5px", color: "white", fontWeight: "bold"}} >
                                        Rate It
                                        <DownOutlined />
                                    </Space>
                                </Dropdown>
                                <div className="share">
                                    < FacebookFilled id='facebook' onClick={e => shareOnFacebook("facebook")} />
                                    <TwitterCircleFilled id='twitter' onClick={e => shareOnFacebook("twitter")} />
                                </div>
                                <div className="add-favorite">
                                    <HeartOutlined onClick={markAsFavorite} style={{color: isFavorite === true ? "red" : "black"}} />
                                </div>
                            </div>

                            <div className="tagline">
                                <p>{movieDetail.tagline}</p>
                            </div>
                            <div className="overview">
                                <h3>Overview</h3>
                                <p>{movieDetail.overview}</p>
                            </div>
                            <div className="credit">

                                {movieCredits?.crew?.filter((credit) => credit.job === "Director")?.map((credit: CreditsOutput) => (
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