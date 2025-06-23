import { Person } from '@/entities/person.entity'
import { IPersonRepository } from '@/repositories/person.repository.interface'

export class CreatePersonUseCase {
  constructor(private personRepository: IPersonRepository) { }

  async handler(person: Person) {
    return this.personRepository.create(person)
  }
}
