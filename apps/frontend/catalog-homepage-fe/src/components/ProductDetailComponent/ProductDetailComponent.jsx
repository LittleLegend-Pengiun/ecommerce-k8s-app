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
    WrapperInputQuantity,
    WrapperButtonQuantity,
    WrapperButton,
    WrapperBuyButton,
    WrapperAddCartButton,
} from './style'
import '../../formater/formater'
import { StarFilled ,PlusOutlined,MinusOutlined } from '@ant-design/icons'
import {formatPrice} from '../../formater/formater'
import logo from '../../assets/images/slider/logo.png'
// import ButtonComponent from '../ButtonComponent/ButtonComponent'
// import InputComponent from '../InputComponent/InputComponent'
const ProductDetailComponent = () => {
    const onChange = () => { }
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
        <Col span={14} style={{paddingLeft:'30px'}}>
            <img src={logo} alt="logo" preview={false}
                style={{width:'90px',height:'20px',borderTopLeftRadius:'3px'}}
            />
            <WrapperProductDescription>Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng </WrapperProductDescription>
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
            <div style={{marginBottom:'10px',fontSize:'20px',fontWeight:'500'}}>Số lượng</div>
            <div style={{display:'flex'}}>
                    <WrapperQuantityProduct>
                        <div style={{display:'flex'}}>
                            <WrapperButtonQuantity
                                size="large"
                                styleButton={{borderRadius:'3px',border:'1px solid #efefef'}}
                                textButton={<MinusOutlined />}
                            />
                            <WrapperInputQuantity defaultValue={3} onChange={onChange} size="large" />
                            <WrapperButtonQuantity
                                size="large"
                                styleButton={{borderRadius:'3px',border:'1px solid #efefef'}}
                                textButton={<PlusOutlined />}
                            />
                        </div>
                    </WrapperQuantityProduct>
                <WrapperButton>
                    <WrapperBuyButton
                        size="large" 
                        styleButton={{borderRadius:'0'}}
                        textButton="Mua ngay"
                    />
                    <WrapperAddCartButton
                        size="large" 
                        styleButton={{borderRadius:'0'}}
                        textButton="Thêm vào giỏ hàng"
                    />
                </WrapperButton>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent