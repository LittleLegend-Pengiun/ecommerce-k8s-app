import React from 'react'
import {RightOutlined } from '@ant-design/icons';
import ManageAccountComponent from './../../components/ManageAccountComponent/ManageAccountComponent';
const ManageAccountPage = () => {
  return (
    <div style={{padding:'0 200px'}}>
        <h2>Tài khoản  <span><RightOutlined /></span> Quản lý tài khoản <span><RightOutlined /></span> Thông tin tài khoản</h2>
        <ManageAccountComponent/>
    </div>
  )
}

export default ManageAccountPage