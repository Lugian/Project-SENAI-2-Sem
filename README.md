# Project SENAI 2° Sem
## Rodando os arquivos na sua maquina

### Requisitos:
- [X] Node v16.15.1 ou superior
- [X] Xampp ou outro pacote de servidores (que inclua o MySql)
<br></br>
- Banco de dados
    - Inicie o servidor MySql
    - Execute o script [*/Database/Script/ddl.sql*](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/Database/Script/ddl.sql) no PhpMyAdmin ou terminal MySql
    - Opcionalmente, execute o script [*/Database/Script/dml.sql*](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/Database/Script/dml.sql) para povoar o banco de dados
 - Backend 
    - Acesse no terminal CMD a pasta *Backend*
    - Utilizando o gerenciador npm, instale as depêndencias do projeto
      - *```npm install express cors mysql```*
      - *```npm i```*
    - Incie com node 
      - *```nodemon```*
      - *```node .```*
      - *```node index.js```*
- Frontend
  - Utilizando a extensão Live Server, abra o arquivo [*/Frontend/index.html*](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/Frontend/index.html)
  <br></br>
  
## Objetivo descrito
<p>&emsp;&emsp;Entre os temas propostos para o projeto, escolhi desenvolver um gerenciamento para emprestimos de uma livraria. O desenvolvimento <b>Fullstack</b> desse projeto, visa um sistema simples de <b><i>CRUD</i> sem relacionamento</b>.<br>
Na parte do usuário (desenvolvimento do Front) ele poderá adicionar e excluir registros, também podendo ser realizado o CRUD completo utilizando o <i>framework Insomnia</i>. </p>

![](https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/screen.gif)

Finalizando, há verificações para os campos de registros do nosso formulário e um campo calculavel de cobrança
<br></br>
## Mapa de pastas
<img src="https://github.com/Lugian/Project-SENAI-2-Sem/blob/main/pastas_miro.jpg" width="500px">

