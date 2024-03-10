import React from 'react'
import ShoppingCartComponent from '../components/ShoppingCartComponent/ShoppingCartComponent'
import {RightOutlined } from '@ant-design/icons';
const ShoppingCartPage = () => {
  return (
    <div style={{padding:'0 200px',background:'#efefef'}}>
      <p style={{fontSize:'20px',fontWeight:'500'}}>Trang chủ <span><RightOutlined /></span> Giỏ hàng</p>
      <ShoppingCartComponent/>
    </div>
  )
}
export default ShoppingCartPage