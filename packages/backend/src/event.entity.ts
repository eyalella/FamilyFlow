import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Event {
  @Field((): typeof Int => Int, { description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field((): typeof String => String)
  @Column()
  title: string;

  @Field((): typeof String => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field((): typeof String => String)
  @Column()
  date: string;
} 