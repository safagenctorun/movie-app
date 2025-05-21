import React, { useContext, useEffect, useState } from 'react';
import './Nav.scss';
import { Button } from 'antd';
import { Context } from '../../context/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { REQUEST_TOKEN_URL } from '../../config/Urls';

const Nav = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);
  const { isVideoOpen } = useContext(Context);

  const protocol = window.location.protocol;
  const host = window.location.host;

  const requestTokenHandler = () => {
    axios.get(REQUEST_TOKEN_URL).then((res) => {
      if (res.data.request_token !== '') {
        window.open(
          `https://www.themoviedb.org/authenticate/${res.data.request_token}?redirect_to=${protocol}//${host}/approved`
        );
      }
    });
  };
  const logoutHandler = () => {
    localStorage.removeItem('session_id');
    setisLogin(false);
    navigate('/');
  };

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('session_id')) setisLogin(true);
      else setisLogin(false);
    }, 300);
  }, []);

  const changePageToAccountDetail = () => {
    navigate('/accountdetail');
  };

  return (
    <nav>
      <div className="nav" style={{ display: isVideoOpen === false ? 'flex' : 'none' }}>
        <Link className="link" to="/">
          <h2>CineCenter</h2>
        </Link>

        <div className="movies">
          <Link className="link" to="/moviefilter">
            Filmler
          </Link>
        </div>
        <div className="log-in-out">
          <Button
            style={{
              display: isLogin === false ? 'flex' : 'none',
              backgroundColor: 'green',
            }}
            type="primary"
            onClick={requestTokenHandler}
          >
            Giriş Yap
          </Button>
          <Button
            style={{
              display: isLogin === true ? 'flex' : 'none',
              backgroundColor: 'blue',
            }}
            type="primary"
            danger
            onClick={changePageToAccountDetail}
          >
            Hesap Detayları
          </Button>
          <Button
            style={{ display: isLogin === true ? 'flex' : 'none' }}
            type="primary"
            danger
            onClick={logoutHandler}
          >
            Çıkış Yap
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
