import { Button, Col, Image, Layout, Row, Typography } from 'antd'
import React from 'react'
import NameLogo from './../../assets/NameLogorbg.png';

const { Content } = Layout;
const { Title } = Typography;
const NonLoginUI = () => {
  return (
    <Layout>
        <Content>
            <Row style={{ height: '66vh' }} justify='center' align='middle'>
              <Col span={12}>
                <Title>Welcome To</Title>
                <Image src={NameLogo}/> <br />
                <Button type="primary" block loading={false} style={{ width: '70%',height: '40px',margin: '20px auto' }}>Connect to Metamask</Button>
              </Col>
            </Row>
        </Content>
    </Layout>
  )
}

export default NonLoginUI