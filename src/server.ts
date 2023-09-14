import express from 'express'
import { productController } from './controllers/ProductsController'

const app = express()
const port = process.env.PORT ?? 3333

app.use(express.json())
// controllers
app.use(productController)

// ============

app.listen(port, ()=>{
  console.log(`server running on port ${port}`)
})

