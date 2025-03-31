import React, { FormEvent, useState } from 'react';
import { useAddUrlMutation, useGetUrlsQuery } from './graphql/url_shortener.generated';

function HomePage() {
  const [newUrl, setNewUrl] = useState({ originalUrl: '', shorten: '' });
  const { data, refetch } = useGetUrlsQuery();
  const [addUrl] = useAddUrlMutation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUrl((prevUrl) => ({ ...prevUrl, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUrl.originalUrl && newUrl.shorten) {
      const urlExists = data?.urlShorteners.some((url) => url.shortUrl === newUrl.shorten);
      if (!urlExists) {
        await addUrl({
          variables: {
            originalUrl: newUrl.originalUrl,
            shorten: newUrl.shorten,
          },
        });
        setNewUrl(newUrl);
        await refetch();
      } else {
        alert('This short URL already exists. Please choose another one.');
      }
    }
  };

  return (
    <section className="container mx-auto py-8">
      <div
        data-cy="urlContainer"
        className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
      >
        <div
          className="font-semibold text-xl"
        >
          Ajouter une URL à raccourcir :
        </div>
        <div className="font-semibold">
          <form
            className="flex gap-4"
            onSubmit={onSubmit}
          >
            <input
              data-cy="originalUrlInput"
              name="originalUrl"
              placeholder="https://mobile.club"
              className="p-3 w-96 border-2 rounded-full border-main-blue"
              value={newUrl.originalUrl}
              onChange={onChange}
            />
            <input
              data-cy="shortenUrlInput"
              name="shorten"
              placeholder="mobileclub"
              className="p-3 w-96 border-2 rounded-full border-main-blue"
              value={newUrl.shorten}
              onChange={onChange}
            />
            <button
              data-cy="submit"
              type="submit"
              className="p-3 bg-main-blue text-white rounded-full"
            >
              Raccourcir
            </button>
          </form>
        </div>
        <div className="font-semibold">
          <a
            href="/urls"
            rel="noopener noreferrer"
            className="p-3 bg-main-blue text-white rounded-full"
          >
            URLs raccourcies
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
