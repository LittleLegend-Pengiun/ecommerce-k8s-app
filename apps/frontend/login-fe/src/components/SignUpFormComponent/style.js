import  { styled } from 'styled-components';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
export const WrapperForm =styled.form
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
    width: 70%;
`;
export const WrrapperNavigateSignIn = styled.div`
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
export const WrappperAcceptPolicy = styled.div`
    margin-top: 10px;
    input {
        margin-right: 5px;
        
    }
    label {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    a {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: #008477;
    
    }
`;
export const WrapperMoreAction = styled.div`
    display: flex;
    width: 50%;
    margin-top: 10px;
    gap: 30%;
`;