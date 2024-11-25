import React from "react";
import "../matchHighlights.css";

const MatchHighlights = () => {
  const highlights = [
    { id: 1, title: "Team A vs Team B", videoLink: "#", thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-professional-soccer-match-highlights-you-design-template-69160970ea9969a965265387495bb3d2.webp?ts=1723278640" },
    { id: 2, title: "Incredible Goal by Player X", videoLink: "#", thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-b3cedb202d72e803c65256d785fab80d.webp?ts=1732461754" },
    { id: 3, title: "Epic Save by Goalkeeper Y", videoLink: "#", thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-youtube-thumbnail-template-design-92e0a0b3c80a6fa2ca82ffe27597aae6.jpg?ts=1697977884" },
  ];

  const news = [
    {
      id: 1,
      title: "Player X Transfers to Team Z",
      description: "Breaking news about Player X joining Team Z for a record fee.",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-maximalist-simple-photo-soccer-game-new-design-template-55e3aa8bc92c2cf7e5ce4a49bf09d5e2.webp?ts=1723089708",
    },
    {
      id: 2,
      title: "Championship Finals Preview",
      description: "An in-depth analysis of the upcoming championship finals.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQ4k34t2h7iYsUXpdOmdIGmiuqsQYZIHA-A&s",
    },
    {
      id: 3,
      title: "Top 10 Goals of the Season",
      description: "A compilation of the most amazing goals from this season.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3YTmlzUccOPH6mu5JWxSrzE-2Pz-ZBNQBg&s",
    },
  ];

  return (
    <div className="highlights-container">
      <section className="highlight-section">
        <h2>Match Highlights</h2>
        <div className="highlight-grid">
          {highlights.map((highlight) => (
            <div className="highlight-card" key={highlight.id}>
              <img src={highlight.thumbnail} alt={highlight.title} />
              <div className="highlight-details">
                <h3>{highlight.title}</h3>
                <a href={highlight.videoLink} target="_blank" rel="noopener noreferrer">
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="news-section">
        <h2>Football News</h2>
        <div className="news-grid">
          {news.map((article) => (
            <div className="news-card" key={article.id}>
              <img src={article.image} alt={article.title} />
              <div className="news-details">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MatchHighlights;
