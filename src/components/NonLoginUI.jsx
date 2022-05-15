import { Button, Col, Image, Layout, Row, Typography } from 'antd'
import React from 'react'
import NameLogo from './../../assets/NameLogo.png';

const { Content } = Layout;
const { Title } = Typography;
const NonLoginUI = () => {
  return (
    <Layout>
        <Content style={{ backgroundColor: 'white' }}>

            <Row style={{ height: '66vh' }} justify='center' align='middle'>
              <Col span={12}>
                <Title>Welcome To</Title>
                <Image src={NameLogo}/> <br />
                <Button type="primary" block loading={false}>Connect to Metamask</Button>
              </Col>
            </Row>
        </Content>
    </Layout>
  )
}

export default NonLoginUI