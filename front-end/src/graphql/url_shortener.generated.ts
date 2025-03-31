import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUrlsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUrlsQuery = { __typename?: 'Query', urlShorteners: Array<{ __typename?: 'UrlShortenerDto', id?: number | null, originalUrl: string, shortUrl: string }> };

export type AddUrlMutationVariables = Types.Exact<{
  originalUrl: Types.Scalars['String'];
  shorten: Types.Scalars['String'];
}>;


export type AddUrlMutation = { __typename?: 'Mutation', urlShortener: { __typename?: 'UrlShortenerDto', id?: number | null, originalUrl: string, shortUrl: string } };


export const GetUrlsDocument = gql`
    query getUrls {
  urlShorteners {
    id
    originalUrl
    shortUrl
  }
}
    `;
export function useGetUrlsQuery(baseOptions?: Apollo.QueryHookOptions<GetUrlsQuery, GetUrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUrlsQuery, GetUrlsQueryVariables>(GetUrlsDocument, options);
      }
export function useGetUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUrlsQuery, GetUrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUrlsQuery, GetUrlsQueryVariables>(GetUrlsDocument, options);
        }
export type GetUrlsQueryHookResult = ReturnType<typeof useGetUrlsQuery>;
export type GetUrlsLazyQueryHookResult = ReturnType<typeof useGetUrlsLazyQuery>;
export type GetUrlsQueryResult = Apollo.QueryResult<GetUrlsQuery, GetUrlsQueryVariables>;
export const AddUrlDocument = gql`
    mutation addUrl($originalUrl: String!, $shorten: String!) {
  urlShortener(originalUrl: $originalUrl, shortUrl: $shorten) {
    id
    originalUrl
    shortUrl
  }
}
    `;
export function useAddUrlMutation(baseOptions?: Apollo.MutationHookOptions<AddUrlMutation, AddUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUrlMutation, AddUrlMutationVariables>(AddUrlDocument, options);
      }
export type AddUrlMutationHookResult = ReturnType<typeof useAddUrlMutation>;
export type AddUrlMutationResult = Apollo.MutationResult<AddUrlMutation>;
export type AddUrlMutationOptions = Apollo.BaseMutationOptions<AddUrlMutation, AddUrlMutationVariables>;