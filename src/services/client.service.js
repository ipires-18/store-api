const ClientRepository   = require('../repositories/client.repository')

async function createClient(client){
  return await ClientRepository.inserClient(client)
}

async function getClients(){
  return await ClientRepository.getClients() 
}

async function getClient(id){
  return await ClientRepository.getClient(id)
}

async function deleteClient(id){
  await ClientRepository.deleteClient(id)
}

async function updateClient(client){
  return await ClientRepository.updateClient(client)
}

module.exports = {createClient, getClients, getClient, deleteClient,updateClient}