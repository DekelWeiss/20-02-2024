// FormDisplayComponent.js
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
    <div>
      <h2>Form Data</h2>
      {posts.map((post, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
          data-testid="post"
          data-test-id={index}
          data-test-name={post.formData.firstName}
          data-test-age={post.formData.age}
          data-test-gender={post.formData.gender}
          data-test-subscribed={post.formData.isSubscribed}
          data-test-is-editing={editingPostId === index}
        >
          <h3>User Profile {index + 1}</h3>
          <p>First Name: {post.formData.firstName}</p>
          <p>Last Name: {post.formData.lastName}</p>
          <p>Age: {post.formData.age}</p>
          <p>Gender: {post.formData.gender}</p>
          <p>Subscribed: {post.formData.isSubscribed ? "Yes" : "No"}</p>
          <button onClick={() => handleEditClick(index)}>Edit</button>
          {editingPostId === index && (
            <CustomForm
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
