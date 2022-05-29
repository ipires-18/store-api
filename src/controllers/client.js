async function createClient(request, response, next){
  try {
    let client = request.body

    if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
      throw new Error("Name, CPF, Phone, Email and Address are mandatory") 
    }
    // ClientService

    response.send({})
    logger.info(`CREATE POST IN CLIENT - ${JSON.stringify(client)}`)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createClient
}