import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsBoolean, IsDate, IsMongoId, IsString } from 'class-validator';

@Entity('writeUpForms')
export class WriteUpForm {
  @ObjectIdColumn()
  @IsMongoId()
  id: ObjectID;

  @ObjectIdColumn()
  @IsMongoId()
  userId: ObjectID;

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
  @IsDate()
  createdAt: Date = new Date();

  @Column()
  @IsDate()
  updatedAt: Date;
}
