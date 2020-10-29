import express from "express"

const app = express()

app.get('/', (req, rep) => {
    rep.send('Hello world!!!')
})

app.listen(8080)
