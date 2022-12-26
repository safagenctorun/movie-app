import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { SESSION_URL } from '../config/Urls';
const Approved = () => {
    const [requestToken, setRequestToken] = useState<string>("")

    const location = useLocation();


    useEffect(() => {

        setRequestToken(location.search.split("=")[1].split("&")[0])

        if (requestToken !== "") {

            axios.post(SESSION_URL,
                { request_token: requestToken }).then(res => console.log(res.data.session_id))
        }

    }, [requestToken])
    return (
        <div>
            <span>safa</span>
            <p>safa</p>
            <p>safa</p>
            <p>safa</p>
            <p>safa</p>
            <p>safa</p>
            <p>safa</p>
            <p>safa</p>
            <span>safa</span>
        </div>
    )
}

export default Approved