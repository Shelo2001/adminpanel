const { getById, getall, save, removeById, update } = require('../db/users.dao')

const createUser = async ({
  name,
  email,
  gender,
  address: { street, city },
  phone,
}) => {
  const user = {
    name,
    email,
    gender,
    address: {
      street,
      city,
    },
    phone,
  }
  return await save(user)
}

const getUsers = async () => {
  return await getall()
}

const getUser = async (id) => {
  return await getById(id)
}

const deleteUser = async (id) => {
  return await removeById(id)
}

const updateUser = async (
  id,
  { name, email, gender, address: { street, city }, phone }
) => {
  return await update(id, {
    name,
    email,
    gender,
    address: {
      street,
      city,
    },
    phone,
  })
}

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
}
