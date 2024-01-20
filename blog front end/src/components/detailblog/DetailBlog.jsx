import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailBlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://vercel-project-backend.vercel.app/api/v1/blog/${blogId}`);;

        if (response.ok) {
          const data = await response.json();
          setBlog(data);
          console.log("This is console",data)
        } else {
          console.error('Failed to fetch blog details');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (!blog) {
    return <div>Loading...
        <h1>This is Details Blog page</h1>
        <h1>This is Details Blog page</h1>
     
    </div>; // You can replace this with a loading spinner or any loading indicator
  }

  return (
    <div style={{ width: '80%', maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>News Details</h1>
    <img
      src={blog.blogimg}
      alt={blog.title}
      style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }}
    />
    
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', textDecoration: 'underline' }}>
  {blog.title}
</h2>
<p style={{ fontSize: '1.5rem', lineHeight: '2', height: 'auto' }}>{blog.content}</p>


    {/* Add any other fields you want to display */}
  </div>
  );
}

export default DetailBlog;
