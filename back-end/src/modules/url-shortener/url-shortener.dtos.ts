import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UrlShortenerDto {
  @Field((_type) => Int, { nullable: true })
  id?: number;

  @Field()
  originalUrl: string;

  @Field()
  shortUrl: string;

  @Field((_type) => Int, { nullable: true })
  numberOfClicks?: number;
}
