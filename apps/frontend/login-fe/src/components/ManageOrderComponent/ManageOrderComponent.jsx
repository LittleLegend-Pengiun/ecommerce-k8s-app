
import React from 'react'
import SideBarAccountComponent from './../SideBarAccountComponent/SideBarAccountComponent';
import { Table,Col} from 'antd';
import {formatPrice} from '../../formater/formater';
import {EyeOutlined} from '@ant-design/icons';
import { 
    WrapperTable,
    WrapperColumn,
} from './style'
const orderedList = [
  {
    OrderID: 'CS490570962VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Đã giao hàng',
  },
  {
    OrderID: 'CS490570963VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Chờ xác nhận',
  },
  {
    OrderID: 'CS490570964VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Đang giao hàng',
  },
  {
    OrderID: 'CS490570965VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Đã hủy',
  },
  {
    OrderID: 'CS490570966VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Đã giao hàng',
  },
  {
    OrderID: 'CS490570967VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Đã giao hàng',
  },
  {
    OrderID: 'CS490570968VN',
    OrderDate:'01/01/2021',
    totalPrice: 2000000,
    methodPayment: 'Than toán khi nhận hàng',
    OrderStatus: 'Đã giao hàng',
  },
]
const ManageOrderComponent = () => {
  return (
    <div style={{display:'flex'}}>
        <Col span={4}>
            <SideBarAccountComponent />
        </Col>
        <Col span={20} style={{marginLeft:'10px'}}>
        <WrapperTable 
            pagination={{ pageSize: 4 }}
            dataSource={orderedList}
          >
            <WrapperColumn title="Mã đơn hàng" dataIndex="OrderID" key="OrderID" width="20%"/>
            <WrapperColumn title="Ngày đặt hàng" dataIndex="OrderDate" key="OrderID" width="20%"/>
            <WrapperColumn 
                title="Tổng tiền" 
                dataIndex="totalPrice" 
                key="OrderID"
                width="15%"
                render={(text) => formatPrice(text)}
            />   
            <WrapperColumn title="Phương thức thanh toán" dataIndex="methodPayment" key="OrderID" width="25%"/> 
            <WrapperColumn title="Trạng thái đơn hàng" dataIndex="OrderStatus" key="OrderID" width="20%"
            render = {(text) => {
              let color;
              if (text==='Đã giao hàng') color = '#008477';
              if (text==='Đang giao hàng') color = 'blue';
              if (text==='Đã hủy') color = 'red';
              if (text==='Chờ xác nhận') color = 'orange';
              return (
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <span style={{color:color,border:'1px solid {color}',padding:'5px 10px'}}>{text}</span>
                  <EyeOutlined style={{color:color,cursor:'pointer',fontSize:'20px'}} />
                </div>
              )
              }
            }
             /> 
        </WrapperTable>
        </Col>
    </div>
  )
}

export default ManageOrderComponent