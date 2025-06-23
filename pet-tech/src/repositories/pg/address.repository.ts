import { database } from "@/lib/pg/db";
import { IAddress } from "@/entities/models/address.interface";
import { IPerson } from "@/entities/models/person.interface";
import { IAddressRepository } from "../address.repository.interface";

export class AddressRepository implements IAddressRepository {
  async findAddressByPersonId(personId: number, page: number, limit: number) {
    const offset = (page - 1) * limit

    const query = `
      SELECT address.*, person.* 
      FROM address
      INNER JOIN person ON address.person_id = person.id
      WHERE person.id = $1 
      LIMIT $2 OFFSET $3
    `

    const result = await database.clientInstance?.query<(IAddress & IPerson)>(query, [
      personId, limit, offset
    ])

    return result?.rows || []
  }


  async create({ city, state, street, zip_code, person_id }: IAddress) {
    const query = `
      INSERT INTO "address" (street, city, state, zip_code, person_id)
      VALUES ($1, $2, $3, $4, $5)
    `

    const result = await database.clientInstance?.query<(IAddress & IPerson)>(query,
      [street, city, state, zip_code, person_id])

    return result?.rows[0]
  }

}