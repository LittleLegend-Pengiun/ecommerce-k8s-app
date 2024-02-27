import React from 'react'
import { Badge, Col} from 'antd';
// import Search from 'antd/lib/input/Search';
import { UserOutlined,DownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperAccountHeader, WrapperHeader, WrapperTextHeader,WrapperTextHeaderSmall } from './style';
import SearchInputButton  from '../SearchInputButton/SearchInputButton'
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
            <WrapperTextHeader>BKU-SHOP</WrapperTextHeader>
        </Col>
        <Col span={12}>
        <SearchInputButton
            placeholder="Nhập từ khoá để tìm kiếm"
            textButton="Tìm kiếm"
            size="large"
        />
        </Col>
        <Col span={6} style={{display:'flex',gap:'16px',alignItems:'center'}}>
        <WrapperAccountHeader>
        <div>
        <UserOutlined style={{fontSize:'30px'}}/>
        </div>
        <div>
            <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
            <div>
            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
            <DownOutlined />
            </div>
        </div>
        </WrapperAccountHeader>
        <div>
          <Badge count={5} style={{backgroundColor:'red'}} size='small'>
            <ShoppingCartOutlined style={{fontSize:'30px',color:'white'}}/>
          </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent