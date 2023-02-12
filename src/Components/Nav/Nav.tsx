import React, { useContext, useEffect, useState } from 'react'
import "./Nav.scss"
import { Button} from 'antd'
import { Context } from "../../context/GlobalContext";

const Nav = () => {
    const [isLogin, setisLogin] = useState(false)
    const { isVideoOpen } = useContext(Context)

    const loginHandler = () => {
        window.location.replace("/login")
    }
    const logoutHandler = () => {
        localStorage.removeItem("session_id")
        window.location.replace("/")

    }

    useEffect(() => {
        if (localStorage.getItem("session_id"))
            setisLogin(true)
        else
            setisLogin(false)
    }, [])

    const changePageToAccountDetail = () => {
        window.location.replace("/accountdetail")   
    }

    return (
        <nav >
            <div className='nav' style={{ display: isVideoOpen === false ? "flex" : "none" }} >

                <div className="main-page">
                    <a href="http://localhost:3000/"><h2>Mainpage</h2></a>
                </div>

                <div className="movies">
                    <a href='http://localhost:3000/moviefilter'>Movies</a>
                </div>
                <div className="log-in-out">
                    <Button style={{ display: isLogin === false ? "flex" : "none", backgroundColor: "green" }} type="primary" onClick={loginHandler}>Login</Button>
                    <Button style={{ display: isLogin === true ? "flex" : "none" , backgroundColor: "blue"}} type="primary" danger onClick={changePageToAccountDetail}>Account Detail</Button>
                    <Button style={{ display: isLogin === true ? "flex" : "none" }} type="primary" danger onClick={logoutHandler}>Logout</Button>
                </div>
            </div>
        </nav>
    )
}

export default Nav