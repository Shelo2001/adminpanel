import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
  UserOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'

const Navbar = () => {
  return (
    <Menu mode='horizontal'>
      <Link to='/'>
        <Menu.Item style={{ fontSize: '20px' }} icon={<UserOutlined />}>
          Users
        </Menu.Item>
      </Link>

      <Link to='/piechart'>
        <Menu.Item style={{ fontSize: '20px' }} icon={<PieChartOutlined />}>
          Pie Chart
        </Menu.Item>
      </Link>

      <Link to='/createuser'>
        <Menu.Item style={{ fontSize: '20px' }} icon={<PlusCircleOutlined />}>
          Create User
        </Menu.Item>
      </Link>
    </Menu>
  )
}

export default Navbar
