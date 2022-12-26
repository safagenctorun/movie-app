import React from 'react'
import "./Nav.scss"
import { Button } from 'antd'
const Nav = () => {

    const changePage = () => {
        window.location.replace("/login/*")
    }

    return (
        <nav >
            <div className='nav' >

                <div className="main-page">
                  <a href="http://localhost:3000/"><h2>MainPage</h2></a>  
                </div>

                <div className="movies">
                    <p>Movies</p>
                </div>
                <div className="log-in-out">
                    <Button type="primary" danger onClick={changePage}>Login</Button>
                </div>
            </div>

        </nav>
    )
}

export default Nav