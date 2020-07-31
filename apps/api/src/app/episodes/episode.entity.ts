import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("episode")
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  link: string;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ nullable: true })
  publishDate: Date;

  @Column({ nullable: true })
  duration: string;

  @Column({ nullable: true })
  keywords: string;

  @Column({ nullable: true })
  imageLink: string;
}
