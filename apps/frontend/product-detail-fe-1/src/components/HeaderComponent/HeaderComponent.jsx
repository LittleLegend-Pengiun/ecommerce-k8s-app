import React from 'react'
import { Col} from 'antd';
import Search from 'antd/lib/input/Search';
import { UserOutlined,DownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperAccountHeader, WrapperHeader, WrapperTextHeader,WrapperTextHeaderSmall } from './style';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
            <WrapperTextHeader>BKU-SHOP</WrapperTextHeader>
        </Col>
        <Col span={12}>
        <Search
            placeholder="input search text"
            allowClear
            size="large"
        />
        </Col>
        <Col span={6} style={{display:'flex',gap:'16px'}}>
        <WrapperAccountHeader>
        <div>
        <UserOutlined style={{fontSize:'30px'}}/>
        </div>
        <div>
            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
            <div>
            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
            <DownOutlined />
            </div>
        </div>
        </WrapperAccountHeader>
        <div>
            <ShoppingCartOutlined style={{fontSize:'30px',color:'white'}}/>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent