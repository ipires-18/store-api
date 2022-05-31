const express = require("express") 
const saleController = require("../controllers/sale.constroller") 
const routerSale = express.Router();

routerSale.post("/", saleController.createSale)
routerSale.put('/', saleController.upadateSale)
routerSale.get('/', saleController.getAllSales)
routerSale.get('/', saleController.getByProductId)
routerSale.get('/:id', saleController.getOneSale)
routerSale.delete('/:id', saleController.deleteSale)

module.exports =  routerSale