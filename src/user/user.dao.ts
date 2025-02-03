import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
// Data Access Object = Camada que acessa os dados do banco
export class UserDAO {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findById(id: number) {
    return this.repository.findOneBy({
      id: id,
    });
  }

  find() {
    return this.repository.find();
  }

  create(user: User) {
    return this.repository.save(user);
  }

  update(user: User) {
    return this.repository.update(
      {
        id: user.id,
      },
      user,
    );
  }

  delete(id: number) {
    return this.repository.delete({
      id: id,
    });
  }
}
