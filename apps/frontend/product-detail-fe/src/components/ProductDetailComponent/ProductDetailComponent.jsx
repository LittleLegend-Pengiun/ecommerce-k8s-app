import React from 'react'
import { Row, Col,Image } from 'antd'
import imageProduct from '../../assets/images/detail/detail-1.webp'
import imageProductSmall_1 from '../../assets/images/detail/small-1.webp'
import imageProductSmall_2 from '../../assets/images/detail/small-2.webp'
import imageProductSmall_3 from '../../assets/images/detail/small-3.webp'
import imageProductSmall_4 from '../../assets/images/detail/small-4.webp'
import imageProductSmall_5 from '../../assets/images/detail/small-5.webp'
import imageColor_vang from '../../assets/images/detail/color-vang.webp'
import imageColor_xanh_duong from '../../assets/images/detail/color-xanh-duong.webp'
import imageColor_xanh_la from '../../assets/images/detail/color-xanh-la.webp'
import imageColor_xam from '../../assets/images/detail/color-xam.webp'
import { 
    WrapperSmallImage,
    WrapperColImage,
    WrapperProductDescription ,
    WrapperTextReport,
    WrapperProductPrice,
    WrapperProductPriceText,
    WrapperAddress,
    WrapperQuantityProduct,
} from './style'
import '../../formater/formater'
import { StarFilled } from '@ant-design/icons'
import {formatPrice} from '../../formater/formater'
import logo from '../../assets/images/slider/logo.png'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponent = () => {
  return (
    <Row style={{padding:'16px',background:'white'}}>
        <Col span={10}>
            <Image src={imageProduct} alt="image-product" preview={false}/>
            <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_1} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_2} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_3} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_4} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_5} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
            </Row>
        </Col>
        <Col span={14}>
            <div>
            <img src={logo} alt="logo" preview={false}
                style={{width:'90px',height:'20px',borderTopLeftRadius:'3px',position:'absolute',top:'-1px',left:'-1px'}}
            />
            </div>
            <WrapperProductDescription>Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng</WrapperProductDescription>
            <span style={{marginRight:'10px'}}>
              <WrapperTextReport style={{marginRight:'6px'}}>5.0</WrapperTextReport>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
              <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
          </span>
          <WrapperTextReport>(60) | Đã bán 102</WrapperTextReport>
            <WrapperProductPrice>
                <WrapperProductPriceText>{formatPrice(2500000)}</WrapperProductPriceText>
            </WrapperProductPrice>
          <div>
            <span style={{fontSize:'18px'}}>Màu</span>
            <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                <WrapperColImage span={4} style={{border:'2px solid #008477'}}> 
                    <WrapperSmallImage src={imageColor_vang} alt="image-color" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4} style={{border:'1px solid #efefef'}}> 
                    <WrapperSmallImage src={imageColor_xanh_duong} alt="image-color" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4} style={{border:'1px solid #efefef'}}> 
                    <WrapperSmallImage src={imageColor_xanh_la} alt="image-color" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4} style={{border:'1px solid #efefef'}}> 
                    <WrapperSmallImage src={imageColor_xam} alt="image-color" preview={false}/> 
                </WrapperColImage>
            </Row>
          </div>
            <WrapperAddress>
                <p>Thông tin vận chuyển</p>
                <span style={{paddingLeft:'10px'}}>Giao đến </span>
                <span className="address">268 Phường 14 Quận 10 - TP Hồ Chí Minh </span>
                <span className="change-address"> Đổi địa chỉ</span>
            </WrapperAddress>
            <WrapperQuantityProduct>
                <div>Số lượng</div>
                <div>
                    <ButtonComponent type='primary' style={{marginRight:'10px'}}>-</ButtonComponent>
                    <span>1</span>
                    <ButtonComponent type='primary' style={{marginLeft:'10px'}}>+</ButtonComponent>
                </div>
            </WrapperQuantityProduct>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent