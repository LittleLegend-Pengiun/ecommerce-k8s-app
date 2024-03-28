import React, { useState, useEffect } from 'react'
import { Badge, Col} from 'antd';
import { UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import { WrapperAccountHeader,
        WrapperHeader, 
        WrapperTextHeader,
        WrapperTextHeaderSmall,
        WrapperTextListAccountDropdown,
      } 
  from './style';
import SearchInputButton  from '../SearchInputButton/SearchInputButton'
import { useNavigate } from 'react-router-dom';
import { Dropdown,Menu } from 'antd';

const HeaderComponent = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const items = localStorage.getItem('username');
    if (items) {
    setUsername(items);
    }
    console.log(username);
  }, []);
  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate('/sign-in');
  }
  const handleNavigateAccount = () => {
    navigate('/manage-account/:id');
  }
  const handleNavigateOrdered = () => {
    navigate('/manage-order/:id');
  }
  const handleNavigateShoppingCart = () => {
    navigate('/shopping-cart/:id');
  }
  const handleNavigateHome = () => {
    navigate('/');
  }
  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    navigate('/sign-in');
  }
  const AccountOption = (
    <Menu>
      <Menu.Item onClick={handleNavigateAccount}>
        <WrapperTextListAccountDropdown>Tài khoản</WrapperTextListAccountDropdown>
      </Menu.Item>
      <Menu.Item onClick={handleNavigateOrdered}>
        <WrapperTextListAccountDropdown>Quản lý đơn hàng</WrapperTextListAccountDropdown>
      </Menu.Item>
      <Menu.Item onClick={handleLogout}>
        <WrapperTextListAccountDropdown>Đăng xuất</WrapperTextListAccountDropdown>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
            <WrapperTextHeader onClick={handleNavigateHome }>
            BKU-SHOP
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
            <UserOutlined style={{fontSize:'30px'}}/>
        </div>
        <div>
          {username.length > 0 ? (
            <Dropdown overlay={AccountOption} trigger={['hover']}>
            <a onClick={e => e.preventDefault()}>
              <WrapperTextHeaderSmall>{username}</WrapperTextHeaderSmall>
            </a>
          </Dropdown>
          ) : (
            <div>
              <WrapperTextHeaderSmall onClick={handleNavigateSignIn}>
                Đăng nhập
              </WrapperTextHeaderSmall>
            </div>
            )}
        </div>
        </WrapperAccountHeader>
          <div onClick={handleNavigateShoppingCart}>
            <Badge count={5} style={{backgroundColor:'red'}} size='small'>
              <ShoppingCartOutlined style={{fontSize:'30px',color:'white',marginRight:'5px'}}/>
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
