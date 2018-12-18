import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


const Blogs = ({ blogs }) => ((
  <>
    <h1
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
      Blogs Home
  </h1>
      <hr />
      
      <Link to={'/blogform'} style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
      <Button 
      >Add a Blog Post</Button>
      </Link>

    <ul>
        {
          blogs.map(blog => (
            <Blog key={blog.id} {...blog} />
          ))
        }
    </ul>
        <br />
  </>

))

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);