import create from 'zustand'
import { devtools } from 'zustand/middleware'
import axios from 'axios'

const useUsers = create(
  devtools((set) => ({
    users: [],
    user: {},
    fetch: async () => {
      const res = await axios.get('/users')
      set({ users: await res.data })
    },
    delete: async (id) => {
      const res = await axios.delete(`/users/${id}`)
      console.log(res)
      set({ users: await res.data })
    },
    findById: async (id) => {
      const res = await axios.get(`/users/${id}`)
      console.log(res)
      set({ user: await res.data })
    },
    updateById: async (id, data) => {
      const res = await axios.put(`/users/${id}`, data)
      console.log(res)
      set({ user: await res.data })
    },
    createUser: async (data) => {
      const res = await axios.post('/users', data)
      console.log(res)
      set({ users: await res.data })
    },
  }))
)

export default useUsers
