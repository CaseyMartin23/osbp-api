import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsDate, IsMongoId, IsString } from 'class-validator';

@Entity('users')
export class User {
  @ObjectIdColumn()
  @IsMongoId()
  id: ObjectID;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column()
  @IsString()
  username: string;

  @Column()
  @IsString()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsDate()
  createdAt: string;

  @Column()
  @IsDate()
  updatedAt: string;
}
