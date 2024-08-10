import fastify from 'fastify'
import { dataBaseMemory } from './dbMemory.js'

const server = fastify()
const db = new dataBaseMemory()

// Criar (Create)
server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body
    
    db.create({ title, description, duration })
    
    console.log(db.list())
    
    return reply.status(201).send({ message: 'Vídeo criado com sucesso!' })
})       

// Ler (Read)
server.get('/videos', (request, reply) => {
    const search = request.query.search
    const videos = db.list(search)  

    console.log(search)
    return reply.send(videos)
})

// Atualizar (Update)
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body
    
    db.update(videoId, { title, description, duration })
    
    return reply.status(200).send({ message: 'Vídeo atualizado com sucesso!' })
})

// Deletar (Delete)
server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    db.delete(videoId)

    return reply.status(200).send({ message: 'Vídeo deletado com sucesso!' })
}) 

server.listen({ port: 3333 })