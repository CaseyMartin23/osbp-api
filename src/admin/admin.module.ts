import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/User.entity';
import { WriteUpForm } from '../write-up/entites/WriteUp.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserService } from 'src/user/user.service';
import { WriteUpService } from 'src/write-up/write-up.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, WriteUpForm])],
  providers: [
    AdminService,
    UserService,
    WriteUpService,
  ],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
