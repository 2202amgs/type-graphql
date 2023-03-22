import { Entity, ObjectIdColumn, Column, Index, BaseEntity } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
@Index(["email"], { unique: true })
export class User extends BaseEntity{
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}

