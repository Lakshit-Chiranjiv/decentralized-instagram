import { red } from '@ant-design/colors'
import { Layout, Row, Typography } from 'antd'
import React from 'react'

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ backgroundColor: red[2],height: 'auto', padding: 30 }}>
        <Row align='middle' justify='center'>
          <Title style={{ color: 'white' }}>Decentralized Instagram</Title>
        </Row>
    </Header>
  )
}

export default AppHeader