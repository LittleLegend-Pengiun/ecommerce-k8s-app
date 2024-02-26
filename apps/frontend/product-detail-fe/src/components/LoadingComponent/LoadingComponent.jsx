import { Spin } from 'antd'
import React from 'react'

const LoadingComponent = ({ children, isLoading, deday = 200 }) => {
    return (
        <Spin spinning={isLoading} delay={deday}>
            {children}
        </Spin>
    )
}

export default LoadingComponent