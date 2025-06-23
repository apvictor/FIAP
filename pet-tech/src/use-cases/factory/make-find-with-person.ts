import { UserRepository } from '@/repositories/pg/user.repository';
import { FindWithPersonUseCase } from '../find-with-person';

export function makeFindWithPerson() {
  const userRepository = new UserRepository()

  const findWithPersonUseCase = new FindWithPersonUseCase(userRepository)

  return findWithPersonUseCase
}