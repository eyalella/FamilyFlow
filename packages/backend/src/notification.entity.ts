import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Notification {
  @Field((): typeof Int => Int, { description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field((): typeof String => String)
  @Column()
  message: string;

  @Field((): typeof Boolean => Boolean)
  @Column({ default: false })
  read: boolean;

  @Field((): typeof Date => Date)
  @CreateDateColumn()
  createdAt: Date;
} 