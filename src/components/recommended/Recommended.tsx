import HomeCard from '@components/cards/HomeCard';
import FlexLayout from '@layouts/FlexLayout';
import React from 'react';

interface RecommendedProps {
  
}

const Recommended: React.FC<RecommendedProps> = () => {
  return (
    <section>
      <header>
        <h2> Recommended </h2>
      </header>
      <FlexLayout>
        <HomeCard
          title="video title"
          thumbnail="https://t.ctcdn.com.br/LN1tRIPlW7eDzXJx-ymPBqxAX5s=/512x288/smart/filters:format(webp)/i574834.jpeg"
          avatar="/assets/tanjiro.jpg"
          rumbler="Tanjiro"
          intervalSinceWasPosted={200}
          views={400000}  
          className="mr-2"
        />
        <HomeCard
          title="video title"
          thumbnail="https://t.ctcdn.com.br/LN1tRIPlW7eDzXJx-ymPBqxAX5s=/512x288/smart/filters:format(webp)/i574834.jpeg"
          avatar="/assets/tanjiro.jpg"
          rumbler="Tanjiro"
          intervalSinceWasPosted={200}
          views={400000}  
          className="mx-2"
        />
        <HomeCard
          title="video title"
          thumbnail="https://t.ctcdn.com.br/LN1tRIPlW7eDzXJx-ymPBqxAX5s=/512x288/smart/filters:format(webp)/i574834.jpeg"
          avatar="/assets/tanjiro.jpg"
          rumbler="Tanjiro"
          intervalSinceWasPosted={200}
          views={400000}  
          className="mx-2"
        />
        <HomeCard
          title="video title"
          thumbnail="https://t.ctcdn.com.br/LN1tRIPlW7eDzXJx-ymPBqxAX5s=/512x288/smart/filters:format(webp)/i574834.jpeg"
          avatar="/assets/tanjiro.jpg"
          rumbler="Tanjiro"
          intervalSinceWasPosted={200}
          views={400000}  
          className="ml-2"
        />
      </FlexLayout>
    </section>
  );
};

export default Recommended;