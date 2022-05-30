const express = require("express") 
const supplierController = require("../controllers/supplier.controllers") 
const routerSupplier = express.Router();


routerSupplier.post("/", supplierController.createSupplier)
routerSupplier.put('/', supplierController.upadateSupplier)
routerSupplier.get('/', supplierController.getSuppliers)
routerSupplier.get('/:id', supplierController.getOneSupplier)
routerSupplier.delete('/:id', supplierController.deleteSupplier)

module.exports =  routerSupplier