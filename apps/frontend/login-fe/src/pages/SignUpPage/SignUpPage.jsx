
import React from 'react'
import { Row, Col } from 'antd'
import mainLogo from '../../assets/images/main/logo.jpg'
import SignUpFormComponent from '../../components/SignUpFormComponent/SignUpFormComponent'
const SignUpPage = () => {
  return (
    <div>
      <Row style={{marginTop:'60px'}}>
      <Col span={12}>
        <SignUpFormComponent/>
      </Col>
      <Col span={12} style={{padding:'20px'}}>
        <center><img src={mainLogo} alt="mainLogo" style={{width:'500px',height:'500px'}}/></center>
      </Col>
    </Row>
    </div>
  )
}

export default SignUpPage
