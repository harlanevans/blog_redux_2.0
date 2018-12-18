import axios from 'axios';

// ACTIONS

const BLOGS = 'BLOGS';
const ADD_BLOG = 'ADD_BLOG';
const UPDATE_BLOG = 'UPDATE_BLOG';
const DELETE = 'DELETE';

export const getBlogs = () => {
  return (dispatch) => {
    axios.get('/api/blogs')
      .then( res => dispatch({ type: BLOGS, blogs: res.data }) )
  }
}

export const addBlog = (blog) => {
  return (dispatch) => {
    axios.post('./api/blogs', { blog, })
      .then(res => dispatch({ type: ADD_BLOG, blog: res.data }))
  }
}

// REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [action.blog, ...state];
      case "DELETE":
      return state.filter( blog => {
        return (blog.id !== action.id)
      })
    default:
      return state;
  }
}
