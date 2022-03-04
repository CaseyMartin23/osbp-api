import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteUp } from './entites/WriteUp.entity';
import { WriteUpController } from './write-up.controller';
import { WriteUpService } from './write-up.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WriteUp]),
  ],
  providers: [WriteUpService],
  controllers: [WriteUpController],
  exports: [WriteUpService],
})
export class WriteUpModule {}