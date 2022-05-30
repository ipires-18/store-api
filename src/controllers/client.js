const ClientService = require('../services/client.service')

async function createClient(request, response, next){
  try {
    let client = request.body

    if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
      throw new Error("Name, CPF, Phone, Email and Address are mandatory") 
    }
    
    response.send(await ClientService.createClient(client));
    
    logger.info(`CREATE POST IN /client - ${JSON.stringify(client)}`)
  } catch (err) {
    next(err)
  }
}

async function getClients(request, response, next){
  try {
    response.send(await ClientService.getClients())
    logger.info(`GET IN /client`)
  } catch (err) {
    next(err)
  }
}

async function getOneClient(request, response, next){
  try {
    response.send(await ClientService.getClient(request.params.id))
    logger.info(`GET ONE IN /client`)
  } catch (err) {
    next(err)
  }
}

async function deleteClient(request, response, next){
  try {
    await ClientService.deleteClient(request.params.id)
    response.end()
    logger.info(`DELETE IN /client`)
  } catch (err) {
    next(err)
  }
}

async function upadateClient(request, response, next){
  try {
    let client = request.body

    if(!client.client_id || !client.name || !client.cpf || !client.phone || !client.email || !client.address){
      throw new Error("Name, CPF, Phone, Email and Address are mandatory") 
    }
    
    response.send(await ClientService.updateClient(client));
    
    logger.info(`PUT IN /client - ${JSON.stringify(client)}`)

  } catch (err) {
    next(err)
  }
}


module.exports = {
  createClient,
  getClients,
  getOneClient,
  deleteClient,
  upadateClient
}