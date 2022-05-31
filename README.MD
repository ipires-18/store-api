# Projeto Store-api

  ## Descrição

  Criação de um projeto que faz o controle básico do fluxo de vendas de uma loja 

  - Pode fazer cadastro de produto
  - Pode fazer cadastro de clientes
  - Pode fazer cadastro de vendas 
  - Pode fazer cadastro de Fornecedores 
  
  ## O que foi implementado ?

  - [x] CRUD de Produto
  - [x] CRUD de Clientes
  - [x] CRUD de Vendas 
  - [x] CRUD de Fornecedor 
  - [x] Regras de negócios
    - [x] Quando exclui uma venda o estoque acrescenta um valor
    - [x] Quando se vende um item o estoque decrementa um valor
  - [x] BD usado ElephantSQL
  - [x] Faz logs dos endponts
   

  ## Para iniciar o projeto 

  * Para iniciar o projeto você ira precisar criar uma instancia no
  [ElephantSQL](https://www.elephantsql.com/).

  *  Crie as tabelas e seus respectivos campos, segue o diagrama do  banco baixo: 

  <img src="https://raw.githubusercontent.com/ipires-18/store-api/main/Diagrama-DB.png" alt="javascript" width="500" height="500"/> </a> </p>

 * crie um arquivo chamado .env no repositorio na parte raiz do projeto e insira sua connectionString ou você pode 
 inserir diretamento no arquivo db.js.

   - <b>Exemplo arquivo .env:</b>

      DBconnection="valordasuaconnectionstring"
   - <b>Exemplo arquivo .db.js:</b>

      connectionString="valordasuaconnectionstring"

 * Por ultimo rode o seguinte comando em seu terminal
   
    yarn ou npm i 
   
   yarn dev ou npm run dev
