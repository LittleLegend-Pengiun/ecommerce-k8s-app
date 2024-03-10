import React from 'react'
import { WrapperLabelText,
        WrapperTextValue,
        WrapperContent
        } from './style'
const NavbarComponent = () => {
    const renderContent =(type,options) =>{
        switch(type){
            case 'label':
                return options.map((item) => {
                    return ( 
                            <WrapperTextValue>{item}</WrapperTextValue>
                    )
                })
            default:
                return {}
        }
    }
  return (
    <div>
        <WrapperLabelText>Label</WrapperLabelText>
        <WrapperContent>
            {renderContent('label',['option1','option2','option3'])}
        </WrapperContent>
    </div>  
  )
}

export default NavbarComponent