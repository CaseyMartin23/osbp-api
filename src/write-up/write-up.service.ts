import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';

@Injectable()
export class WriteUpService {

  public async create(writeUpDto) {
    console.log("create-writeUpDto->", writeUpDto)
  }

  public async update(updateWriteUpDto) {
    console.log("update-updateWriteUpDto->", updateWriteUpDto)
  }

  public async getById(widgetId: ObjectID) {
    console.log("getById-widgetId->", widgetId)
  }

  public async getByUserId(userId: ObjectID) {
    console.log("getByUserId-userId->", userId)
  }
}