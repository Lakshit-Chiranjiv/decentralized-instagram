import { grey } from '@ant-design/colors'
import { Card } from 'antd'
import React from 'react'

const SiderItem = ({name,icon}) => {
  return (
    <Card style={{ backgroundColor: 'rgba( 255, 255, 255, 0.2 )', boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter: 'blur( 8px )', borderRadius: '10px', border: '1px solid rgba( 255, 255, 255, 0.18 )', fontSize: 20, cursor: 'pointer', color: 'white',width: 150 }}>
        {icon}
        <p>{name}</p>
    </Card>
  )
}

export default SiderItem