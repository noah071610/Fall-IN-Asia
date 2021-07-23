import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { UsersService } from './users.service';

class MockUserRepository {
  #data = [{ id: 1, email: 'noah071610@naver.com' }];
  findOne({ where: { email } }) {
    const data = this.#data.find((v) => v.email === email);
    if (data) {
      return data;
    }
    return null;
  }
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useClass: MockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('find user by email', () => {
    expect(
      service.findUserInfoByEmail('noah071610@naver.com'),
    ).resolves.toStrictEqual({
      email: 'noah071610@naver.com',
      id: 1,
    });
  });

  it.todo('if you cant find user we will return null', () => {
    expect(service.findUserInfoByEmail('noah071610@아이고')).resolves.toBe(
      null,
    );
  });
});
