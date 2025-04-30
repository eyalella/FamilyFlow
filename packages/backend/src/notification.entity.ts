import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Notification {
  @Field((type) => Int, { description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  message: string;

  @Field(() => Boolean)
  @Column({ default: false })
  read: boolean;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
} 