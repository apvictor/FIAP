import { makeCreatePersonUseCase } from "@/use-cases/factory/make-create-person-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    birth: z.coerce.date(),
    email: z.string().email(),
    user_id: z.coerce.number()
  })

  const data = registerBodySchema.parse(request.body)

  const createPersonUseCase = makeCreatePersonUseCase()

  const person = await createPersonUseCase.handler(data)

  return reply.status(201).send(person)
}