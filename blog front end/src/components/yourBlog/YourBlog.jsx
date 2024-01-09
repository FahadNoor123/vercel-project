import React, { useState, useEffect } from 'react';
import { Link,  NavLink } from 'react-router-dom'; 

  const YourBlog = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('/api/v1/blog/yourblog', {
            method: 'GET',
          });
  
          if (response.ok) {
            const { blogs } = await response.json();
            
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
          <>
          <p className="text-gray-700">
            Please Write Any so we can display here! Thank you for visiting the Blog Website.
          </p>

          <Link to="/writeblog">
          <button
            type="button"
            className="w-40 h-10 bg-gradient-to-r from-white via-gray-200 to-black hover:from-black hover:via-gray-200 hover:to-white text-black font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 "
          >
            Write Blog <span className="text-white hover:text-black">Here</span>
          </button>
        </Link>
            </>

 

        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{blog.title}</h3>
                  <p className="text-xs text-gray-500">{`Posted on ${new Date(
                    blog.createdAt
                  ).toLocaleString()}`}</p>
                </div>
                <p className="text-gray-800">{blog.content}</p>
                <Link to={{ pathname: `/editblog/${blog._id}`, state: { blog } }}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
               Edit
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    );
  };
  
  export default YourBlog;
  
  
