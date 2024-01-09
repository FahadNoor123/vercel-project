import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBlog() {
  const { blogId } = useParams();
  console.log(blogId)
  const navigate = useNavigate();
  const [editedBlog, setEditedBlog] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    // Fetch blog details using blogId and update state
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`/api/v1/blog/${blogId}`);
        if (response.ok) {
          const data = await response.json();
          setEditedBlog({
            title: data.title,
            content: data.content,
          });
        } else {
          console.error('Error fetching blog details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

 
  const handleUpdate = () => {
    if (window.confirm('Are you sure you want to update this blog?')) {
      const updatedBlogData = {
        title: editedBlog.title,
        content: editedBlog.content,
        // Add other properties as needed
      };
  
      // Call your API to update the blog
      fetch(`/api/v1/blog/${blogId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlogData),
      })
        .then(response => {
          console.log(blogId); // Move this line inside the then block
          if (response.ok) {
            // If the update was successful, handle the response accordingly
            alert("Blog has been updated");
            navigate(`/yourblog`);
          } else {
            console.error('Error while updating blog:', response.status);
          }
        })
        .catch(error => {
          console.error('Error updating blog:', error);
        });
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure  to delete this blog?')) {
      // Call your API to delete the blog
      fetch(`/api/v1/blog/${blogId}`, {
        method: 'delete',
      })
        .then(response => {
          console.log(blogId); // Move this line inside the then block
          if (response.ok || response.status === 404) {
            // If the deletion was successful, call the onDelete callback
            alert("Blog has been deleted")
            navigate(`/yourblog`);
          } else {
            console.error('Error deleting blog:', response.status);
          }
        })
        .catch(error => {
          console.error('Error deleting blog:', error);
        });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
        return (
          <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-4">Read Blogs</h2>
        
          <input
        className=" text-2xl font-semibold mb-2 w-80% lg:w-1/2 lg:inline lg:flex-shrink-0 border-b-2 focus:border-blue-500"
        type="text"
        name="title"
        value={editedBlog.title}
        onChange={handleInputChange}
        placeholder="Enter Blog Title"
      />

  
    <div>
      <textarea
        className="text-gray-800 p-2 border border-gray-300 rounded w-full h-32 md:h-40"
        name="content"
        value={editedBlog.content}
        onChange={handleInputChange}
        placeholder="Enter Blog Content"
      />
    </div>
  
        <div className="flex-col md:flex-row justify-between items-center">
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md md:mr-2 md:mb-0"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>

      </div>
  
  );
}

export default EditBlog;
