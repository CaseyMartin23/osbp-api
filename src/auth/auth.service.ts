import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/SignUp.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/User.entity';

type LoginResponse = {
  user: Partial<User>;
  token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public login(user: Partial<User>): LoginResponse {
    return {
      user,
      token: this.jwtService.sign({ email: user.email, sub: user.id }),
    };
  }

  public async signUpUser(signUpDto: SignUpDto): Promise<User> {
    return await this.usersService.create(signUpDto)
  }
}
