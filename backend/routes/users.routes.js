const Router = require('@koa/router')

const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require('../api/users.api')

const router = new Router({
  prefix: '/users',
})

router.get('/', async (ctx) => {
  ctx.body = await getUsers()
})

router.post('/', async (ctx) => {
  let user = ctx.request.body
  user = await createUser(user)

  ctx.response.status = 200
  ctx.body = user
})

router.get('/:id', async (ctx) => {
  const id = ctx.params.id
  ctx.body = await getUser(id)
})

router.delete('/:id', async (ctx) => {
  const id = ctx.params.id
  ctx.body = await deleteUser(id)
})

router.put('/:id', async (ctx) => {
  const id = ctx.params.id
  let user = ctx.request.body
  user = await updateUser(id, user)
  ctx.response.status = 200
  ctx.body = user
})

module.exports = router
