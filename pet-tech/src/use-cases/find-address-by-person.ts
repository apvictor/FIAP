import { IAddressRepository } from '@/repositories/address.repository.interface';

export class FindAddressByPersonUseCase {
  constructor(private addressRepository: IAddressRepository) { }

  async handler(personId: number, page: number, limit: number) {
    return this.addressRepository.findAddressByPersonId(personId, page, limit)
  }
}