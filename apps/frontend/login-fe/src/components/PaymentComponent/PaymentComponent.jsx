import React,{useState} from 'react';
import {formatPrice} from '../../formater/formater';
import productImg from '../../assets/images/detail/color-vang.webp';
import { Radio, Space,Form } from 'antd';
import {
    WrapperRow,
    WrapperCol,
    WrapperInputFiled,
    WrapperForm,
    WrappperSaveInfor,
    WrapperColumn,
    WrapperTable,
    WrapperRowList,
    WrapperColList,
    WrapperPaymentMethod,
    WrapperRadio,
    WrapperDiscountInput,
    WrapperButton,
  } from './style'
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const cart = [
    {
      key: '1',
      product: 'Điện thoại Xiaomi Redmi Note 12',
      price: 1000000,
      quantity: 2,
      subTotal: 2000000,
      image: productImg,
      discount:0.1
    },
    {
      key: '2',
      product: 'Điện thoại Xiaomi Redmi Note 12',
      price: 1000000,
      quantity: 2,
      subTotal: 2000000,
      image: productImg,
      discount:0.1
    },
    {
      key: '3',
      product: 'Điện thoại Xiaomi Redmi Note 12',
      price: 1000000,
      quantity: 2,
      subTotal: 2000000,
      image: productImg,
      discount:0.1
    },
    {
        key: '4',
        product: 'Điện thoại Xiaomi Redmi Note 12',
        price: 1000000,
        quantity: 2,
        subTotal: 2000000,
        image: productImg,
        discount:0.1
      },
      {
        key: '5',
        product: 'Điện thoại Xiaomi Redmi Note 12',
        price: 1000000,
        quantity: 2,
        subTotal: 2000000,
        image: productImg,
        discount:0.1
      },
  ]


const PaymentComponent = () => {
    const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
    const [data, setData] = useState(cart);
    const totalSubtotal = data.reduce((total, item) => total + item.subTotal, 0);
    const priceShipping = (totalSubtotal > 1000000) ? 0 : totalSubtotal*0.1;
    const totalDiscount = data.reduce((total, item) => total + item.subTotal*item.discount, 0);
  return (
    <div>
        <WrapperRow>
            <WrapperCol>
                    <div>
                        <div className="list-item">
                            <WrapperTable 
                                pagination={{ pageSize: 4 }}
                                dataSource={data}
                            >
                                <WrapperColumn title="Danh sách sản phẩm" dataIndex="product" key="product" width="40%"
                                render={(text, record) => (
                                <div style={{ display: 'flex', position: 'relative' }}>
                                    <img src={record.image} alt={record.product} style={{ marginRight: '5px', width: '80px', height: 'auto' }} />
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <span style={{ display: 'block' }}>{text}</span>
                                    </div>
                                </div>
                            )}
                                />  
                                <WrapperColumn title="Tổng phụ" dataIndex="subTotal" key="subTotal" width="20%"
                                render={(text) => formatPrice(text)}
                                />
                            </WrapperTable>
                        </div>
                        <div style={{backgroundColor:'white',border:'1px solid black'}}>
                            <WrapperRowList>
                                <WrapperColList>
                                Tổng phụ:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(totalSubtotal)}
                                </WrapperColList>
                            </WrapperRowList>

                            <WrapperRowList>
                                <WrapperColList>
                                Phí vận chuyển:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(priceShipping)}
                                </WrapperColList>
                            </WrapperRowList>

                            <WrapperRowList>
                                <WrapperColList>
                                Áp dụng mã giảm giá:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(totalDiscount)}
                                </WrapperColList>
                            </WrapperRowList>

                            <WrapperRowList>
                                <WrapperColList>
                                Tổng cuối cùng:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(totalSubtotal+priceShipping-totalDiscount)}
                                </WrapperColList>
                            </WrapperRowList>
                        </div>
                    </div>
            </WrapperCol>
            <WrapperCol>
                <WrapperForm 
                        name="payment"
                        initialValues=
                        {{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <p>Nhập thông tin để thực hiện thanh toán</p>
                        <Form.Item
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên đầy đủ',
                                },
                            ]}
                        >
                        <WrapperInputFiled
                            type="text"
                            size="large"
                            placeholder="Tên đầy đủ" 
                        />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Email không hợp lệ',
                                },
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email',
                                },
                            ]}
                        >
                        <WrapperInputFiled
                            type="text"
                            size="large"
                            placeholder="Email" 
                        />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    type: 'string',
                                    message: 'Số điện thoại không hợp lệ',
                                },
                                {
                                    required: true,
                                    message: 'Vui lòng nhập số điện thoại',
                                },
                            ]}
                        >
                        <WrapperInputFiled
                            type="text"
                            size="large"
                            placeholder="Số điện thoại" 
                        />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập địa chỉ',
                                },
                            ]}
                        >
                        <WrapperInputFiled
                            type="text"
                            size="large"
                            placeholder="Địa chỉ giao hàng" 
                        />
                        </Form.Item>
                        <Form.Item
                            name="saveInfo"
                            valuePropName="checked"
                        >
                        <WrappperSaveInfor>
                            <label>Lưu thông tin cho lần đặt hàng tiếp theo</label>
                        </WrappperSaveInfor>
                        </Form.Item>
                        <WrapperPaymentMethod>
                    <span style={{fontSize:'20px',fontWeight:'500',color:'#008477'}}>Phương thức thanh toán</span>
                    <div>
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <WrapperRadio value={1}>Thanh toán khi nhận hàng</WrapperRadio>
                            <WrapperRadio value={2}>Than toán bằng ví điện tử Momo</WrapperRadio>
                            <WrapperRadio value={3}>Thanh toán bằng ví BKPay</WrapperRadio>
                        </Space>
                    </Radio.Group>
                    </div>
                </WrapperPaymentMethod>              
                <div style={{display:'flex',marginTop:'20px'}}>
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
                <Form.Item>
                <WrapperButton
                    size="large"
                    textButton="Thanh toán"
                    type="primary"
                    htmlType="submit"
                    styleButton={{marginTop:'30px',height:'fit-content'}}
                    styleTextButton={{fontSize:'18px'}}
                >
                </WrapperButton>
                </Form.Item>
                </WrapperForm>
                
            </WrapperCol>
        </WrapperRow>
                   
    </div>
  )
}

export default PaymentComponent