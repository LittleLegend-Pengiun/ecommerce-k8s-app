import React from 'react'
import accountLogo from '../../assets/images/account/account-logo.png'
import {
    WrapperUl,
    WrapperLi,
    WrapperLink,
} from './style.js'
import { useNavigate } from 'react-router-dom'
const SideBarAccountComponent = () => {
    const navigate = useNavigate();
    const handleNavigateAccount = () => {
        navigate('/manage-account/:id');
    }
    const handleNavigateOrdered = () => {
        navigate('/manage-order/:id');
    }
  return (
    <div>
        <div style={{border:'1px solid #e5e5e5',padding:'20px 0',textAlign:'center',backgroundColor:'white'}}>
            <img src={accountLogo} alt="avatar" style={{borderRadius:'50%',width:'150px',height:'auto'}}/>
            <p style={{fontSize:'20px',fontWeight:'500',marginTop:'10px'}}>Nguyễn Văn A</p>
        </div>
        <div style={{marginTop:'20px'}}>
            <WrapperUl style={{listStyle:'none',padding:'0'}}>
                <WrapperLink onClick={handleNavigateAccount}>
                    <WrapperLi>Thông tin tài khoản</WrapperLi>
                </WrapperLink>
                <WrapperLink onClick={handleNavigateOrdered}>
                    <WrapperLi>Lịch sử mua hàng</WrapperLi>
                </WrapperLink>
            </WrapperUl>
        </div>
    </div>
  )
}

export default SideBarAccountComponent