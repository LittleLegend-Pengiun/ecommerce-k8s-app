import React from 'react'
import { Badge, Col} from 'antd';
import { UserOutlined,DownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperAccountHeader,
        WrapperHeader, 
        WrapperTextHeader,
        WrapperTextHeaderSmall,
        WrapperLink } 
  from './style';
import SearchInputButton  from '../SearchInputButton/SearchInputButton'
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
            <WrapperTextHeader>
              <WrapperLink to="/">BKU-SHOP</WrapperLink>
              </WrapperTextHeader>
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
          <WrapperLink to="/manage-account/:id">
            <UserOutlined style={{fontSize:'30px'}}/>
          </WrapperLink>
        </div>
        <div>
            <WrapperTextHeaderSmall>
              <WrapperLink to="/sign-in">Đăng nhập</WrapperLink>
              <span> | </span> 
              <WrapperLink to="/sign-up">Đăng ký</WrapperLink>
            </WrapperTextHeaderSmall>
            <div>
            <WrapperTextHeaderSmall>
              <WrapperLink to="/manage-account/:id">Tài khoản</WrapperLink>
            </WrapperTextHeaderSmall>
            <DownOutlined />
            </div>
        </div>
        </WrapperAccountHeader>
          <WrapperLink to="/shopping-cart/:id">
            <Badge count={5} style={{backgroundColor:'red'}} size='small'>
              <ShoppingCartOutlined style={{fontSize:'30px',color:'white',marginRight:'5px'}}/>
            </Badge>
              <WrapperTextHeaderSmall>
                Giỏ hàng
              </WrapperTextHeaderSmall>
          </WrapperLink>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
