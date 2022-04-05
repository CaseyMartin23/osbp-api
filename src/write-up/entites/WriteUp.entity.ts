import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { IsArray, IsBoolean, IsDate, IsEnum, IsMongoId, IsString } from 'class-validator';
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
  @IsArray()
  allBleedingJointImages: any[];

  @Column()
  @IsBoolean()
  keyAreasCheckedForMoisture: boolean;

  @Column()
  @IsArray()
  keyAreasMoistureTempImages: any[];

  @Column()
  @IsBoolean()
  noPipeProtrusionsCloseToWalls: boolean;

  @Column()
  @IsArray()
  noProtrusionsImages: any[];

  @Column()
  @IsBoolean()
  screedsInCorrectDirection: boolean;

  @Column()
  @IsArray()
  screedImages: any[];

  @Column()
  @IsBoolean()
  surfacesCleanedAndCorrectedForPrimer: boolean;

  @Column()
  @IsArray()
  cleanedAndPrepedSurfaceImages: any[];

  @Column()
  @IsArray()
  detailedImagesOfCorners: any[];

  @Column()
  @IsArray()
  protrutionImages: any[];

  @Column()
  @IsArray()
  terminationImages: any[];

  @Column()
  @IsArray()
  staggeredOverlapsImages: any[];

  @Column()
  @IsArray()
  counterflashingImages: any[];

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
