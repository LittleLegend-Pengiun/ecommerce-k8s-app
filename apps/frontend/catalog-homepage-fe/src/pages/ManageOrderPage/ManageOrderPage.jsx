import React from 'react'
import ManageOrderComponent from '../../components/ManageOrderComponent/ManageOrderComponent'
import {RightOutlined } from '@ant-design/icons';
const ManageOrderPage = () => {
  return (
    <div style={{padding:'0 120px'}}>
        <h2>Tài khoản  <span><RightOutlined /></span> Quản lý tài khoản <span><RightOutlined /></span> Lịch sử mua hàng</h2>
        <ManageOrderComponent />
    </div>
  )
}

export default ManageOrderPage