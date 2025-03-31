import React from 'react';
import { useGetUrlsQuery } from './graphql/url_shortener.generated';

function Urls() {
  const { data, refetch } = useGetUrlsQuery();
  const urls = data?.urlShorteners;

  return (
    <section className="container mx-auto py-8">
      <div
        data-cy="urlContainer"
        className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
      >
        <div
          className="font-semibold text-xl"
        >
          Liste des URLs raccourcies :
        </div>
        <button
          data-cy="refresh"
          type="button"
          className="p-3 bg-main-blue text-white rounded-full"
          onClick={() => refetch()}
        >
          Refresh
        </button>
        {urls?.map((url) => (
          <div key={url.id}>
            <a href={`/${url.shortUrl}`} target="_blank" rel="noreferrer noopener">
              /
              {url.shortUrl}
              {' -> '}
              {url.originalUrl}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Urls;
