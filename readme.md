Documentação da API de Gerenciamento de Vídeos

Descrição

Este projeto é um backend para gerenciamento de vídeos, desenvolvido com Fastify e PostgreSQL, e foi criado como parte de um estudo pessoal. A API permite realizar operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) e inclui uma funcionalidade de busca.

Funcionalidades

- Criar Vídeo: Adiciona um novo vídeo à base de dados.
- Listar Vídeos: Recupera todos os vídeos cadastrados com opção de filtragem por título.
- Atualizar Vídeo: Atualiza os detalhes de um vídeo específico.
- Deletar Vídeo: Remove um vídeo da base de dados.

Tecnologias Utilizadas

- Fastify: Framework para Node.js.
- PostgreSQL: Sistema de gerenciamento de banco de dados.
- JavaScript: Linguagem de programação.
- dotenv: Carregamento de variáveis de ambiente.
- crypto: Geração de identificadores únicos.

Estrutura do Projeto

- db.js: Configuração da conexão com o PostgreSQL.
  - SQL para criar a tabela `videos`:
    CREATE TABLE videos (
      id TEXT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      duration INTEGER CHECK (duration > 0)
    );

- dbMemory.js: Implementa um banco de dados em memória para testes e desenvolvimento.
  - Métodos: list(search), create(video), update(id, video), delete(id)

- db-postgres.js: Implementa a lógica de acesso ao banco de dados PostgreSQL.
  - Métodos: list(search), create(video), update(id, video), delete(id)

- server.js: Configuração do servidor Fastify com rotas para operações CRUD.
  - Rotas:
    - POST /videos: Cria um novo vídeo.
    - GET /videos: Lista todos os vídeos, com opção de filtragem.
    - PUT /videos/:id: Atualiza um vídeo existente.
    - DELETE /videos/:id: Remove um vídeo.

Instruções para Inicialização

1. Clone o Repositório:
   git clone <URL-do-repositório>

2. Instale as Dependências:
   Navegue até o diretório do projeto e execute:
   npm install

3. Configure o Banco de Dados:
   Crie a tabela no PostgreSQL:
   node create-table.js

4. Inicie o Servidor:
   Execute:
   node server.js
   O servidor estará disponível em http://localhost:3333.

Exemplos de Requisições

- Criar Vídeo
  POST /videos HTTP/1.1
  Host: localhost:3333
  Content-Type: application/json
  
  {
      "title": "video node",
      "description": "este é o video 01",
      "duration": 180
  }

- Listar Vídeos
  GET /videos?search=node HTTP/1.1
  Host: localhost:3333

- Atualizar Vídeo
  PUT /videos/e87f4bfc-dcd3-4e57-9e52-f49ef48e9737 HTTP/1.1
  Host: localhost:3333
  Content-Type: application/json
  
  {
      "title": "video02",
      "description": "este é o video 02",
      "duration": 180
  }

- Deletar Vídeo
  DELETE /videos/e87f4bfc-dcd3-4e57-9e52-f49ef48e9737 HTTP/1.1
  Host: localhost:3333

Observações

Este projeto é uma implementação inicial e pode ser expandido com mais funcionalidades, como autenticação, validação de entrada, e integração com um front-end.
