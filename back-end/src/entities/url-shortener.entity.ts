import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UrlShortener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  originalUrl: string;

  @Column({ unique: true })
  shortUrl: string;
}
