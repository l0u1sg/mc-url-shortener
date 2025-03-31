import { Module } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { UrlShortener } from '../../entities/url-shortener.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlShortenerResolver } from './url-shortener.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UrlShortener])],
  providers: [UrlShortenerService, UrlShortenerResolver],
})
export class UrlShortenerModule{}
