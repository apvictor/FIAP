import { database } from '@/lib/pg/db'
import { IPersonRepository } from '../person.repository.interface'
import { IPerson } from '@/entities/models/person.interface'

export class PersonRepository implements IPersonRepository {
  async create({ birth, cpf, email, name, user_id }: IPerson) {
    const result = await database.clientInstance?.query<IPerson>(
      `INSERT INTO person (birth, cpf, email, name, user_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [birth, cpf, email, name, user_id])

    return result?.rows[0]
  }
}
