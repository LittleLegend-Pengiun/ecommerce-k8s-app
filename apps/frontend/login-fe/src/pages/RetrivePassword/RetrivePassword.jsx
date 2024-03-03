import React from 'react'
import { Row, Col } from 'antd'
import RetrivePasswordCompoennt from '../../components/RetrivePasswordComponent/RetrivePasswordComponent'
import mainLogo from '../../assets/images/main/logo.jpg'
const RetrivePassword = () => {
  return (
    <div>
      <Row style={{marginTop:'60px'}}>
      <Col span={12}>
        <RetrivePasswordCompoennt/>
      </Col>
      <Col span={12} style={{alignContent:'center'}}>
        <center><img src={mainLogo} alt="mainLogo" style={{width:'500px',height:'500px'}}/></center>
      </Col>
    </Row>
    </div>
  )
}

export default RetrivePassword