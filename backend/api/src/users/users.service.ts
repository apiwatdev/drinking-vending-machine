import { Injectable } from '@nestjs/common';
import { UsersData } from '../../../data/data.js';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  findOne(username) {
    return this.users.find((user) => user.username === username);
  }
}
