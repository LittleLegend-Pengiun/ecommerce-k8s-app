import React,{useState} from 'react'
import { Divider, Table } from 'antd';
const { Column} = Table;
import productImg from '../../assets/images/detail/color-vang.webp';
import {
    WrapperTable,
    WrapperColumn,
    WrapperInput,
} from './style'
const cart = [
  {
    key: '1',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
    image: productImg
  },
  {
    key: '2',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
    image: productImg
  },
  {
    key: '3',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
    image: productImg
  },
  {
    key: '4',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
    image: productImg
  },
]
const ShoppingCartComponent = () => {
    const [data, setData] = useState(cart);

    const handleQuantityChange = (key, newQuantity) => {
        const dataIndex = data.findIndex(item => item.key === key);
        if (dataIndex === -1 || isNaN(newQuantity) || newQuantity < 0) {
            return;
        }
        const newData = [...data];
        newData[dataIndex].quantity = parseInt(newQuantity, 10);
        newData[dataIndex].subTotal = newData[dataIndex].price * parseInt(newQuantity, 10);
        setData(newData);
    };

    return (
        <WrapperTable dataSource={data}>
            <WrapperColumn title="Sản phẩm" dataIndex="product" key="product" width="40%"
            render={(text, record) => (
              <div style={{ display: 'flex', position: 'relative' }}>
                        <img src={record.image} alt={record.product} style={{ marginRight: '5px', width: 'auto', height: 'auto' }} />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span style={{ display: 'block' }}>{text}</span>
                        </div>
              </div>
          )}
            />
            <WrapperColumn title="Giá" dataIndex="price" key="price" width="20%"/>
            <WrapperColumn 
                title="Số lượng" 
                dataIndex="quantity" 
                key="quantity"
                width="20%"
                render={(text, record) => (
                    <WrapperInput
                        type="number" 
                        value={text} 
                        onChange={(e) => handleQuantityChange(record.key, e.target.value)} 
                    />
                )}
            />   
            <WrapperColumn title="Tổng phụ" dataIndex="subTotal" key="subTotal" width="20%"/>
        </WrapperTable>
    );
};
export default ShoppingCartComponent