import axios from 'axios';

// ACTIONS




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
