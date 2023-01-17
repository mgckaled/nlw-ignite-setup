import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'

const app = Fastify()
const prisma = new PrismaClient()

// mecanismo de segurança - permite aplicações frontend buscar dados do backend
app.register(cors)

app.get('/', async () => {
	const habits = await prisma.habit.findMany()

	return habits
})

app
	.listen({
		port: 3333
	})
	.then(() => {
		console.log('HTTP Server running!')
	})
