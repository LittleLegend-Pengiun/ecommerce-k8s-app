
import styled from 'styled-components';
import { Table,Row,Col} from 'antd';
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import InputComponent from '../InputComponent/InputComponent';
const { Column} = Table;
import {EyeOutlined} from '@ant-design/icons';
export const WrapperTable = styled(Table)`
    .ant-table {
        margin-top: 20px;
            .ant-table-thead 
            {
                .ant-table-cell 
                {
                    background-color: #008477;
                    font-weight: 600;
                    font-size: 18px;
                    color: #fff;
                }
            }
        .ant-table-tbody {
            .ant-table-row 
            {
                &:hover {
                background-color:#efefef;
                }
                height: 80px;
                font-size: 18px;
            }
        }
    }
`;
export const WrapperColumn = styled(Column)`
`;
export const WrapperInput = styled.input`
    width: 50px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    text-align: center;
    height: 30px; 
    font-size: 16px;
    background-color: #efefef;
`;
export const WrapperButton = styled(ButtonComponent)`
background-color:#008477;
font-weight:500;
font-size:16px;
border-radius:0;
`
export const WrapperDiscountInput = styled(InputComponent)`
    width:50%;
    border-radius:0;
    height: fit-content;
`
export const WrapperRow = styled(Row)`
    padding:10px;
    justify-content:space-between;
`
export const WrapperCol = styled(Col)`
    font-size:16px;
    font-weight:400;
`
export const WrapperEyeOutlined = styled(EyeOutlined)`
    color: ${props=>props.color};
    cursor: pointer;
    font-size: 20px;
    &:hover {
       transform: scale(1.8);
    }
`
export const WrapperStatus= styled.span`
    color: white;
    border: 1px solid ${props=>props.color};
    padding: 5px 5px;
    background-color: ${props=>props.color};
    width: 70%;
    text-align: center;
    font-size: 16px;
`