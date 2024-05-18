const express = require('express')
const userRouter = require('./routes/UserRouter')
const authJwt = require('./libs/jwt')

require('./database/MongooseConnection')
const productRoutes = require('./routes/productRoutes')
const usersRoutes = require('./routes/UserRouter')
const app = express()
const port = 3000

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Middleware de autenticación JWT
app.use(authJwt());

app.use('/api/v1', productRoutes)
app.use('/api/v1/users', usersRoutes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
