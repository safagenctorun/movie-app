import React, { useContext, useEffect, useState } from 'react'
import "./Nav.scss"
import { Button} from 'antd'
import { Context } from "../../context/GlobalContext";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate= useNavigate()
    const [isLogin, setisLogin] = useState(false)
    const { isVideoOpen } = useContext(Context)

    const loginHandler = () => {
        navigate("/login")
    }
    const logoutHandler = () => {
        localStorage.removeItem("session_id")
        navigate("/")

    }

    useEffect(() => {
        if (localStorage.getItem("session_id"))
            setisLogin(true)
        else
            setisLogin(false)
    }, [])

    const changePageToAccountDetail = () => {
        navigate("/accountdetail")
    }

    return (
        <nav >
            <div className='nav' style={{ display: isVideoOpen === false ? "flex" : "none" }} >

                <Link className='link' to="/"><h2>Mainpage</h2></Link>

                <div className="movies">
                    <Link className='link' to='/moviefilter'>Movies</Link>
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