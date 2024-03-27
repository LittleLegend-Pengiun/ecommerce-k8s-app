import React from 'react'
import { useNavigate } from 'react-router-dom';
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
import { Form } from 'antd';
import axios from 'axios';


const LoginFormComponent = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    const username = values.email;
    const password = values.password;
    // console.log(values);
    try {
      const res = await axios.post('http://localhost:8081/login', {
        username: username,
        password: password,
      });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);
        console.log('Success:', values);
        navigate('/');
      }
      else {
        alert('Failed:' + values);
      }
    }
    catch (error) {
      console.error(error.message);
    }
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <center style={{height:'100%'}}>
          <WrapperForm 
            name="login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <WrapperTitle>Chào mừng đến với BKU SHOP </WrapperTitle>
            <p>Đăng nhập tài khoản của bạn</p>
            <Form.Item
              name="email"
              rules=
                {[
                  {
                  required: true,
                  message: 'Vui lòng nhập email hoặc số điện thoại!',
                  },
                ]}
            >
              <WrapperInputFiled
                  type="text"
                  size="large"
                  placeholder="Email hoặc số điện thoại" 
              />
            </Form.Item>
            <Form.Item
            name="password"
            rules=
              {[
                {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
                },
              ]}
            >
            <WrapperInputFiled
            type="password"
            size="large"
            placeholder="Mật khẩu" 
            />
            </Form.Item>
              <WrapperMoreAction>
              <Form.Item
              name="remember"
              valuePropName="checked"
              >
              <WrappperRemember>
                  <label>Nhớ tài khoản</label>
              </WrappperRemember>
              </Form.Item>

              <Form.Item>
              <WrapperForgotPassword>
                  <a href="/forgot-password">Quên mật khẩu?</a>
              </WrapperForgotPassword>
              </Form.Item>
              
            </WrapperMoreAction>

            <Form.Item
            >
            <WrapperButton
            size="large"
            textButton="Đăng nhập"
            type="primary"
            htmlType="submit"
          />
            </Form.Item>
          <WrrapperNavigateSignUp>
            <span>Bạn chưa có tài khoản?</span>
            <a href="/sign-up">Đăng ký</a>
          </WrrapperNavigateSignUp>
          </WrapperForm>
        </center>
  )
}

export default LoginFormComponent