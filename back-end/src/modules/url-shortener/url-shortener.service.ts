import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlShortener } from '../../entities/url-shortener.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlShortenerService {
  constructor(
    @InjectRepository(UrlShortener)
    private urlShortenerRepository: Repository<UrlShortener>,
  ) {}

  save(originalUrl: string, shortUrl: string) {
    return this.urlShortenerRepository.save({ originalUrl, shortUrl });
  }

  findAll(): Promise<UrlShortener[]> {
    return this.urlShortenerRepository.find();
  }
}
