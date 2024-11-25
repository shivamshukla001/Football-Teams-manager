import React from "react";
import "../blogList.css";
import { Link } from "react-router-dom";
const BlogList = () => {
  const blogs = [
    {
      title: "How to Manage a Football Team",
      date: "2024-11-18",
      author: "Shivam Shukla",
      image:
        "data:image/jpeg;base64,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",
      content:
        "Managing a football team requires skill, strategy, and the ability to foster team spirit. Learn the secrets to managing a winning team here.",
    },
    {
      title: "The Importance of Analytics in Football",
      date: "2024-11-10",
      author: "John Doe",
      image:
        "data:image/jpeg;base64,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",
      content:
        "Data-driven decisions can revolutionize football. Learn how analytics can give teams a competitive edge and improve performance on the field.",
    },
    {
      title: "Top 10 Football Strategies",
      date: "2024-11-05",
      author: "Jane Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pyE7rEx2iPPib_1qNVddhas1CwQ_VFQ8HQ&s",
      content:
        "Explore the top 10 football strategies that have transformed games and led to unforgettable moments in the sport.",
    },
    {
      title: "The Evolution of Football Technology",
      date: "2024-10-29",
      author: "Emma Watson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s",
      content:
        "From wearable tech to AI analytics, discover how modern technology is changing the face of football.",
    },
    {
      title: "Secrets of a Winning Football Team",
      date: "2024-10-15",
      author: "Michael Johnson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2M4heYbAE5Ms0CsJgEHzZt21-ryOzmW6Sg&s",
      content:
        "Uncover the behind-the-scenes secrets that make a football team successful both on and off the pitch.",
    },
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Explore Our Football Blogs</h1>
        <p>
          Dive into insights, strategies, and stories that inspire every
          football enthusiast.
        </p>
      </header>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-meta">
                By {blog.author} | {blog.date}
              </p>
              <p className="blog-excerpt">
                {blog.content.substring(0, 100)}... {/* Shortened content */}
              </p>
              <Link to={`/blogs/${blog.id}`} className="blog-card-link">
            Read More
          </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;