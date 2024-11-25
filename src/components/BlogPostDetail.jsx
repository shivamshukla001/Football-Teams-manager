import React from 'react';
import { useParams } from 'react-router-dom';
import '../BlogPostDetails.css'; // Add a new CSS file for styles

const BlogPostDetails = () => {
  const { id } = useParams(); // Extract the blog ID from the URL

  // Simulated blog data, ideally this will come from a server or a state management system
  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Football Tactics',
      content: 'In this post, we delve into the intricacies of football tactics...',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: '2',
      title: 'Top Players of the Decade',
      content: 'Explore the best football players who have ruled the pitch in the last decade...',
      image: 'https://via.placeholder.com/800x400',
    },
    // Add more blog posts as needed
  ];

  // Find the blog post based on the id parameter
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return <h2 style={{ textAlign: 'center', color: '#FF6347' }}>Blog post not found!</h2>;
  }

  return (
    <div className="blog-details-container">
      <div className="blog-details-content">
        <img src={blog.image} alt={blog.title} className="blog-details-image" />
        <h1 className="blog-details-title">{blog.title}</h1>
        <p className="blog-details-text">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPostDetails;
