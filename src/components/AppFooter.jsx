import { orange } from '@ant-design/colors'
import { Layout, Typography } from 'antd'
import React from 'react'

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: orange[2] }}>
        <Text>created by Lakshit Chiranjiv Sagar | &copy; | 2022</Text>
    </Footer>
  )
}

export default AppFooter