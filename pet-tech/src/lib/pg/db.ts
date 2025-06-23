import { env } from "@/env";
import { Pool, PoolClient } from "pg";

const CONFIG = {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  database: env.DATABASE_NAME,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
}

export class Database {
  private pool: Pool
  private client: PoolClient | undefined

  constructor() {
    this.pool = new Pool(CONFIG)
    this.connection()
  }

  private async connection() {
    try {
      this.client = await this.pool.connect()
    } catch (error) {
      console.error(`Error connection to database: ${error}`)

      throw new Error(`Error connection to database: ${error}`)
    }
  }

  get clientInstance() {
    return this.client
  }
}

export const database = new Database()