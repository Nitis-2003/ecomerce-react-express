import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/api.js'

dotenv.config();

const app = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',router)

app.get('/', (req, res) => {
  res.send('Hello From Backend!')
})

app.listen(port, () => {
  console.log(`server is running\nhttp://localhost:${port}`)
})
