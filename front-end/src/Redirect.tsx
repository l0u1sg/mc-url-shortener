import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetUrlsQuery } from './graphql/url_shortener.generated';

function Redirect() {
  const { shorten } = useParams<{ shorten: string} >();
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();
  const { data } = useGetUrlsQuery();

  useEffect(() => {
    if (data) {
      const url = data.urlShorteners.find((u) => u.shortUrl === shorten)?.originalUrl;
      if (url) {
        const timer = setTimeout(() => {
          navigate(window.location.href = url);
        }, 5000);

        const interval = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
          clearTimeout(interval);
          clearInterval(interval);
        };
      }
    }
    return undefined;
  }, [shorten, data, navigate]);

  return (
    <div>
      <section className="container mx-auto py-8">
        <div
          data-cy="messageContainer"
          className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
        >
          <div
            className="font-semibold text-xl"
          >
            Redirection vers votre super URL :
          </div>
          <div className="font-thin">
            {data?.urlShorteners.find((u) => u.shortUrl === shorten)?.originalUrl}
          </div>
          <div className="font-semibold">
            Vous serez redirigé dans
            {' '}
            {timeLeft}
            {' '}
            secondes...
          </div>
          <div className="font-semibold">
            Et si, en attendant, vous alliez faire un tour chez Mobile.Club ;)
          </div>
          <div className="font-semibold">
            <a
              href="https://mobile.club"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-main-blue text-white rounded-full"
            >
              Mobile.Club
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Redirect;
