import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsArray, IsDate, IsMongoId, IsString } from 'class-validator';
import { Role } from 'src/role.enum';

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
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsArray()
  roles: Role[] = [Role.User];

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}
