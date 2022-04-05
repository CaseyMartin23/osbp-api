import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../roles.guard';
import { WriteUpForm } from './entites/WriteUp.entity';
import { WriteUpController } from './write-up.controller';
import { WriteUpService } from './write-up.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WriteUpForm]),
  ],
  providers: [
      {
        provide: APP_GUARD,
        useClass: RolesGuard,
      },
    WriteUpService],
  controllers: [WriteUpController],
  exports: [WriteUpService],
})
export class WriteUpModule {}