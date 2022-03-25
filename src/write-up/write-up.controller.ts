import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  UseGuards,
  Param,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { WriteUpFormDto } from './dtos/WriteUpForm.dto';
import { WriteUpService } from './write-up.service';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/:userId/write-up')
export class WriteUpController {
  constructor(private writeUpService: WriteUpService) {}

  @Post()
  public async create(
    @Param('userId') userId: string,
    @Body() createWriteUpFormDto: WriteUpFormDto,
  ) {
    return await this.writeUpService.create(userId, createWriteUpFormDto);
  }

  @Put(':id')
  public async updateWriteUp(
    @Param('id') writeUpId: string,
    @Body() updateWriteUpFormDto: WriteUpFormDto,
  ) {
    return await this.writeUpService.update(writeUpId, updateWriteUpFormDto);
  }

  @Get(':id')
  public getWriteUp(@Param('id') writeUpId: string) {
    return this.writeUpService.getById(writeUpId);
  }

  @Get()
  public getUserWriteUps(
    @Param('userId') userId: string,
    @Query('state') writeUpState: string,
  ) {
    return this.writeUpService.getUserWriteUps(userId, writeUpState);
  }

}
