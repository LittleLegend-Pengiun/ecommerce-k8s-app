import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'
import { useParams } from 'react-router-dom'
const ProductDetailPage = () => {
  const {productID} = useParams()
  console.log('productID',productID);
  return (
    <div style={{padding:'0 120px',background:'#efefef'}}>
      <h2>Trang chủ - Điện Thoại - Máy Tính Bảng - Điện thoại Smartphone - Điện thoại Xiaomi Redmi Note 12 ( 8GB / 128GB ) - Hàng chính hãng</h2>
      <ProductDetailComponent productID={productID}/>
    </div>
  )
}

export default ProductDetailPage