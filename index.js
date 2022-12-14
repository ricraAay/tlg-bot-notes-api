import express from 'express'
import 'dotenv/config'

import catalogRouter from './src/router/catalog.router.js'
import recordsCatalogForChat from './src/router/recordsCatalogForChat.router.js'

const app = express()

app.use(express.json())

app.use('/api', catalogRouter)
app.use('/api', recordsCatalogForChat)

app.listen(process.env.PORT, async () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})