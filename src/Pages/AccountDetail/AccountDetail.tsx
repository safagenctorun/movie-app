import React, { useEffect, useState } from 'react'
import "./AccountDetail.scss"
import { API_KEY, BASE_URL } from '../../config/Urls'
import axios from 'axios'
import { AccountDetailOutput, MoviesOutput } from '../../Models'
import AccountFavoriteMovies from '../../Components/AccountFavoriteMovies/AccountFavoriteMovies'
import AccountRatedMovies from '../../Components/AccountRatedMovies/AccountRatedMovies'

const AccountDetail = () => {
    const [accountDetail, setAccountDetail] = useState<AccountDetailOutput | null>(null)
    const [favoriteMovies, setFavoriteMovies] = useState<MoviesOutput[]>([]);
    const [ratedMovies, setRatedMovies] = useState<MoviesOutput[]>([]);

    useEffect(() => {
        axios.get(BASE_URL + "/account?" + API_KEY + `&session_id=${localStorage.getItem("session_id")}`)
            .then(res => {
                setAccountDetail(res.data)
            })
    }, [])

    useEffect(() => {
        accountDetail &&
            axios
                .get(BASE_URL + `/account/${accountDetail?.id}/favorite/movies?` + API_KEY + `&session_id=${localStorage.getItem("session_id")}`)
                .then(res => {
                    setFavoriteMovies(res.data.results.reverse())   
                           
                })
    }, [accountDetail])

    useEffect(() => {
        accountDetail &&
            axios
                .get(BASE_URL + `/account/${accountDetail?.id}/rated/movies?` + API_KEY + `&session_id=${localStorage.getItem("session_id")}`)
                .then(res => {
                    setRatedMovies(res.data.results.reverse())
                })
    }, [accountDetail])



    return (
        <div className='account-detail'>
            <AccountFavoriteMovies favoriteMovies = {favoriteMovies}/>
            <AccountRatedMovies ratedMovies={ratedMovies} />
        </div>
    )
}

export default AccountDetail