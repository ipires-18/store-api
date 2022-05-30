const SupplierService = require('../services/supplier.service')

async function createSupplier(request, response, next){
  try {
    let supplier = request.body

    if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address){
      throw new Error("Name, CNPJ, Phone, Email and Address are mandatory") 
    }
    
    response.send(await SupplierService.createSupplier(supplier));
    
    logger.info(`CREATE POST IN /supplier - ${JSON.stringify(supplier)}`)
  } catch (err) {
    next(err)
  }
}

async function getSuppliers(request, response, next){
  try {
    response.send(await SupplierService.getSuppliers())
    logger.info(`GET IN /supplier`)
  } catch (err) {
    next(err)
  }
}

async function getOneSupplier(request, response, next){
  try {
    response.send(await SupplierService.getSupplier(request.params.id))
    logger.info(`GET ONE IN /supplier`)
  } catch (err) {
    next(err)
  }
}

async function deleteSupplier(request, response, next){
  try {
    await SupplierService.deleteSupplier(request.params.id)
    response.end()
    logger.info(`DELETE IN /supplier`)
  } catch (err) {
    next(err)
  }
}

async function upadateSupplier(request, response, next){
  try {
    let supplier = request.body

    if(!supplier.supplier_id || !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address){
      throw new Error("Name, CPNJ, Phone, Email and Address are mandatory") 
    }
    
    response.send(await SupplierService.updateSupplier(supplier));
    
    logger.info(`PUT IN /supplier - ${JSON.stringify(supplier)}`)

  } catch (err) {
    next(err)
  }
}


module.exports = {
  createSupplier,
  getSuppliers,
  getOneSupplier,
  deleteSupplier,
  upadateSupplier
}