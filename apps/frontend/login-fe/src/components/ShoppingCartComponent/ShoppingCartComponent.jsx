import React,{useState} from 'react'
import { Table } from 'antd';
const { Column} = Table;
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
  },
  {
    key: '2',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
  },
  {
    key: '3',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
  },
  {
    key: '4',
    product: 'Điện thoại Xiaomi Redmi Note 12',
    price: 10000,
    quantity: 2,
    subTotal: 20000,
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
            <WrapperColumn title="Sản phẩm" dataIndex="product" key="product" />
            <WrapperColumn title="Giá" dataIndex="price" key="price" />
            <WrapperColumn 
                title="Số lượng" 
                dataIndex="quantity" 
                key="quantity"
                render={(text, record) => (
                    <WrapperInput
                        type="number" 
                        value={text} 
                        onChange={(e) => handleQuantityChange(record.key, e.target.value)} 
                    />
                )}
            />   
            <WrapperColumn title="Tổng phụ" dataIndex="subTotal" key="subTotal" />
        </WrapperTable>
    );
};
export default ShoppingCartComponent