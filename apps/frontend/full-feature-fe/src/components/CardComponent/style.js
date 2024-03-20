import styled from 'styled-components';
import { Card } from 'antd';
export const WrapperCardStyle = styled(Card)`
    width: 240px;
    & img {
        width: 240px;
        height: 240px;
    },
    position: relative;
`;
// export const WrapperImageStyle = styled.img`
//     top:-1px;
//     left:-1px;
//     position:absolute;
//     border-top-left-radius:3px;
//     width:90px;
//     height:20px;
// `;
export const StyleNameProduct = styled.div`
    font-weight:600;
    font-size:16px;
    line-height:24px;
    color:rgb(56,56,61);
    height:48px;
    overflow:hidden;
    text-overflow:ellipsis;
`;
export const WrapperReportText = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    margin-top:10px;
    font-size:14px;
    color:rgb(56,56,61);
`;
export const WrapperPriceText = styled.div`
    font-size:16px;
    font-weight:700;
    color:red;
    margin:10px 0 5px;
`;
export const WrapperDiscountText = styled.span`
    font-size:14px;
    font-weight:400;
    color:red;
`;
export const WrapperText = styled.div`
`;