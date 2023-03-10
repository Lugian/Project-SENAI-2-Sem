# Project-SENAI-2-Sem
## Rodando os arquivos na sua maquina

### Requisitos:
Node v16.15.1 ou superior
Xampp ou outro pacote de servidores (que inclua o MySql)

- Banco de dados
    - Inicie o servidor MySql
    - Execute o script [*/Database/Script/ddl.sql*](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/Database/Script/ddl.sql) no PhpMyAdmin ou terminal MySql
    - Opcionalmente, execute o script [*/Database/Script/dml.sql*](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/Database/Script/dml.sql) para povoar o banco de dados
 - Backend 
    - Acesse no terminal CMD a pasta *Backend*
    - Utilizando o gerenciador npm, instale as depêndencias do projeto
      - *npm install express cors mysql*
      - *npm i*
    - Incie com node 
      - *nodemon*
      - *node .*
      - *node index.js*
- Frontend
  - Utilizando a extensão Live Server, abra o arquivo [*/Frontend/index.html*](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/Frontend/index.html)
  
  ## Objetivo do projeto
