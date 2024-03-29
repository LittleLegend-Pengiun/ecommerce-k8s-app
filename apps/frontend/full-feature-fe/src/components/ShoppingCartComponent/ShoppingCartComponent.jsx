import React,{useState} from 'react'
import { Table} from 'antd';
const { Column} = Table;
import productImg from '../../assets/images/detail/color-vang.webp';
import {formatPrice} from '../../formater/formater';
import {ArrowLeftOutlined} from '@ant-design/icons';
import { 
    WrapperTable,
    WrapperColumn,
    WrapperInput,
    WrapperButton,
    WrapperDiscountInput,
    WrapperRow,
    WrapperCol,
} from './style'
import { Link } from 'react-router-dom';
const cart = [
  {
    productID: '1',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
  {
    productID: '2',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
  {
    productID: '3',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
  {
    productID: '4',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
  {
    productID: '5',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
  {
    productID: '6',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
  {
    productID: '7',
    productName: 'Điện thoại Xiaomi Redmi Note 12',
    price: 1000000,
    quantity: 2,
    subTotal: 2000000,
    image: productImg
  },
]
const ShoppingCartComponent = () => {
    const [data, setData] = useState(cart);

    const handleQuantityChange = (key, newQuantity) => {
        const dataIndex = data.findIndex(item => item.productID === key);
        if (dataIndex === -1 || isNaN(newQuantity) || newQuantity < 0) {
            return;
        }
        const newData = [...data];
        newData[dataIndex].quantity = parseInt(newQuantity, 10);
        newData[dataIndex].subTotal = newData[dataIndex].price * parseInt(newQuantity, 10);
        setData(newData);
    };
    const totalSubtotal = data.reduce((total, item) => total + item.subTotal, 0);
    const priceShippng = (totalSubtotal > 1000000) ? 0 : totalSubtotal*0.1;
    return (  
        <div>
          <WrapperTable 
            pagination={{ pageSize: 4 }}
            dataSource={data}
          >
            <WrapperColumn title="Sản phẩm" dataIndex="productName" key="productID" width="40%"
            render={(text, record) => (
              <div style={{ display: 'flex', position: 'relative' }}>
                  <img src={record.image} alt={record.product} style={{ marginRight: '5px', width: 'auto', height: 'auto' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span style={{ display: 'block' }}>{text}</span>
                  </div>
              </div>
          )}
            />
            <WrapperColumn title="Giá" dataIndex="price" key="productID" width="20%"
              render={(text) => formatPrice(text)}
            />
            <WrapperColumn 
                title="Số lượng" 
                dataIndex="quantity" 
                key="productID"
                width="20%"
                render={(text, record) => (
                    <WrapperInput
                        type="number" 
                        value={text} 
                        onChange={(e) => handleQuantityChange(record.productID, e.target.value)} 
                    />
                )}
            />   
            <WrapperColumn title="Tổng phụ" dataIndex="subTotal" key="productID" width="20%"
             render={(text) => formatPrice(text)}
            />
        </WrapperTable>
          <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <Link to="/">
                  <WrapperButton
                  icon={<ArrowLeftOutlined />}
                  size="large"
                  textButton="Tiếp tục mua sắm"
                  type="primary"
                  />
                </Link>
              </div>
              <div>
                <WrapperButton
                size="large"
                textButton="Cập nhật giỏ hàng"
                type="primary"
                />
              </div>
          </div>
          <div style={{display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
            <div style={{display:'flex',width:'50%'}}>
              <WrapperDiscountInput
              size="large"
              placeholder="Nhập mã giảm giá"
              type="text"
              />
              <WrapperButton
                size="large"
                textButton="Áp dụng"
                type="primary"
                htmlType="submit"
                styleButton={{width:'20%'}}
              />
            </div>
            <div style={{width:'30%',border:'1px solid black'}}>
              <div style={{backgroundColor:'white'}}>
                    <h1 style={{margin:0,padding:'10px',color:'#008477',fontSize:'20px'}}>Tổng tiền trong giỏ hàng</h1>
                    <WrapperRow>
                    <WrapperCol>
                      Tổng phụ:
                    </WrapperCol>
                    <WrapperCol>
                     {formatPrice(totalSubtotal)}
                    </WrapperCol>
                    </WrapperRow>
                    <WrapperRow>
                    <WrapperCol>
                      Phí vận chuyển:
                    </WrapperCol>
                    <WrapperCol>
                      {formatPrice(priceShippng)}
                    </WrapperCol>
                    </WrapperRow> 
                    <WrapperRow>
                    <WrapperCol>
                      Tổng cuối cùng:
                    </WrapperCol>
                    <WrapperCol>
                    {formatPrice(totalSubtotal + priceShippng)}
                    </WrapperCol>
                    </WrapperRow>
              </div>
            </div>
          </div>
        </div>
    );
};
export default ShoppingCartComponent