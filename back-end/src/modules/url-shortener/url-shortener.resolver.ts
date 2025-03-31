import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UrlShortenerDto } from './url-shortener.dtos';
import { UrlShortenerService } from './url-shortener.service';

@Resolver()
export class UrlShortenerResolver {
  constructor(private urlShortenerService: UrlShortenerService) {}

  @Query(() => [UrlShortenerDto])
  urlShorteners() {
    return this.urlShortenerService.findAll();
  }

  @Mutation(() => UrlShortenerDto)
  urlShortener(
    @Args('originalUrl', { type: () => String }) originalUrl: string,
    @Args('shortUrl', { type: () => String }) shortUrl: string,
    @Args('numberOfClicks', { type: () => Number, nullable: true })
    numberOfClicks = 0,
  ) {
    return this.urlShortenerService.save(originalUrl, shortUrl, numberOfClicks);
  }
}
