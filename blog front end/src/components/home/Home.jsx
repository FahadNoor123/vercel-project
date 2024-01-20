import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [showFullContent, setShowFullContent] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://vercel-project-backend.vercel.app/api/v1/blog/readblog", {
          credentials: "include",
          method: "GET",
        });

        if (response.ok) {
          const { blogs } = await response.json();
          console.log("Blogs Data:", blogs);
          setBlogs(blogs);
          setShowFullContent(new Array(blogs.length).fill(false));
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // const handleReadMore = (index) => {
  //   setShowFullContent((prev) => {
  //     const newState = [...prev];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-4">Stay Informed with the Latest News</h2>
          <p className="text-lg mb-8">Get the latest updates and insights from the automotive world.</p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img src={blog.blogimg} alt={blog.title} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                {showFullContent[index] ? (
                  <p className="text-gray-700">{blog.content}</p>
                ) : (
                  <p className="text-gray-700">{`${blog.content.slice(0, 100)}...`}</p>
                )}
               <br/>
                <Link to={{ pathname: `/detailblog/${blog._id}`, state: { blog } }} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
