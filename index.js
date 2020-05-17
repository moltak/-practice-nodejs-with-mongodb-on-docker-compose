const express = require('express')
const app = express()
const port = 3000
const Kitten = require('./db.js')

app.get('/', async (req, res) => {

  const fluffy = new Kitten({ name: 'fluffy' })
  await fluffy.save()

  const found = await Kitten.find({})

  return res.send(`Hello World! - ${JSON.stringify(found)}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
