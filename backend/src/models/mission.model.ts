/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 50 })
  title: string;

  @Column()
  reward: number;

  @Column()
  active: boolean;

  @Exclude() @Column() createdAt: Date = new Date();
  @Exclude() @Column() createdBy = 'user';
  @Exclude() @Column() isDeleted = false;
}
