import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button,Badge,Input,Typography,Layout,Menu, PageHeader, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { red, orange, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@ant-design/colors';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import NonLoginUI from './components/NonLoginUI';
import LoginUI from './components/LoginUI';
import PostPage from './components/PostPage';


function App() {

  const [nonLoginState,setNonLoginState] = useState(false)
  const [homeState,setHomeState] = useState(false)
  const [postState,setPostState] = useState(false)
  const [profileState,setProfileState] = useState(false)

const { Paragraph,Title,Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">

      <Layout>
        <AppHeader/>

        <NonLoginUI/>
        <LoginUI/>

        <PostPage/>


        <AppFooter/>
      </Layout>
    </div>
  )
}

export default App
