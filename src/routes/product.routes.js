const express = require("express") 
const supplierController = require("../controllers/product.controllers") 
const routerProduct = express.Router();

routerProduct.post("/", supplierController.createProduct)
routerProduct.put('/', supplierController.upadateProduct)
routerProduct.get('/', supplierController.getProducts)
routerProduct.get('/:id', supplierController.getOneProduct)
routerProduct.delete('/:id', supplierController.deleteProduct)

module.exports =  routerProduct