import React, { createContext } from 'react';
import useNewsQuery from '../hooks/useNewsQuery';


// Create the NewsContext
const NewsContext = createContext();

// Create the NewsProvider component
const NewsProvider = ({ children }) => {
  // Utilize the useNewsQuery hook to fetch news data
  const { news, loading, error } = useNewsQuery();

  // Provide the news data to the context value
  const contextValue = {
    news,
    loading,
    error,
  };

  return (
    <NewsContext.Provider value={contextValue}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
