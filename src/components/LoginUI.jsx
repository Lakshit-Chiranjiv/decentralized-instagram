import { Image, Layout, Typography } from 'antd'
import React from 'react'
import { testData } from './../testData.js'
import PostCard from './PostCard.jsx';
import SiderItem from './SiderItem.jsx';
import { UserOutlined,PictureOutlined,HomeOutlined } from '@ant-design/icons';

const { Paragraph,Title,Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

console.log(testData)

const LoginUI = () => {
  return (
        <Layout>
            <Sider style={{ color: 'white', padding: '20px' }}>
                <SiderItem icon={<HomeOutlined style={{fontSize: 40}}/>} name='Home'/>
                <SiderItem icon={<PictureOutlined style={{fontSize: 40}}/>} name='Post a Pic'/>
                <SiderItem icon={<UserOutlined style={{fontSize: 40}}/>} name='Profile'/>
            </Sider>
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