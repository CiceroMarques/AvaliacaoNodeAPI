import express from 'express'
import router from './src/router/filme.js'

const app = express()
app.use(express.json())

app.use("/api/filme", router)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 ->  https://localhost:3000" )
})
