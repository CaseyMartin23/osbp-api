import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { WriteUpFormDto } from './dtos/WriteUpForm.dto';
import { WriteUpForm } from './entites/WriteUp.entity';

@Injectable()
export class WriteUpService {
  constructor(
    @InjectRepository(WriteUpForm)
    private readonly writeUpFormRepository: Repository<WriteUpForm>,
  ) {}

  public async create(userId: string | ObjectId, writeUpDto: WriteUpFormDto) {
    try {
      this.validateId(userId, 'user')

      const { identifiers } = await this.writeUpFormRepository.insert({
        userId: new ObjectId(userId),
        ...writeUpDto,
      });
      return await this.getById(identifiers[0].id);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async update(id: string | ObjectId, updateWriteUpDto: WriteUpFormDto) {
    try {
      this.validateId(id, 'write-up form')
      
      await this.writeUpFormRepository.update(new ObjectId(id), updateWriteUpDto);
      return await this.getById(id);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getById(id: string | ObjectId) {
    try {
      this.validateId(id, 'write-up form')

      return await this.writeUpFormRepository.findOne(new ObjectId(id));
    } catch (err) {
      throw new Error(err)      
    }
  }

  public async getByUserId(userId: string | ObjectId) {
    try {
      this.validateId(userId, 'user')

      const userWriteUps = await this.writeUpFormRepository.find({ userId: new ObjectId(userId) })
      console.log('userWriteUps:', userWriteUps)
      return userWriteUps
    } catch (err) {
      throw new Error(err)
    }
  }

  private validateId(id: string | ObjectId, idType: string){
    if(!ObjectId.isValid(id)) throw new Error(`Invalid ${idType} ID`)
  }
}
