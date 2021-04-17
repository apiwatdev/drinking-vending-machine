import { Injectable } from '@nestjs/common';
import { UsersData } from '../../../data/data.js';

@Injectable()
export class UsersService {
  private readonly users = UsersData;
  findOne(username) {
    return this.users.find((user) => user.username === username);
  }
  defaultUser() {
    return this.users[0];
  }
}
