const { MongoClient } = require('mongodb')

const client = new MongoClient(
  'mongodb+srv://akaki:akaki@cluster0.ok37ptm.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

client.connect((err) => {
  if (err) {
    console.log(err)
    process.exit(-1)
  }

  console.log('successfully connected')
})

module.exports = client
