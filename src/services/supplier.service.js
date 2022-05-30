const SupplierRepository   = require('../repositories/supplier.repository')

async function createSupplier(supplier){
  return await SupplierRepository.inserSupplier(supplier)
}

async function getSuppliers(){
  return await SupplierRepository.getSuppliers() 
}

async function getSupplier(id){
  return await SupplierRepository.getSupplier(id)
}

async function deleteSupplier(id){
  await SupplierRepository.deleteSupplier(id)
}

async function updateSupplier(supplier){
  return await SupplierRepository.updateSupplier(supplier)
}

module.exports = {createSupplier, getSuppliers, getSupplier, deleteSupplier,updateSupplier}