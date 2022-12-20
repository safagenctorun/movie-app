import React, { useEffect, useState, useContext } from 'react'
import MovieBanner from '../Components/MovieBanner/MovieBanner'
import { Context } from '../context/GlobalContext'

const MovieDetail = () => {

  const { selectedMovieProperties } = useContext(Context)
  // useEffect(() => {
    // axios.get(MOVIE_URL + properties.key + "?" + API_KEY).then(res => console.log(res))

    console.log(window.location.pathname.split("/")[2])

  // }, [selectedMovieProperties])

  return (
    <div className='movie-detail'>
      <MovieBanner />
    </div>
  )
}

export default MovieDetail