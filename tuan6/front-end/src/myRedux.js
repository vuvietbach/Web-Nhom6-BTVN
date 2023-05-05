import { configureStore } from '@reduxjs/toolkit'

// Define your initial state
const initialState = {
    blogs : [],
};

// Define your reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_BLOG_BY_ID':
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload.id),
      };
    case 'SET_BLOGS':
        return {
            ...state,
            blogs: action.payload.blogs,
        };
    default:
      return state;
  }
}

// Create your Redux store
const store = configureStore({reducer});

export const deleteBlogByID = (id) => ({
    type: 'DELETE_BLOG_BY_ID',
    payload: { id }
  });
export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    payload: {blogs}
});
export const getBlogByID = (id) => (
    store.getState().blogs.find((blog) => blog._id === id)
);
export default store;
