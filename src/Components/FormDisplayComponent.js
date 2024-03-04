import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomForm from "./CustomForm";

const FormDisplayComponent = () => {
  const [editingPostId, setEditingPostId] = useState(null);

  const handleEditClick = (postId) => {
    setEditingPostId(postId);
  };

  // Use a selector to retrieve the list of posts from the Redux store
  const posts = useSelector((state) => state.posts);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Form Data</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h3>User Profile {post.id}</h3>
          <p><strong>First Name:</strong> {post.formData.firstName}</p>
          <p><strong>Last Name:</strong> {post.formData.lastName}</p>
          <p><strong>Age:</strong> {post.formData.age}</p>
          <p><strong>Gender:</strong> {post.formData.gender}</p>
          <p><strong>Subscribed:</strong> {post.formData.isSubscribed ? "Yes" : "No"}</p>
          <button
            onClick={() => handleEditClick(post.id)}
            style={{ padding: "8px 16px", marginTop: "10px" }}
          >
            Edit
          </button>
          {editingPostId === post.id && (
            <CustomForm
              key={`form-${post.id}`}
              postId={editingPostId}
              initialFormData={post.formData}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormDisplayComponent;
