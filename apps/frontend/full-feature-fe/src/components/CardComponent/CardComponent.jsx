import React from 'react'
import { Card,Image } from 'antd';
import logo from '../../assets/images/slider/logo.png'
import { 
    StyleNameProduct,
    WrapperReportText,
    WrapperPriceText,
    // WrapperDiscountText,
    WrapperCardStyle,
    WrapperText,
    // WrapperImageStyle
} from './style';
import { StarFilled } from '@ant-design/icons';
const CardComponent = (props) => {
  const {productName,productImg,productPrice}=props
  return (
    <WrapperCardStyle
    hoverable
    style={{ width: 240 }}
    bodytyle={{padding:'10px'}}
    cover={<img alt="example" src={productImg}/>}
  >
    <img src={logo} alt="logo" preview={false}
    style={{width:'90px',height:'20px',borderTopLeftRadius:'3px',position:'absolute',top:'-1px',left:'-1px'}}
    />
    <WrapperText>
      <StyleNameProduct>{productName}</StyleNameProduct>
      <WrapperReportText>
          <span>
              <span style={{marginRight:'6px'}}>4.96</span>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
          </span>
          <span>Đã bán 1000+</span>
      </WrapperReportText>
    </WrapperText>
    <WrapperPriceText>
        {productPrice}
        {/* <WrapperDiscountText>-5%</WrapperDiscountText> */}
    </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent