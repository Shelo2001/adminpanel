import React, { useState } from 'react'
import { Button, Input, Select, Row, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import useUsers from '../services/users'
import { useNavigate } from 'react-router'

const CreateUser = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')

  const genders = ['male', 'female']

  const { createUser } = useUsers()
  console.log(gender)
  const addUserHandler = () => {
    createUser({ name, email, phone, address: { city, street }, gender })
    navigate('/')
  }

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <p className='label'>Name</p>
          <Input
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className='label'>Email</p>
          <Input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='label'>Phone</p>
          <Input
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className='label'>Street</p>
          <Input
            placeholder='Street'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <p className='label'>City</p>
          <Input
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <p className='label'>Gender</p>
          <Select
            style={{ marginTop: '10px', width: '100%' }}
            placeholder='Select a gender'
            onChange={(e) => setGender(e.target.value)}
            options={genders.map((g) => ({
              label: g,
              value: g,
            }))}
          />

          <Button
            type='primary'
            className='label'
            style={{ width: '100%', backgroundColor: '#68B984' }}
            icon={<PlusCircleOutlined />}
            onClick={addUserHandler}
            size='large'
          >
            Create
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CreateUser
