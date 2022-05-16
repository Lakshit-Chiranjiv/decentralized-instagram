import { Image, Layout, Typography } from 'antd'
import React from 'react'
import { testData } from './../testData.js'
import PostCard from './PostCard.jsx';

const { Paragraph,Title,Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

console.log(testData)

const LoginUI = () => {
  return (
        <Layout>
            <Sider style={{ color: 'white', padding: '20px' }}>Sider</Sider>
            <Content style={{display: 'grid',gridTemplateColumns: 'repeat(2, 1fr)'}}>
                {
                    testData.map((data,i) => (
                        <div key={i} style={{ padding: 20 }}>
                            <PostCard data={data} hello='hello' />
                        </div>
                    ))
                }
            </Content>
        </Layout>
  )
}

export default LoginUI