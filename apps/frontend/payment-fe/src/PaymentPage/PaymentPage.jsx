import React from 'react'
import PaymentComponent from '../components/PaymentComponent/PaymentComponent';
import {RightOutlined } from '@ant-design/icons';
const PaymentPage = () => {
  return (
    <div style={{padding:'0 200px',backgroundColor:'#efefef'}}>
      <h2>Trang chủ <span><RightOutlined /></span> Giỏ hàng <span><RightOutlined /></span>Thanh toán</h2>
      <PaymentComponent />
    </div>
  )
}
export default PaymentPage