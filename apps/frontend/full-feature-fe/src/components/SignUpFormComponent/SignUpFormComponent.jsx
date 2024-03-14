import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    WrapperInputFiled,
    WrapperTitle,
    WrapperForm,
    WrapperButton,
    WrrapperNavigateSignIn,
    WrappperAcceptPolicy,
  } from './style'
import {Form } from 'antd';

const SignUpFormComponent = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/sign-in');
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <center style={{height:'100%'}}>
          <WrapperForm 
              name="register"
              initialValues=
              {{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
            <WrapperTitle>Đăng ký tài khoản để trải nghiệm tất cả các tính năng của BKU SHOP</WrapperTitle>
            <p>Nhập các thông tin bên dưới</p>
            {/* <span style={{color:'red'}}>(*) Bắt buộc</span> */}
            <Form.Item
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập tên đầy đủ',
                    },
                ]}
            >
            <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Tên đầy đủ" 
            />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Email không hợp lệ',
                    },
                    {
                        required: true,
                        message: 'Vui lòng nhập email',
                    },
                ]}
            >
              <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Email" 
              />
            </Form.Item>
            <Form.Item
                name="phone"
                rules={[
                    {
                        type: 'string',
                        message: 'Số điện thoại không hợp lệ',
                    },
                    {
                        required: true,
                        message: 'Vui lòng nhập số điện thoại',
                    },
                ]}
            >
               <WrapperInputFiled
                type="text"
                size="large"
                placeholder="Số điện thoại" 
              />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu',
                    },
                //     {
                //         pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //         message:
                //             'Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm ít nhất một chữ hoa, một chữ thường, một chữ số và một kí tự đặc biệt',
                //     },
                 ]}
            >
            <WrapperInputFiled
                type="password"
                size="large"
                placeholder="Mật khẩu" 
            />
            </Form.Item>
            <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng xác nhận mật khẩu',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Mật khẩu không trùng khớp');
                        },
                    }),
                ]}
            >
            <WrapperInputFiled
                type="password"
                size="large"
                placeholder="Xác nhận mật khẩu" 
            />
            </Form.Item>
            <Form.Item
                name="acceptPolicy"
                valuePropName="checked"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng đồng ý với điều khoản',
                    },
                ]}
            >
            <WrappperAcceptPolicy>
                <label>Đồng ý các điều khoản</label>
                <a href="#">Điều khoản</a>
            </WrappperAcceptPolicy>
            </Form.Item>
            <Form.Item>
            <WrapperButton
            size="large"
            textButton="Đăng ký tài khoản"
            type="primary"
            htmlType="submit"
            />  
            </Form.Item>   
          <WrrapperNavigateSignIn>
            <span>Bạn đã có tài khoản?</span>
            <a href="/sign-in">Đăng nhập</a>
          </WrrapperNavigateSignIn>
          </WrapperForm>
        </center>
  )
}

export default SignUpFormComponent