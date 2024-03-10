import styled from "styled-components";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Col } from 'antd'
export const WrapperCategoryProduct =styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom:1px solid black;
    font-size: 24px;
    height: 44px;
`  
export const WrapperButtonHover = styled(ButtonComponent)`
    &:hover{
        color: white;
        background-color: #008874;
        span {
            color: white;
        }
    }
    width:100%;
    text-align:center;
`
export const WrapperProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`
export const WrapperText = styled.h1`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 600;
    color: #008874;
`
export const WrapperColCategory = styled(Col)`
    width:25%;
    margin-right: 20px;
`
export const WrapperSlider = styled(Col)`
    width:75%;
`