import React, { useState } from 'react';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch('/api/v1/blog/blogwrite', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ title, content }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Error submitting the blog post');
    //   }

    //   // Clear the input fields after successful submission
    //   setTitle('');
    //   setContent('');
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <form action="/api/v1/blog/blogwrite" method="POST" encType="application/json">
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Write a New Blog</h2>

        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="text-sm text-gray-600">
              Blog Title
            </label>
            <input
                name='title'
              type="text"
              id="title"
              className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the title of your blog"
            //   value={title}
            //   onChange={handleTitleChange}
            required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="text-sm text-gray-600">
              Blog Content
            </label>
            <textarea
                name='content'
              id="content"
              className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Write your blog content here"
            //   value={content}
            //   onChange={handleContentChange}
            required
            ></textarea>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Submit Blog
          </button>
        </div>
      </div>
    </form>
  );
};

export default WriteBlog;
