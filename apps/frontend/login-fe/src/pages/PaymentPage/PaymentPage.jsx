import React from 'react'
import PaymentComponent from '../../components/PaymentComponent/PaymentComponent';
import {RightOutlined } from '@ant-design/icons';
const PaymentPage = () => {
  return (
    <div style={{padding:'0 200px',height:'1000px',backgroundColor:'#efefef'}}>
      <p style={{fontSize:'20px',fontWeight:'500'}}>Trang chủ <span><RightOutlined /></span> Giỏ hàng <span><RightOutlined /></span>Thanh toán</p>
      <PaymentComponent />
    </div>
  )
}
export default PaymentPage