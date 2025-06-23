import { database } from "@/lib/pg/db";
import { IUserRepository } from "../user.repository.interface";
import { IUser } from "@/entities/models/user.interface";
import { IPerson } from "@/entities/models/person.interface";

export class UserRepository implements IUserRepository {
  public async create({ username, password }: IUser) {
    const result = await database.clientInstance?.query<IUser>(
      `INSERT INTO "user" (username, password)
      VALUES ($1, $2)
      RETURNING *`,
      [username, password]
    )

    return result?.rows[0]
  }

  public async findWithPerson(userId: number) {
    const result = await database.clientInstance?.query<IUser & IPerson>(
      `SELECT * from "user"
      LEFT JOIN person ON "user".id = person.user_id
      WHERE "user".id = $1`,
      [userId]
    )

    return result?.rows[0]
  }
}