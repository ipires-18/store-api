const express = require("express")

const clientController = require("../controllers/client")

const routerClient = express.Router();

routerClient.post("/", clientController.createClient)
routerClient.put('/', clientController.upadateClient)
routerClient.get('/', clientController.getClients)
routerClient.get('/:id', clientController.getOneClient)
routerClient.delete('/:id', clientController.deleteClient)

module.exports = routerClient