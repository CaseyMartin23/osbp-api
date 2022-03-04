import {
  Controller,
  Post,
  Get,
  Body,
  Put,
} from '@nestjs/common';
import { WriteUpService } from './write-up.service';

@Controller('write-up/:userId')
export class WriteUpController {
  constructor(private writeUpService: WriteUpService) {}

  @Post()
  public create(@Body() body) {
    // create write-up
    console.log('writeup-create-body:', body);
  }

  @Put(':id')
  public async updateWriteUp() {
    // update write-up by id
    return 'updated write-up';
  }

  @Get(':id')
  public getWriteUp() {
    // get write-up by Id
    return 'fetched write-up';
  }

  @Get()
  public getUserWriteUps() {
    // get user write-ups
    return 'fetched write-ups';
  }
}
