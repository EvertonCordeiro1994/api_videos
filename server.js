import fastify from 'fastify';
// import { dataBaseMemory } from './dbMemory.js';
import { dataBasePostgres } from './db-postgres.js';

const server = fastify();
// const db = new dataBaseMemory();
const db = new dataBasePostgres();

// Criar (Create)
server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body;

    await db.create({ title, description, duration });
    // Assumindo que `list` é um método assíncrono
    await db.list(); // apenas para garantir que a operação foi completada

    return reply.status(201).send({ message: 'Vídeo criado com sucesso!' });
});

// Ler (Read)
server.get('/videos', async (request, reply) => {
    const search = request.query.search;
    const videos = await db.list(search);

    return reply.send(videos);
});

// Atualizar (Update)
server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body;

    await db.update(videoId, { title, description, duration });
    return reply.status(200).send({ message: 'Vídeo atualizado com sucesso!' });
});

// Deletar (Delete)
server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;

    await db.delete(videoId);
    return reply.status(200).send({ message: 'Vídeo deletado com sucesso!' });
});

server.listen({ port: process.env.port ?? 3333 });
