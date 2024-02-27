import styled from "styled-components";
import ButtonComponent from "../../../../product-detail-fe/src/components/ButtonComponent/ButtonComponent";

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