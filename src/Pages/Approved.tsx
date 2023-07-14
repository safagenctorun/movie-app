import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SESSION_URL } from '../config/Urls';
const Approved = () => {
    const [requestToken, setRequestToken] = useState<string>("")

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        setRequestToken(location.search.split("=")[1].split("&")[0])

        if (requestToken !== "") {

            axios.post(SESSION_URL,
                { request_token: requestToken }).then(res =>{
                    if (res.status === 200){
                        localStorage.setItem("session_id", res.data.session_id) 
                        
                        
                    }
                }).then(res =>{
                    navigate(`/`)
                })
        }

    }, [requestToken])
    return (
        <div >
            

        </div>
    )
}

export default Approved