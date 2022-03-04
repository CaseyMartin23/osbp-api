import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User.entity';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from 'src/auth/dto/SignUp.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ){}

  public async create(user: SignUpDto): Promise<User> {
    const existingUser = await this.findByEmail(user.email)
    
    if(existingUser) {
      throw new Error('User Already Exists')
    } else {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      const newUser = new User()

      newUser.firstName = user.firstName;
      newUser.lastName = user.lastName;
      newUser.email = user.email;
      newUser.username = user.username;
      newUser.password = hashedPassword;
      
      const createdUser = await this.userRepository.save(newUser)
      delete createdUser.password

      return createdUser;
    }
  }

  public async findByEmail(email: string): Promise<User> {
    const [user] = await this.userRepository.find({ email });
    return user;
  }
}