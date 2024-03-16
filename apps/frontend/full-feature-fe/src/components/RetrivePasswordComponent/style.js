import  { styled } from 'styled-components';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Form } from 'antd';
export const WrapperForm =styled(Form)
`
    padding: 20px;
    background-color: #f4f4f4;
    height: 100%;
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
    }
`;
export const WrapperInputFiled = styled(InputComponent)`
    margin-top: 20px;
    width: 50%;
    display: block; 
    border-radius: 0;
`;
export const WrapperButton =styled(ButtonComponent)
`
    margin-top: 20px;
    width: 50%;
    display: block;
    border-radius: 0;
    color:white;
    background-color: #008477;
    font-size: 16px;
    font-weight: 500;
    
`;
export const WrapperTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 10px;
    color:#008477;
`;
