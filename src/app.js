import express from 'express'
import routes from './routes/products.js'


const app = express()

app.set('PORT', process.env.PORT || 5000)

app.use(express.json())
app.use(routes)

export default app