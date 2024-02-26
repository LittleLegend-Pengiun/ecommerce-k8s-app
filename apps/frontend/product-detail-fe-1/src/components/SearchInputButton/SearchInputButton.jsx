import { Input,Button } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
const SearchInputButton = (props) => {
    const {size,placeholder,innerText} = props
  return (
    <div style={{display:'flex'}}>
        <Input  size={size} placeholder={placeholder} />
        <Button size={size} icon={<SearchOutlined />}>{innerText}</Button>
    </div>
  )
}

export default SearchInputButton