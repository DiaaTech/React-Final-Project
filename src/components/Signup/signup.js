import React from 'react'
import { Form, Row, Col, Input, Button, Typography, message } from 'antd'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [form] = Form.useForm() // which can be used to make forms
  const [messageApi, contextHolder] = message.useMessage()
  // for routing
  const navigate = useNavigate()

  // Validator Password Length
  const validatePasswordLength = (_, value) => {
    if (value && value.length < 8) {
      return Promise.reject('Password must be at least 8 characters')
    }
    return Promise.resolve()
  }

  // Signup Button Handler
  const submitHandler = (values) => {
    // TODO: API CALL to my Server (Add a new user in Data for it's account)
    console.log(values)

    // Timer
    setTimeout(() => {
      messageApi.open({
        type: 'success',
        content: 'Signup Completed Successfullyy!',
      })
    }, 2000)

    // Move Login
    navigate('/login')
  }
  return (
    <div>
      {contextHolder}
      <Row
        style={{
          minHeight: '100vh',
        }}
      >
        <Col
          xs={0}
          md={12}
          lg={12}
          style={{
            backgroundColor: 'blue',
          }}
        >
          <img
            src={require('../../img/illustrations.png')}
            alt='Image'
            width='600px'
            height='600px'
          />
        </Col>
        <Col
          xs={24}
          md={12}
          lg={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '20px',
          }}
        >
          <Typography.Text style={{ fontSize: '30px' }}>
            Create <strong>Your</strong> Account
          </Typography.Text>
          <Form
            form={form}
            onFinish={submitHandler}
            layout='vertical'
            autoComplete='on'
            style={{
              width: '100%',
            }}
          >
            {/* Name of User */}
            <Form.Item
              name='name'
              label='Name'
              rules={[{ required: true, message: 'Please input your Name' }]}
            >
              <Input />
            </Form.Item>

            {/* Email of User */}
            <Form.Item
              name='email'
              label='Email'
              rules={[{ required: true, message: 'Please input your Email' }]}
            >
              <Input />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name='password'
              label='Password'
              rules={[
                { required: true, message: 'Please input your Password' },
                {
                  validator: validatePasswordLength,
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Confirm Password */}
            <Form.Item
              name='passwordConfirm'
              label='Confirm Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your Confirm Password',
                },
                {
                  validator: validatePasswordLength,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ height: '2.5rem', width: '100%' }}
                size='small'
                type='primary'
                htmlType='submit'
              >
                Signup
              </Button>
            </Form.Item>
          </Form>

          {/* Data */}
          <Typography.Text>
            Already Have an Account?{' '}
            <a href='/login' style={{ fontWeight: 700 }}>
              Login
            </a>
          </Typography.Text>
        </Col>
      </Row>
    </div>
  )
}

export default Signup
