import { IUserRepository } from '@/repositories/user.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-erro'

export class FindWithPersonUseCase {
  constructor(private userRepository: IUserRepository) { }

  async handler(userId: number) {
    const user = await this.userRepository.findWithPerson(userId)

    if (!user) throw new ResourceNotFoundError()

    return user
  }
}