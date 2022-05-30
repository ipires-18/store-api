const express = require('express') 
const cors = require('cors') 
const winston = require('winston') 
const clientsRouter = require('./src/routes/client.routes')
const supplierRouter = require('./src/routes/supplier.routes')

const { combine, timestamp, label, printf } = winston.format

const myFormat = printf(({level,message,label,timestamp}) => {
  return `${timestamp} [${label}] ${level} ${message}`
})

global.logger = winston.createLogger({
  level:"silly",
  transports:[
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "store-api.log"})
  ],
  format: combine(
    label({ label:"store-api" }),
    timestamp(),
    myFormat
  )
})


const app = express()

app.use(express.json())
app.use(cors())

app.use("/client", clientsRouter)
app.use("/supplier", supplierRouter)
// app.use("/product", productRouter)
// app.use("/sale", salesRouter)

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
  res.status(400).send({ error: err.message })
})

app.listen(3000, () => console.log("API UPP"))