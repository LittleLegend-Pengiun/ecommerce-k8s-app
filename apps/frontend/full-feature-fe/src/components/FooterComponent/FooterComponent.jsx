import React from 'react'
import { Col } from 'antd';
import { WrapperLi,
        WrapperUl,
        WrapperInput,
        WrapperButton
} from './style';
const FooterComponent = () => {
  return (
        <div style={{display:'flex',justifyContent:'space-around',padding:'40px',backgroundColor:'#008477',color:'white',marginTop:'40px'}}>
            <Col>
                <h1>BKU-SHOP</h1>
            </Col>
            <Col>
            <WrapperUl>
                <WrapperLi>Địa chỉ: 268 Lý Thường Kiệt</WrapperLi>
                <WrapperLi>Điện thoại: 0123 456 789</WrapperLi>
                <WrapperLi>Email:bku-shop@hcmut.edu.vn</WrapperLi>
            </WrapperUl>
            </Col>
            <Col>           
            <WrapperUl>
                <WrapperLi>Liên hệ</WrapperLi>
                <WrapperLi>Thông tin về chúng tôi</WrapperLi>
                <WrapperLi>Sản phẩm kinh doanh</WrapperLi>
            </WrapperUl>
            </Col>
            <Col>
                <WrapperUl>
                    <WrapperLi>Khuyến mãi & ưu đãi</WrapperLi>
                    <WrapperLi>Đăng ký nhận thông tin tại đây</WrapperLi>
                    <WrapperLi>
                    <div style={{display:'flex'}}>
                    <WrapperInput
                        placeholder="Nhập email của bạn"
                        type="text"
                        size="large"
                    />
                    <WrapperButton
                        type="primary" 
                        text="Đăng ký" 
                        htmlType="submit"
                        size="large"
                        textButton="Đăng ký"
                    />
                    </div>
                    </WrapperLi>
                </WrapperUl>
            </Col>
        </div>
  )
}

export default FooterComponent