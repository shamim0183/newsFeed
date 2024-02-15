import React from 'react';
import useNewsQuery from '../hooks/useNewsQuery';

const News = ({ selectedCategory }) => {
  // Fetch news based on selected category
  const { news, loading, error } = useNewsQuery(selectedCategory);

  // Handling loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter news items with null data
  const filteredNews = news.filter(newsItem => newsItem.title && newsItem.description && newsItem.publishedAt && newsItem.urlToImage);

  // Calculate the midpoint to split the news into two columns
  const midpoint = Math.ceil(filteredNews.length / 2);
  const leftColumnNews = filteredNews.slice(0, midpoint);
  const rightColumnNews = filteredNews.slice(midpoint);

  // Extract the first image from each column
  const leftImage = leftColumnNews.find(newsItem => newsItem.urlToImage);
  const rightImage = rightColumnNews.find(newsItem => newsItem.urlToImage);

  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* left */}
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* Rendering left image */}
            {leftImage && (
              <div className="col-span-12">
                <img className="w-full" src={leftImage.urlToImage} alt="left-image" />
                {leftImage.imageCaption && <p className="mt-5 text-base text-[#5C5955]">{leftImage.imageCaption}</p>}
              </div>
            )}
            {/* Rendering news items for the left column */}
            {leftColumnNews.map((newsItem, index) => (
              <div className="col-span-12 grid grid-cols-12 gap-4" key={index}>
                {/* info */}
                <div className="col-span-12 lg:col-span-4">
                  <a href={newsItem.url}>
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                      {newsItem.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#5C5955]">{newsItem.description}</p>
                  <p className="mt-5 text-base text-[#5C5955]">
                    {newsItem.publishedAt && new Date(newsItem.publishedAt).toLocaleString()}
                  </p>
                </div>
                {/* thumb */}
                <div className="col-span-12 lg:col-span-8">
                  {newsItem.urlToImage && <img className="w-full" src={newsItem.urlToImage} alt="thumb" />}
                  {newsItem.imageCaption && <p className="mt-5 text-base text-[#5C5955]">{newsItem.imageCaption}</p>}
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* Rendering right image */}
              {rightImage && (
                <div className="col-span-12 mb-6 md:col-span-8">
                  <img className="w-full" src={rightImage.urlToImage} alt="right-image" />
                  {rightImage.imageCaption && <p className="mt-5 text-base text-[#5C5955]">{rightImage.imageCaption}</p>}
                </div>
              )}
              {/* Rendering news items for the right column */}
              {rightColumnNews.map((newsItem, index) => (
                <div className="col-span-12 mb-6 md:col-span-8" key={index}>
                  {/* info */}
                  <div className="col-span-12 mt-6 md:col-span-4">
                    <a href={newsItem.url}>
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {newsItem.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">{newsItem.description}</p>
                    <p className="mt-5 text-base text-[#94908C]">
                      {newsItem.publishedAt && new Date(newsItem.publishedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
