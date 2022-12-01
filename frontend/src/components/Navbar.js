import React from 'react'
import { Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Navbar = () => {
  return (
    <Menu mode='horizontal'>
      <Menu.Item>
        <Title level={3}>
          <Link to='/'>Users</Link>
        </Title>
      </Menu.Item>

      <Menu.Item>
        <Title level={3}>
          <Link to='/piechart'>Pie Chart</Link>
        </Title>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
