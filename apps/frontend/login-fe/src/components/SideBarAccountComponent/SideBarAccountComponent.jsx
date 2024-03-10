import React from 'react'
import accountLogo from '../../assets/images/account/account-logo.png'
import {
    WrapperUl,
    WrapperLi,
} from './style.js'
const SideBarAccountComponent = () => {
  return (
    <div>
        <div style={{border:'1px solid #e5e5e5',padding:'20px 0',textAlign:'center'}}>
            <img src={accountLogo} alt="avatar" style={{borderRadius:'50%',width:'150px',height:'auto'}}/>
            <p style={{fontSize:'20px',fontWeight:'500',marginTop:'10px'}}>Nguyễn Văn A</p>
        </div>
        <div style={{marginTop:'20px'}}>
            <h1>Tài khoản của tôi</h1>
            <WrapperUl style={{listStyle:'none',padding:'0'}}>
                <WrapperLi>Thông tin tài khoản</WrapperLi>
                <WrapperLi style={{color:'#008477',fontWeight:'500'}}>Lịch sử mua hàng</WrapperLi>
                <WrapperLi>Đăng xuất</WrapperLi>
            </WrapperUl>
        </div>
    </div>
  )
}

export default SideBarAccountComponent