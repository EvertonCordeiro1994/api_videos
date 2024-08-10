// import {createServer} from 'node:http'

// const server = createServer((request, response) => {
//     response.write('funcionando')
//     response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'
import { dataBaseMemory } from './dbMemory'


const server = fastify()
const db = new dataBaseMemory()

server.post('/videos', () => {
    db.create({
        title: 'video01',
        description: 'este é o video 01',
        duration: 180,
    })

    console.log(list())


})       //criar        Create
server.get('/videos', () => 'rota 1')        //ler          Read
server.put('/videos/:id', () => 'rota 1')    //atualizar    Update
server.delete('/videos/:id', () => 'rota 1') //deletar      Delete



server.listen({ port: 3333 })