import { Row } from "antd";
import styled  from "styled-components";
import { Link } from "react-router-dom";
export const WrapperHeader = styled(Row)`
    background-color: #008874;
    padding: 10px 120px;
    align-items: center;
    gap:16px;
    flex-wrap: nowrap;
    margin-bottom: 40px;
`;
export const WrapperTextHeader = styled.span`
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-align:left;
`;
export const WrapperAccountHeader = styled.div`
display:flex;
align-items:center;
color:white;
gap:10px;
font-size:14px;
`;
export const WrapperTextHeaderSmall = styled.span`
color:white;
font-size: 16px;
white-space: nowrap;
margin-right:5px;
cursor: pointer;
&:hover{
    color:white;
    font-weight: bold;
}
`;
export const WrapperLink = styled(Link)`
color:white;
white-space: nowrap;
cursor: pointer;
&:hover{
    color:white;
    font-weight: bold;
}
`;