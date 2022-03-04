import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteUpForm } from './entites/WriteUp.entity';
import { WriteUpController } from './write-up.controller';
import { WriteUpService } from './write-up.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WriteUpForm]),
  ],
  providers: [WriteUpService],
  controllers: [WriteUpController],
  exports: [WriteUpService],
})
export class WriteUpModule {}