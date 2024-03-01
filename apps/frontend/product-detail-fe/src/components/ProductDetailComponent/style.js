import styled from 'styled-components';
import { Image,Col } from 'antd';
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
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`;

export const WrapperTextReport = styled.span`
    font-size: 18px;
    color:(120, 120, 120);
    line-height: 24px;
`;
export const WrapperProductPrice = styled.div`
    background:rgb(250, 250, 250);
    border-radius: 4px;
`;
export const WrapperProductPriceText= styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right:10px;
    font-weight: 500;
    color:red;
`;
export const WrapperAddress = styled.div`
    margin-top: 20px;
    border:1px solid #efefef;
    padding-bottom: 20px;
    background:#f9f9f9;
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
    }
`;
export const WrapperQuantityProduct = styled.div`
    
`;