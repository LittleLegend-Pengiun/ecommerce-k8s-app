import React from 'react'
import accountLogo from '../../assets/images/account/account-logo.png'
import {
    WrapperUl,
    WrapperLi,
    WrapperLink,
} from './style.js'
const SideBarAccountComponent = () => {
  return (
    <div>
        <div style={{border:'1px solid #e5e5e5',padding:'20px 0',textAlign:'center',backgroundColor:'white'}}>
            <img src={accountLogo} alt="avatar" style={{borderRadius:'50%',width:'150px',height:'auto'}}/>
            <p style={{fontSize:'20px',fontWeight:'500',marginTop:'10px'}}>Nguyễn Văn A</p>
        </div>
        <div style={{marginTop:'20px'}}>
            {/* <h1>Tài khoản của tôi</h1> */}
            <WrapperUl style={{listStyle:'none',padding:'0'}}>
                <WrapperLink to="/manage-account/:id">
                    <WrapperLi>Thông tin tài khoản</WrapperLi>
                </WrapperLink>
                <WrapperLink to="/manage-order/:id">
                    <WrapperLi>Lịch sử mua hàng</WrapperLi>
                </WrapperLink>
                <WrapperLink to="/sign-in">
                <WrapperLi>Đăng xuất</WrapperLi>
                </WrapperLink>
            </WrapperUl>
        </div>
    </div>
  )
}

export default SideBarAccountComponent