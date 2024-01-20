import React, { useState, useEffect } from 'react';

const ReadBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showFullContent, setShowFullContent] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/v1/blog/readblog', {
          credentials: 'include',
          method: 'GET',
        });

        if (response.ok) {
          const { blogs } = await response.json();
          console.log('Blogs Data:', blogs);
          setBlogs(blogs);
          setShowFullContent(new Array(blogs.length).fill(false));
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (index) => {
    setShowFullContent((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Explore Simple and Attractive Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length === 0 ? (
          <p className="text-gray-700 text-center">No blogs available</p>
        ) : (
          <>
            {blogs.map((blog, index) => (
  <div key={blog._id} className="bg-white rounded-md overflow-hidden shadow-md">
    <div className="p-6">
      <img src={blog.blogimg} alt="Blog Image" className="w-full h-48 object-cover mb-4 rounded" />
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-xs text-gray-500">{`Posted on ${new Date(blog.createdAt).toLocaleString()}`}</p>
      </div>
      {showFullContent[index] ? (
        <p className="text-gray-800">{blog.content}</p>
      ) : (
        <p className="text-gray-800">
          {`${blog.content.slice(0, 100)}...`}{' '}
          <button
            onClick={() => handleReadMore(index)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
          >
            Read More
          </button>
        </p>
      )}
    </div>
  </div>
))}

          </>
        )}
      </div>
    </div>
  );
};

export default ReadBlog;
