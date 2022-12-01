import React, { useEffect, useState } from 'react'
import useUsers from '../services/users'
import DataTable from 'react-data-table-component'
import { Button, Input, Select } from 'antd'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Landing = () => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [gender, setGender] = useState()

  const {
    users,
    user,
    fetch,
    delete: deleteUser,
    findById,
    updateById,
  } = useUsers()

  useEffect(() => {
    fetch()
  }, [fetch])
  const close = () => setModal(!modal)

  const getUserDetailsHandler = (id) => {
    setModal(true)
    findById(id)
  }

  const deleteHandler = (id) => {
    deleteUser(id)
    window.alert('are you sure you want to delete?')
    window.location.reload()
  }

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setPhone(user.phone)
      setStreet(user?.address?.street)
      setCity(user?.address?.city)
      setGender(user.gender)
    }
  }, [user])

  const updateUserHandler = () => {
    updateById(user._id, {
      name,
      email,
      phone,
      address: { street, city },
      gender,
    })
    window.location.reload()
  }

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px',
        fontSize: '16px',
        backgroundColor: '#EFF5F5',
      },
    },
    headCells: {
      style: {
        backgroundColor: '#CDF0EA',
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '24px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
  }

  const columns = [
    {
      name: 'N',
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
    },
    {
      name: 'City',
      selector: (row) => row.city,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
    },
    {
      selector: (row) => (
        <Button type='primary' onClick={() => getUserDetailsHandler(row.id)}>
          UPDATE
        </Button>
      ),
    },
    {
      selector: (row) => (
        <Button danger type='primary' onClick={() => deleteHandler(row.id)}>
          DELETE
        </Button>
      ),
    },
  ]

  const data = users.map((user, i) => ({
    id: user._id,
    number: (i = i + 1),
    name: user.name,
    email: user.email,
    gender: user.gender,
    phone: user.phone,
    city: user?.address?.city,
    street: user?.address?.street,
  }))

  return (
    <div style={{ marginTop: '40px' }}>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
      <Modal isOpen={modal}>
        <ModalHeader>Update User</ModalHeader>
        <ModalBody>
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
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            options={[
              {
                value: 'Male',
                label: 'Male',
              },
              {
                value: 'Female',
                label: 'Female',
              },
            ]}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={updateUserHandler}
            style={{ backgroundColor: '#68B984', color: 'white' }}
          >
            Save
          </Button>
          <Button
            color='secondary'
            onClick={close}
            style={{ backgroundColor: '#FED049', color: 'white' }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Landing
