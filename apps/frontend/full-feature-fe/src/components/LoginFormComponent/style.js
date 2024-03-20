import  { styled } from 'styled-components';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Checkbox, Form } from 'antd';
export const WrapperForm =styled(Form)
`
    padding: 20px;
    background-color: #f4f4f4;
    height: 100%;
    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
    }
`;
export const WrapperInputFiled = styled(InputComponent)`
    // margin-top: 20px;
    width: 50%;
    display: block; 
    border-radius: 0;
`;
export const WrapperButton =styled(ButtonComponent)
`
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
export const WrrapperNavigateSignUp = styled.div`
    margin-top: 20px;
    span {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-right: 10px;
    }
    a {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #008477;
    }
`;
export const WrapperForgotPassword = styled.div`
    a {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: black;
    }
`;
export const WrappperRemember = styled(Checkbox)`
    input {
        margin-right: 5px;
        
    }
    label {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;
export const WrapperMoreAction = styled.div`
    display: flex;
    width: 50%;
    // margin-top: 10px;
    justify-content: space-between;
`;