import React from 'react'
import SideBarAccountComponent from './../SideBarAccountComponent/SideBarAccountComponent';
import {
    WrapperConfirmButton,
    WrapperCancelButton,
    WrapperInputAccount,
} from './style.js'
import { Col} from 'antd';
const ManageAccountComponent = () => {
  return (
    <div style={{display:'flex'}}>
    <Col span={6}>
        <SideBarAccountComponent />
    </Col>
    <Col span={18} style={{marginLeft:'60px'}}>
        <div style={{display:'block'}}>
            <WrapperInputAccount
            label="Tên đầy đủ" 
            size="large" 
            value="Nguyễn Văn A"
            />
            <WrapperInputAccount
            label="Email" 
            size="large" 
            value="nva@gmail.com"
            />
            <WrapperInputAccount
            label="Địa chỉ giao hàng" 
            size="large" 
            value="268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM"
            />
            <div>
                <WrapperInputAccount
                label="Thay đổi mật khẩu"
                placeholder="Nhập mật khẩu cũ"
                type="password"
                size="large" 
                />
                <div style={{display:'flex',gap:'30px',width:'100%'}}>
                    <WrapperInputAccount
                    placeholder="Nhập mật khẩu mới"
                    type="password"
                    size="large"   
                    style={{width:'250px'}}
                    />
                    <WrapperInputAccount
                    placeholder="Nhập lại mật khẩu mới"
                    type="password"
                    size="large"    
                    style={{width:'250px'}}
                    />
                </div>
            </div>
            <div style={{display:'flex'}}>
                <WrapperCancelButton
                size="large"
                textButton="Huỷ thay đổi"
                type="default"
                htmlType="submit"
                style={{width:'250px'}}
                />
                <WrapperConfirmButton
                size="large"
                textButton="Lưu thay đổi"
                type="primary"
                htmlType="submit"
                style={{width:'250px'}}
                />
            </div>
        </div>
    </Col>
</div>
  )
}

export default ManageAccountComponent