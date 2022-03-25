import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { IsBoolean, IsDate, IsEnum, IsMongoId, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';

enum WriteUpState {
  Done = 'DONE',
  Pending = 'PENDING',
  Draft = 'DRAFT',
}

@Entity('writeUpForms')
export class WriteUpForm {
  @ObjectIdColumn()
  @IsMongoId()
  id: ObjectId;

  @Column()
  @IsMongoId()
  userId: ObjectId;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  siteName: string;

  @Column()
  @IsBoolean()
  fullyTorchedAdhesiveAndAllJointsBleeding: boolean;

  @Column()
  @IsBoolean()
  keyAreasCheckedForMoisture: boolean;

  @Column()
  @IsBoolean()
  noPipeProtrusionsCloseToWalls: boolean;

  @Column()
  @IsBoolean()
  screedsInCorrectDirection: boolean;

  @Column()
  @IsBoolean()
  surfacesCleanedAndCorrectedForPrimer: boolean;

  @Column()
  @IsEnum(WriteUpState)
  state: string = WriteUpState.Pending;

  @Column()
  @IsDate()
  createdAt: Date = new Date();

  @Column()
  @IsDate()
  updatedAt: Date;
}
