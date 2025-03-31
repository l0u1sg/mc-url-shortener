export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MessageDto = {
  __typename?: 'MessageDto';
  id?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  incrementClickCount: UrlShortenerDto;
  message: MessageDto;
  urlShortener: UrlShortenerDto;
};


export type MutationIncrementClickCountArgs = {
  shortUrl: Scalars['String'];
};


export type MutationMessageArgs = {
  message: Scalars['String'];
};


export type MutationUrlShortenerArgs = {
  numberOfClicks?: InputMaybe<Scalars['Float']>;
  originalUrl: Scalars['String'];
  shortUrl: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  messages: Array<MessageDto>;
  urlShorteners: Array<UrlShortenerDto>;
};

export type UrlShortenerDto = {
  __typename?: 'UrlShortenerDto';
  id?: Maybe<Scalars['Int']>;
  numberOfClicks?: Maybe<Scalars['Int']>;
  originalUrl: Scalars['String'];
  shortUrl: Scalars['String'];
};
