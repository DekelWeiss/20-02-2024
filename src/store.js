// store.js
import { createStore } from 'redux';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'UPDATE_POST':
      const { postId, updatedData } = action.payload;
      return {
        ...state,
        posts: state.posts.map((post, index) => {
          if (index === postId) {
            return {
              ...post,
              formData: updatedData,
            };
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
