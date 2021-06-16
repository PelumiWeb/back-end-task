import express from 'express'
import mongoose from 'mongoose'
import ProductCard from './productsScema.js'
import cors from 'cors'

//App Config
const app = express()
const port = process.env.PORT ||8000
const url = 'mongodb+srv://admin:80FsoG3iIM6GZLoe@cluster0.ed8gw.mongodb.net/interviewDb?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//Middlwwares
app.use(express.json())
app.use(cors())
const admin = 'admin'
const password ='80FsoG3iIM6GZLoe'

//DB config

//APi Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Oluwapelumi'))
app.post('/products', (req, res) => {
    const dbCard = req.body

    ProductCard.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
    
})

app.get('/products', (req, res) => {
    ProductCard.find((err, data) => {
        if (err) {
            res.status(500).send(err)

        }else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost ${port}`))