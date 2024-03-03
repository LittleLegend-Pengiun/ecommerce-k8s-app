import React from 'react'
import {
    WrapperInputFiled,
    WrapperTitle,
    WrapperForm,
    WrapperButton,
    WrrapperNavigateSignUp,
    WrapperForgotPassword,
    WrappperRemember,
    WrapperMoreAction,
  } from './style'
const LoginFormComponent = () => {
  return (
    <center style={{height:'100%'}}>
          <WrapperForm action="#">
            <WrapperTitle>Chào mừng đến với BKU SHOP </WrapperTitle>
            <p>Đăng nhập tài khoản của bạn</p>
            <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Email hoặc số điện thoại" 
            />
            <WrapperInputFiled
            type="password"
            size="large"
            placeholder="Mật khẩu" 
            />
            <WrapperButton
            size="large"
            textButton="Đăng nhập"
          />
          <WrapperMoreAction>
            <WrappperRemember>
                <input type="checkbox" id="remember" name="remember" value="remember"/>
                <label htmlFor="remember">Nhớ tài khoản</label>
            </WrappperRemember>
            <WrapperForgotPassword>
                <a href="/forgot-password">Quên mật khẩu?</a>
            </WrapperForgotPassword>
          </WrapperMoreAction>
          <WrrapperNavigateSignUp>
            <span>Bạn chưa có tài khoản?</span>
            <a href="/sign-up">Đăng ký</a>
          </WrrapperNavigateSignUp>
          </WrapperForm>
        </center>
  )
}

export default LoginFormComponent