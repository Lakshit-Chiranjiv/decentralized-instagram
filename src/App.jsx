import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button,Badge,Input,Typography,Layout,Menu, PageHeader, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { red, orange, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@ant-design/colors';


function App() {
  const [count, setCount] = useState(0)

const { Paragraph,Title,Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">

      <Layout>
        <Header style={{ backgroundColor: red[2],height: 'auto', padding: 30 }}>
          <Row align='middle' justify='center'>
            <Title style={{ color: 'white' }}>Decentralized Instagram</Title>
          </Row>
        </Header>
        <Layout>
          <Sider style={{ color: 'white', padding: '50px' }}>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer style={{ backgroundColor: orange[2] }}>
          <Text>created by Lakshit Chiranjiv Sagar | &copy; | 2022</Text>
        </Footer>
      </Layout>
    </div>
  )
}

export default App
