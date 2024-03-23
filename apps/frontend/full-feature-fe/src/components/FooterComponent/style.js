import {styled} from 'styled-components'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent'
export const WrapperLi = styled.li`
    font-size: 20px;
    margin-bottom: 15px;
`
export const WrapperUl = styled.ul`
    list-style: none;
    padding: 0;

`
export const WrapperInput = styled(InputComponent)`
    border-radius: 0;
    width: 70%;
`
export const WrapperButton = styled(ButtonComponent)`
    border-radius: 0;
    width: 30%;
    text-align: center;
    background-color: #efefef;
    color:black;
    font-weight: 600;
    font-size: 16px;
    &:hover{
        background-color: #008477;
    }
`