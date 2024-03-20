import styled from 'styled-components';
import { Image,Col, Input } from 'antd';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
export const WrapperSmallImage = styled(Image)`
    width:64px;
    height:64px;
`;
export const WrapperColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`;
export const WrapperProductDescription = styled.h1`
    color:rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    word-break: break-word;
`;

export const WrapperTextReport = styled.span`
    font-size: 18px;
    color:(120, 120, 120);
    line-height: 24px;
`;
export const WrapperProductPrice = styled.div`
    border-radius: 4px;
    padding: 10px 0;
    display: flex;
`;
export const WrapperProductPriceText= styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right:10px;
    font-weight: 500;
    color:red;
`;
export const WrapperReleaseDate = styled.span`
    font-size: 20px;
    line-height: 24px;
    color:black;
    padding-right:10px;
`;
export const WrapperAddress = styled.div`
    margin-top: 20px;
    padding-bottom: 20px;
    span.address {
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 10px;
    };
    span.change-address {
        font-size: 16px;
        line-height: 24px;
        color:#008477;
        font-weight: 500;
    }
    p {
        font-size: 18px;
        line-height: 24px;
        color:black;
        font-weight: 500;
        padding-left:10px;
        margin-top:10px;
    }
`;
export const WrapperQuantityProduct = styled.div`
    margin:16px;
`;

export const WrapperInputQuantity = styled(Input)`
    border-radius:0;
    width:60px;
    text-align:center;
`;

export const WrapperButtonQuantity = styled(ButtonComponent)`
    background-color:#efefef;
    margin:0 10px;
`;
export const WrapperButton = styled.div`
    margin-top:16px;
    margin-left:50px;
`;
export const WrapperBuyButton = styled(ButtonComponent)`
    width:180px;
    background-color:#008477;
    color:white;
    font-weight:500;
    border:1px solid #008477;
`
export const WrapperAddCartButton = styled(ButtonComponent)`
    width:180px;
    // margin-left:10px;
    border:1px solid #008477;
    font-weight:500;
    color:#008477;
`