import React, { useState, useEffect } from 'react';

  const ReadBlog = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('/api/v1/blog/readblog', {
            method: 'GET',
          });
  
          if (response.ok) {
            const { blogs } = await response.json();
            console.log('Blogs Data:', blogs);
            setBlogs(blogs);
          } else {
            console.error('Failed to fetch blogs');
          }
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []);
  
    return (
      <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Read Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length === 0 ? (
          <p className="text-gray-700">No blogs available</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{blog.title}</h3>
                  <p className="text-xs text-gray-500">{`Posted on ${new Date(blog.createdAt).toLocaleString()}`}</p>
                </div>
                <p className="text-gray-800">{blog.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    );
  };
  
  export default ReadBlog;
  
  
