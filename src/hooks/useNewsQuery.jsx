import { useState, useEffect } from 'react';

const useNewsQuery = (category, query) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      let url = '';

      if (query) {
        // Modify the URL to search for the query in both title and description fields
        url = `http://localhost:8000/v2/search?q=${query}&fields=title,description`;
      } else if (category) {
        url = `http://localhost:8000/v2/top-headlines?category=${category}`;
      } else {
        url = 'http://localhost:8000/v2/top-headlines';
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch news');
        }

        // Filter articles based on the search query if it exists
        const filteredNews = query ? data.articles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
        ) : data.articles;

        setNews(filteredNews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, query]);

  return { news, loading, error };
};

export default useNewsQuery;
