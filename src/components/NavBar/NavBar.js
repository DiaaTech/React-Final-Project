import { Col, Row, Typography, Button, Avatar } from 'antd'
import React from 'react'
import {
  MailOutlined,
  MessageOutlined,
  BellFilled,
  UserOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Row
        span={24}
        className='flex-h'
        style={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          padding: '0px 30px',
        }}
      >
        <Col span={12}>
          <Typography.Title level={3}>SmartEd</Typography.Title>
        </Col>
        <Col
          span={12}
          className='flex-h'
          style={{ justifyContent: 'space-between' }}
        >
          <ul className='flex-h' style={{ gap: '20px', fontSize: '20px' }}>
            <li>Home</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>

          <ul className='flex-h' style={{ fontSize: '16px' }}>
            <Button
              style={{
                border: 'none',
                backgroundColor: '#ffffff',
              }}
            >
              <Avatar
                style={{ backgroundColor: '#0000ff' }}
                icon={<MailOutlined />}
              />
            </Button>
            <Button
              style={{
                border: 'none',
                backgroundColor: '#ffffff',
              }}
            >
              <Avatar
                style={{ backgroundColor: '#0000ff' }}
                icon={<MessageOutlined />}
              />
            </Button>
            <Button
              style={{
                border: 'none',
                backgroundColor: '#ffffff',
              }}
              onClick={() => {
                navigate('/profile')
              }}
            >
              <Avatar
                style={{ backgroundColor: '#0000ff' }}
                icon={<UserOutlined />}
              />
            </Button>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default NavBar
