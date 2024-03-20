import React from 'react'
import {WrapperInput,
        WrapperLabel
} from './style.js'
const InputAccountComponent = ({value,className,label,size,style, ...rests}) => {
  return (
    <div>
        <WrapperLabel htmlFor={className}>{label}</WrapperLabel>
        <WrapperInput
        className={className}
        size={size} 
        style={style}
        value={value}
        {...rests}
        />
    </div>   
  )
}

export default InputAccountComponent