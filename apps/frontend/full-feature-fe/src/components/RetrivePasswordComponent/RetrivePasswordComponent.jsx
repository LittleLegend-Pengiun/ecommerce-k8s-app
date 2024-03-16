import React from 'react'
import {Form} from 'antd'
import { useNavigate } from 'react-router-dom'
import {
    WrapperInputFiled,
    WrapperTitle,
    WrapperForm,
    WrapperButton,
  } from './style'
const RetrivePasswordCompoennt= () => {
  const navigate = useNavigate()
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
          name="retrivepassword"
          initialValues=
          {{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"  
          >
            <WrapperTitle>Khôi phục mật khẩu</WrapperTitle>
            <p>Mật khẩu mới sẽ được gửi đến emaill của bạn</p>
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
                  type="email"
                  size="large"
                  placeholder="Email" 
              />
            </Form.Item>
            <Form.Item>
              <WrapperButton
              size="large"
              textButton="Khôi phục"
              type="primary"
              htmlType="submit"
              />
            </Form.Item>
          </WrapperForm>
        </center>   
  )
}

export default RetrivePasswordCompoennt