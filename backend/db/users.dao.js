const users = require('./db').db('users').collection('users')

const objectId = require('mongodb').ObjectId

const save = async ({
  name,
  email,
  gender,
  address: { street, city },
  phone,
}) => {
  const result = await users.insertOne({
    name,
    email,
    gender,
    address: { street, city },
    phone,
  })
  return result
}

const getall = async () => {
  const cursor = await users.find()
  return cursor.toArray()
}

const getById = async (id) => {
  return await users.findOne({ _id: objectId(id) })
}

const update = async (
  id,
  { name, email, gender, address: { street, city }, phone }
) => {
  const result = await users.replaceOne(
    {
      _id: objectId(id),
    },
    {
      name,
      email,
      gender,
      address: { street, city },
      phone,
    }
  )
}

const removeById = async (id) => {
  await users.deleteOne({ _id: objectId(id) })
}

module.exports = { getById, getall, removeById, update, save }
