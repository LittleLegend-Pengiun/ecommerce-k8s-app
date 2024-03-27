import React from 'react'
import logo from '../../assets/images/slider/logo.png'
import { 
    StyleNameProduct,
    WrapperReportText,
    WrapperPriceText,
    WrapperCardStyle,
    WrapperText,
} from './style';
import { StarFilled } from '@ant-design/icons';
const CardComponent = (props) => {
  const {productName,productImg,productPrice,soldQuantity}=props
  return (
    <WrapperCardStyle
    hoverable
    style={{ width: 240 }}
    bodytyle={{padding:'10px'}}
    cover={<img alt="example" src={productImg}/>}
  >
    <img src={logo} alt="logo" preview="false"
    style={{width:'90px',height:'20px',borderTopLeftRadius:'3px',position:'absolute',top:'-1px',left:'-1px'}}
    />
    <WrapperText>
      <StyleNameProduct>{productName}</StyleNameProduct>
      <WrapperReportText>
          <span>
              <span style={{marginRight:'6px'}}>4.96</span>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
          </span>
          <span>Đã bán {soldQuantity}</span>
      </WrapperReportText>
    </WrapperText>
    <WrapperPriceText>
        {productPrice}
    </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent