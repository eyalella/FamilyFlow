import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field((): typeof Int => Int, { description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field((): typeof String => String)
  @Column()
  name: string;

  @Field((): typeof String => String)
  @Column({ unique: true })
  email: string;
} 