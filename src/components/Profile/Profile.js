import React from 'react'
import { Avatar, Typography, Divider, Space } from 'antd'

const { Title, Text } = Typography

const ProfilePage = () => {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <Avatar size={64} src='path_to_avatar_image.jpg' />
        <div style={{ marginLeft: 16 }}>
          <Title level={3}>John Doe</Title>
          <Text>Software Engineer</Text>
        </div>
      </div>

      <Divider />

      <div style={{ marginBottom: 24 }}>
        <Title level={4}>About Me</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat mi vitae tellus rutrum, id dignissim orci posuere. Integer
          rhoncus enim non fermentum elementum. Curabitur at risus ultricies,
          lobortis nisl ut, efficitur enim.
        </Text>
      </div>

      <div>
        <Title level={4}>Contact Information</Title>
        <Space direction='vertical'>
          <Text>Email: john.doe@example.com</Text>
          <Text>Phone: +1234567890</Text>
          <Text>Address: 123 Main Street, City, Country</Text>
        </Space>
      </div>
    </div>
  )
}

export default ProfilePage
