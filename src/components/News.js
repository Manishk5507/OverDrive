import React, { useState } from 'react';


const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    setError('');
    try {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`);
      const data = await res.json();
      if (data.status === 'ok') {
        setArticles(data.articles || []);
      } else {
        setError('Failed to fetch news.');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Something went wrong while fetching news.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" card mb-4 p-3">
      <h4>Top News</h4>
      <button className="btn btn-primary mb-3" onClick={fetchNews}>
        {loading ? 'Loading...' : 'Load News'}
      </button>
      
      {error && <p className="text-danger">{error}</p>}
      
      {articles.length > 0 ? (
        <ul className="list-group">
          {articles.map((article, index) => (
            <li key={index} className="list-group-item">
              <strong>{article.title}</strong><br />
              {article.source?.name && <small>Source: {article.source.name}</small>}<br />
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No news available. Try loading again.</p>
      )}
    </div>
  );
};

export default News;
