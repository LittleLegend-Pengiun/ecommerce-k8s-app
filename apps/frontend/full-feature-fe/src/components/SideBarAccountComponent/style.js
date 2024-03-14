import {styled} from "styled-components"
import { Link } from "react-router-dom";
export const WrapperUl = styled.ul`
    list-style: none;
    padding: 0;
`
export const WrapperLi = styled.li`
    margin: 10px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
`
export const WrapperLink = styled(Link)`
color:black;
white-space: nowrap;
cursor: pointer;
&:hover{
    color:black;
    font-weight: bold;
}
`;