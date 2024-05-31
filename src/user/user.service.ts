// Useful imports
import { Injectable } from '@nestjs/common';
import { hashSync as bcryptHashSync } from 'bcrypt'

// Prisma Service
import { PrismaService } from 'src/prisma/prisma.service';

// Schemas
import { CreateUserSchema } from './types';


@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService){}

  async create(body: any) {

    const {email, password} = CreateUserSchema.parse(body);
    const hashedPassword = bcryptHashSync(password, 10);

    await this.prisma.user.create({
      data: {
        email: email,
        password: hashedPassword
      }
    })
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  /*

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  */
}
