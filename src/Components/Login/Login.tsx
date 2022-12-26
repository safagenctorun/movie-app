import React, { useEffect, useState, useMemo } from 'react'
import { LOGIN_URL, REQUEST_TOKEN_URL, SESSION_URL } from '../../config/Urls'
import axios from 'axios'
import { Button, Form, Input, message } from 'antd'


const Login = () => {


    // useEffect(() => {
        const requestTokenHandler = () => {

            axios.get(REQUEST_TOKEN_URL).then(res => {
                
    
                if(res.data.request_token !== ""){
                    window.open(
                        `https://www.themoviedb.org/authenticate/${res.data.request_token}?redirect_to=http://localhost:3000/approved`,
    
                      );
                  }
            })
        }


    // }, [])

    
    // const login = (values: any) => {
    //     axios.post(LOGIN_URL,
    //         {
    //             request_token: requestToken,
    //             username: values.userNameOrEmailAddress,
    //             password: values.password
    //         }
    //     ).then(res=>{
    //         if(res.status===200){
    //             console.log(res);

    //             //   localStorage.setItem("Authorization", res.data.result.accessToken)
    //         //   window.location.replace("/")
    //         }
    //       }).catch((res)=>{
    //         if(res.status!==200)
    //         alert("Giriş başarısız!")});

    // }

    return (
        <div className='login'>
            <button onClick={requestTokenHandler}>Token al</button>
            <div className='login-section'>


                {/* <Form
                    className='formLogin'
                    name="basic"
                    layout="vertical"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={login}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Kullanıcı Adı"
                        name="userNameOrEmailAddress"
                        requiredMark='optional'
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen kullanıcı adınızı giriniz!',
                            },
                        ]}
                    >
                        <Input className='inputLogin' />
                    </Form.Item>

                    <Form.Item
                        label="Şifre"
                        name="password"
                        requiredMark='optional'
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifrenizi giriniz!',
                            },
                        ]}
                    >
                        <Input.Password className='inputLogin' />
                    </Form.Item>

                    <Form.Item
                        className='formButtonSection'
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}
                    >
                        <Button className='formButtonLogin' type="primary" htmlType="submit">
                            Giriş Yap
                        </Button>
                    </Form.Item>
                </Form>*/}

            </div> 
        </div>
    )
}

export default Login