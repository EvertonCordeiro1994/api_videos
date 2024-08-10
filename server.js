import { fastify } from 'fastify'
import { dataBaseMemory } from './dbMemory.js'

const server = fastify()
const db = new dataBaseMemory()

server.post('/videos', (request, reply) => {
    const { title,description,duration} = request.body

    db.create({
        title,
        description,
        duration,
    })

    console.log(db.list())

    return reply.status(201).send()


})       
server.get('/videos', () => 'rota 1')        
server.put('/videos/:id', () => 'rota 1')    
server.delete('/videos/:id', () => 'rota 1') 



server.listen({ port: 3333 })