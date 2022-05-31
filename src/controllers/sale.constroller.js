const SaleService = require('../services/sale.service')

async function createSale(request, response, next){
  try {
    let sale = request.body

    if(!sale.value || !sale.date || !sale.client_id || !sale.product_id){
      throw new Error("value, date, client_id, product_id are mandatory") 
    }
    
    response.send(await SaleService.createSales(sale));
    
    logger.info(`CREATE POST IN /sale - ${JSON.stringify(sale)}`)
  } catch (err) {
    next(err)
  }
}

async function getByProductId(request, response, next){
  try {

    response.send(await SaleService.getByProductId())
    
  } catch (err) {
    next(err)
  }
}

async function getAllSales(request, response, next){
  try {
    
    response.send(await SaleService.getAllSales())

    logger.info(`GET IN /sale`)
  } catch (err) {
    next(err)
  }
}

async function getOneSale(request, response, next){
  try {
    response.send(await SaleService.getSale(request.params.id))
    logger.info(`GET ONE IN /sale`)
  } catch (err) {
    next(err)
  }
}

async function deleteSale(request, response, next){
  try {
    await SaleService.deleteSales(request.params.id)
    response.end()
    logger.info(`DELETE IN /sale`)
  } catch (err) {
    next(err)
  }
}

async function upadateSale(request, response, next){
  try {
    let sale = request.body

    if(!sale.sale_id || !sale.value || !sale.date || !sale.client_id || !sale.product_id){
      throw new Error("sale_id, value, date, client_id, product_id are mandatory") 
    }
    
    response.send(await SaleService.updateSales(sale));
    
    logger.info(`PUT IN /sale - ${JSON.stringify(sale)}`)

  } catch (err) {
    next(err)
  }
}


module.exports = {
  createSale,
  getAllSales,
  getOneSale,
  deleteSale,
  upadateSale,
  getByProductId
}