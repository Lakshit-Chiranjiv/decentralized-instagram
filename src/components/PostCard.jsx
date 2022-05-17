import React from 'react'
import { Card, Avatar, Image, Typography, Divider } from 'antd';
import { HeartOutlined,DollarCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography; 

const PostCard = ({data: {imgUrl,likes,user,caption,tips}}) => (
    <>
        <Card
            style={{ width: '100%',padding: 20,borderRadius: 10 }}
            cover={
            <Image
                width={300}
                height={300}
                alt="example"
                src={imgUrl}
            />
            }
            // actions={[
            //     <HeartOutlined key="like" />,
            //     <DollarCircleOutlined key="tip"/>
            // ]}
        >
            <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" style={{ cursor: 'pointer', border: '1px solid black' }} onClick={()=>console.log("avatar click")} />}
            title={user}
            description={caption}
            />

            <Divider/>

            <div style={{display: 'flex',justifyContent: 'space-around',marginTop: 20,fontSize: 18}}>
                <div style={{cursor: 'pointer'}}>
                    <HeartOutlined key="like" style={{ color: 'red', margin: '0 10px'}}/>
                    <Text>{likes}</Text>
                </div>
                <Divider type='vertical' style={{height: 30}}/>
                <div style={{cursor: 'pointer'}}>
                    <DollarCircleOutlined key="tip" style={{ color: 'green', margin: '0 10px'}}/>
                    <Text>{tips} Eth</Text>
                </div>
            </div>
        </Card>

    </>
);

export default PostCard
