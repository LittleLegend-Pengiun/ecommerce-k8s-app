
import React from 'react'
import { Row, Col } from 'antd'
import mainLogo from '../../assets/images/main/logo.jpg'
import {
  WrapperInputFiled,
  WrapperTitle,
  WrapperForm,
  WrapperButton,
  WrrapperNavigateSignUp,
  WrapperForgotPassword,
} from './style'
const SignInPage = () => {
  return (
    <div>
      <Row style={{marginTop:'60px'}}>
      <Col span={12}>
        <center style={{height:'100%'}}>
          <WrapperForm action="#" style={{padding:'20px'}}>
            <WrapperTitle>Chào mừng đến với BKU SHOP </WrapperTitle>
            <p>Đăng nhập tài khoản của bạn</p>
            <WrapperInputFiled
              size="large"
              placeholder="Email hoặc số điện thoại" 
            />
            <WrapperInputFiled
            size="large"
            placeholder="Mật khẩu" 
            />
            <WrapperButton
            size="large"
            textButton="Đăng nhập"
          />
          <WrrapperNavigateSignUp>
            <span>Bạn chưa có tài khoản?</span>
            <a href="/sign-up">Đăng ký</a>
          </WrrapperNavigateSignUp>
          <WrapperForgotPassword>
            <a href="/forgot-password">Quên mật khẩu?</a>
          </WrapperForgotPassword>
          </WrapperForm>
        </center>
      </Col>
      <Col span={12} style={{alignContent:'center'}}>
        <center><img src={mainLogo} alt="mainLogo" style={{width:'500px',height:'500px'}}/></center>
      </Col>
    </Row>
    </div>
  )
}

export default SignInPage
