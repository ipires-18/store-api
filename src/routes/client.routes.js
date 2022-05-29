const express = require("express")

const clientController = require("../controllers/client")

const routerClient = express.Router();

routerClient.post("/", clientController.createClient)

module.exports = routerClient