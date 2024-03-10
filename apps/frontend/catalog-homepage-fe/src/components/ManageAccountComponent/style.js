import {styled} from "styled-components"
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import InputAccountComponent from '../InputAccountComponent/InputAccountComponent';
export const WrapperInput = styled(InputComponent)`
    margin-bottom: 10px;
`
export const WrapperConfirmButton = styled(ButtonComponent)`
    margin-top: 20px;
    width: 30%;
    background-color: #008477;
    border-radius: 0;
    color: white;
    fontr-size: 16px;
    font-weight: 500;
`
export const WrapperCancelButton = styled(ButtonComponent)`
    margin-top: 20px;
    width: 30%;
    background-color: #f0f0f0;
    border-radius: 0;
    color: black;
    fontr-size: 16px;
    font-weight: 500;
    margin-right: 30px;
`
export const WrapperInputAccount = styled(InputAccountComponent)`
    border-radius: 0;
    padding:5px 12px;
`
