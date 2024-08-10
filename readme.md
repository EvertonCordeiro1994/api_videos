Claro! Aqui está a documentação sem formatação definida:

---

# API de Gerenciamento de Vídeos

## Descrição

Este projeto é meu primeiro backend, desenvolvido com a ajuda de uma videoaula no YouTube. A API permite gerenciar vídeos com operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) e inclui uma funcionalidade de busca.

## Funcionalidades

- Criar Vídeo: Adiciona um novo vídeo à base de dados.
- Listar Vídeos: Recupera todos os vídeos cadastrados com opção de filtragem.
- Atualizar Vídeo: Atualiza os detalhes de um vídeo específico.
- Deletar Vídeo: Remove um vídeo da base de dados.

## Tecnologias Utilizadas

- Fastify: Framework para Node.js.
- JavaScript: Linguagem de programação.
- Base de Dados em Memória: Armazenamento temporário dos vídeos.

## Endpoints da API

### POST /videos

Cria um novo vídeo.

Request Body:

{
    "title": "string",
    "description": "string",
    "duration": 180
}

Respostas:

- 201 Created: Vídeo criado com sucesso.
- 400 Bad Request: Dados inválidos.

### GET /videos

Lista todos os vídeos com opção de filtragem.

Query Parameters:

- search (opcional): Termo para filtrar vídeos por título ou descrição.

Respostas:

- 200 OK: Lista de vídeos.

### PUT /videos/:id

Atualiza um vídeo existente.

URL Parameters:

- id: ID do vídeo a ser atualizado.

Request Body:

{
    "title": "string",
    "description": "string",
    "duration": 180
}

Respostas:

- 200 OK: Vídeo atualizado com sucesso.
- 404 Not Found: Vídeo não encontrado.

### DELETE /videos/:id

Remove um vídeo existente.

URL Parameters:

- id: ID do vídeo a ser removido.

Respostas:

- 200 OK: Vídeo removido com sucesso.
- 404 Not Found: Vídeo não encontrado.

## Instruções de Uso

1. Clone o Repositório:

    git clone <URL-do-repositório>

2. Instale as Dependências:

    Navegue até o diretório do projeto e execute:

    npm install

3. Inicie o Servidor:

    Execute:

    node index.js

    O servidor estará rodando em http://localhost:3333.

## Observações

Este projeto foi desenvolvido como meu primeiro backend, utilizando uma videoaula do YouTube como guia. Agradeço por acompanhar meu trabalho e estou aberto a sugestões e feedback.
