import React from 'react'
import {
    WrapperInputFiled,
    WrapperTitle,
    WrapperForm,
    WrapperButton,
  } from './style'
const RetrivePasswordCompoennt= () => {
  return (
    <center style={{height:'100%'}}>
          <WrapperForm action="#">
            <WrapperTitle>Khôi phục mật khẩu</WrapperTitle>
            <p>Mật khẩu mới sẽ được gửi đến emaill của bạn</p>
            <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Email" 
            />
            <WrapperButton
            size="large"
            textButton="Khôi phục"
          />
          </WrapperForm>
        </center>   
  )
}

export default RetrivePasswordCompoennt