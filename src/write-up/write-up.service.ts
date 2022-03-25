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
      this.validateId(userId, 'user');

      const parsedWriteUpFrom = this.parseWriteUpForm(userId, writeUpDto)
      const { identifiers } = await this.writeUpFormRepository.insert(parsedWriteUpFrom);
      return await this.getById(identifiers[0].id);
    } catch (err) {
      throw new Error(err);
    }
  }

  private parseWriteUpForm(userId: string | ObjectId, writeUpToCreate: WriteUpFormDto){
    const {
      name,
      siteName,
      fullyTorchedAdhesiveAndAllJointsBleeding,
      keyAreasCheckedForMoisture,
      noPipeProtrusionsCloseToWalls,
      screedsInCorrectDirection,
      surfacesCleanedAndCorrectedForPrimer
    } = writeUpToCreate;
    const writeUpForm = new WriteUpForm()

    writeUpForm.userId = new ObjectId(userId);
    writeUpForm.name = name;
    writeUpForm.siteName = siteName;
    writeUpForm.fullyTorchedAdhesiveAndAllJointsBleeding = fullyTorchedAdhesiveAndAllJointsBleeding;
    writeUpForm.keyAreasCheckedForMoisture = keyAreasCheckedForMoisture;
    writeUpForm.noPipeProtrusionsCloseToWalls = noPipeProtrusionsCloseToWalls;
    writeUpForm.screedsInCorrectDirection = screedsInCorrectDirection;
    writeUpForm.surfacesCleanedAndCorrectedForPrimer = surfacesCleanedAndCorrectedForPrimer;

    return writeUpForm;
  }

  public async update(id: string | ObjectId, updateWriteUpDto: WriteUpFormDto) {
    try {
      this.validateId(id, 'write-up form');

      await this.writeUpFormRepository.update(
        new ObjectId(id),
        updateWriteUpDto,
      );
      return await this.getById(id);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getById(id: string | ObjectId) {
    try {
      this.validateId(id, 'write-up form');

      return await this.writeUpFormRepository.findOne(new ObjectId(id));
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getUserWriteUps(
    userId: string | ObjectId,
    writeUpState?: string,
  ) {
    let userWriteUps;

    try {
      this.validateId(userId, 'user');

      if (writeUpState) {
        userWriteUps = await this.writeUpFormRepository.find({
          userId: new ObjectId(userId),
          state: writeUpState,
        });
      } else {
        userWriteUps = await this.writeUpFormRepository.find({
          userId: new ObjectId(userId),
        });
      }

      return userWriteUps;
    } catch (err) {
      throw new Error(err);
    }
  }

  private validateId(id: string | ObjectId, idType: string) {
    if (!ObjectId.isValid(id)) throw new Error(`Invalid ${idType} ID`);
  }
}
