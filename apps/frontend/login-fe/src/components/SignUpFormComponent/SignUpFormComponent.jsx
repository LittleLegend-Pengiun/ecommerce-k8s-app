import React from 'react'
import {
    WrapperInputFiled,
    WrapperTitle,
    WrapperForm,
    WrapperButton,
    WrrapperNavigateSignIn,
    WrappperAcceptPolicy,
  } from './style'
const SignUpFormComponent = () => {
  return (
    <center style={{height:'100%'}}>
          <WrapperForm action="POST">
            <WrapperTitle>Đăng ký tài khoản để trải nghiệm tất cả các tính năng của BKU SHOP</WrapperTitle>
            <p>Nhập các thông tin bên dưới</p>
            {/* <span style={{color:'red'}}>(*) Bắt buộc</span> */}
            <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Tên đầy đủ" 
            />
            <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Email" 
            />
            <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Số điện thoại" 
            />
            <WrapperInputFiled
            type="password"
            size="large"
            placeholder="Mật khẩu" 
            />
            <WrapperInputFiled
            type="password"
            size="large"
            placeholder="Xác nhận mật khẩu" 
            />
             <WrappperAcceptPolicy>
                <input type="checkbox" id="accept-policy" name="accept-policy" value="accept-policy"/>
                <label htmlFor="accept-policy">Đồng ý các điều khoản</label>
                <a href="#">Điều khoản</a>
            </WrappperAcceptPolicy>
            <WrapperButton
            size="large"
            textButton="Đăng ký tài khoản"
            htmlType="submit"
            />     
          <WrrapperNavigateSignIn>
            <span>Bạn đã có tài khoản?</span>
            <a href="/sign-in">Đăng nhập</a>
          </WrrapperNavigateSignIn>
          </WrapperForm>
        </center>
  )
}

export default SignUpFormComponent